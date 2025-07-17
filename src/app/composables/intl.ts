export const useGetCurrencyFormatted = () => {
  const { locale } = useI18n({ useScope: 'global' })

  return (number: number) =>
    new Intl.NumberFormat(locale.value, {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(number)
}
