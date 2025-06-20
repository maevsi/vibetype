import type { MultiPartData } from 'h3'

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event)

  if (!formData) {
    throw createError({ statusCode: 400, statusMessage: 'No form data' })
  }

  const fields: Record<string, string | boolean> = {}
  const files: MultiPartData[] = []

  formData.forEach((item) => {
    if (item.filename) {
      files.push(item)
    } else {
      const fieldName = item.name
      const fieldValue = item.data.toString()

      if (fieldName && fieldName === 'consent') {
        fields[fieldName] = fieldValue === 'true'
      } else if (fieldName) {
        fields[fieldName] = fieldValue
      }
    }
  })

  const body = schemaFormFeatureRequest.parse(fields)

  const { createItem: createMondayItem, uploadFile } = useMonday()

  const item: { id: string; name: string } = await createMondayItem({
    board: 'featureRequest',
    columns: {
      consent: body.consent,
      emailAddress: body.emailAddress,
      name: body.name,
      featureName: body.featureName,
      featureDescription: body.featureDescription,
    },
  })

  if (files.length > 0) {
    for (const file of files) {
      await uploadFile({
        itemId: item.id,
        columnId: 'datei_hochladen',
        file: file,
      })
    }
  }

  return item
})
