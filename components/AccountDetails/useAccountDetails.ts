import { useMemo } from 'react'

export default function useAccountDetails(
  loading?: boolean,
  account?: AccountDetails,
) {
  const noAccountSelected = useMemo(
    () => !loading && !account,
    [loading, account],
  )

  return {
    noAccountSelected,
  }
}
