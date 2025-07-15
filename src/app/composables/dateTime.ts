import type { Dayjs } from 'dayjs'

export const useDateTime = () => {
  const { $dayjs } = useNuxtApp()
  const timeZone = useTimeZone()

  return (dateTime?: string | number | Dayjs | Date | null) =>
    $dayjs(dateTime).tz(timeZone)
}
