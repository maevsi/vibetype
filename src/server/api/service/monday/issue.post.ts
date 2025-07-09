export default defineEventHandler(async (event) => {
  // const formData = await readMultipartFormData(event)
  // if (!formData)
  //   return throwError({ statusCode: 400, statusMessage: 'No form data' })
  // const files = formData.filter((item) => item.filename)

  const body = await getBodySafe({ event, schema: schemaFormIssue })
  const { createItem: createMondayItem /*, uploadFile */ } = useMonday()

  const item = await createMondayItem({
    board: 'issue',
    columns: {
      itemDescription: body.itemDescription,
      itemName: body.itemName || '',
      userConsent: body.userConsent,
      userEmailAddress: body.userEmailAddress || '',
      userName: body.userName || '',
    },
  })

  // const runtimeConfig = useRuntimeConfig(event)
  //
  // if (!item)
  //   return throwError({
  //     statusCode: 500,
  //     statusMessage: 'Failed to create item',
  //   })

  // for (const file of files) {
  //   await uploadFile({
  //     columnId: runtimeConfig.private.monday.board.idea.column.itemUploadsId,
  //     file: file,
  //     itemId: item.id,
  //   })
  // }

  return item
})
