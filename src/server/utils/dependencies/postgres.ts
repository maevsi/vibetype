import postgres from 'postgres'

export const sql = postgres()

export const executeQuery = async <T>(query: Promise<T>): Promise<T> => {
  try {
    return await query
  } catch (error) {
    throw throwError({
      statusCode: 500,
      statusMessage: (error as Error).message,
    })
  }
}
