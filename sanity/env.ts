export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skLZ8laqN3stCw9gPgDnrTdV64dtIMVyLk7Wh3v4s3Ler8xUe15AkANaQL36RTYlgE1X0Dk72UeVhPJQ5V92yM7p6Kz5ZivXl71Tg2LhgCTmRpklXu60NfEWnez1UmQ4qxrHDnXrEY1FX8mSHSOJkm4hNbpDhFejA93TO0q39u14yh7AuWa0",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
