import postgres from 'postgres'

export const sql = postgres()

export const executeQuery = async <T>(query: Promise<T>): Promise<T> => {
  try {
    return await query
  } catch (error) {
    throw throwError({
      status: 500,
      statusText: (error as Error).message,
    })
  }
}
