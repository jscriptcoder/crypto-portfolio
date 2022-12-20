import { useMemo } from 'react'

export default function useAccountDetails(
  loading?: boolean,
  account?: AccountDetails,
  error?: ServerError,
) {
  const noAccountSelected = useMemo(
    () => !loading && !account && !error,
    [loading, account, error],
  )

  return {
    noAccountSelected,
  }
}
