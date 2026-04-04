export const useContent = async (path: string) => {
  const { locale } = useI18n()
  return await useAsyncData(
    `content-${locale.value}-${path}`,
    () => queryCollection('content').path(`/${locale.value}/${path}`).first(),
    { watch: [locale] },
  )
}
