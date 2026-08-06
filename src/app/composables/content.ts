export const useContent = (path: string) => {
  const { locale } = useI18n()
  return useAsyncData(
    `content-${locale.value}-${path}`,
    () => queryCollection('content').path(`/${locale.value}/${path}`).first(),
    { watch: [locale] },
  )
}
