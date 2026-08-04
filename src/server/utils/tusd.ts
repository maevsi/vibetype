export const useTusdFilesUrl = () => {
  const getServiceHref = useGetServiceHref()

  return `${getServiceHref({ allowInternal: false, name: 'tusd' })}/files/`
}
