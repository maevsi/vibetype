/** Resolves with the serial number of the next tag in range, or with `undefined` when the tag cannot be read, as an unformatted one cannot. */
export const nfcTagSerialNumberRead = ({
  reader,
  signal,
}: {
  reader: NDEFReader
  signal: AbortSignal
}) =>
  new Promise<string | undefined>((resolve, reject) => {
    reader.onreading = (event) => resolve(event.serialNumber || undefined)
    reader.onreadingerror = () => resolve(undefined)
    reader.scan({ signal }).catch(reject)
  })
