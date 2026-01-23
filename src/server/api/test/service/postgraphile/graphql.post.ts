export default defineEventHandler(() => {
  const isTesting = useIsTesting({ isCookieEnabled: false })

  if (!isTesting) {
    return throwError({
      status: 403,
      statusText: 'This endpoint is only available in the testing environment.',
    })
  }

  return {
    data: {
      allLegalTerms: {
        nodes: [
          {
            id: '858ab35b-0433-4698-902f-ff42a25ec94a',
            term: '# Terms of Use',
          },
        ],
      },
    },
  }
})
