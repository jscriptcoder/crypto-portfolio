import { Skeleton } from '@mui/material'
import { useMemo } from 'react'

interface AccountDetailsProps {
  loading?: boolean
  account?: AccountDetails
}

export default function AccountDetails({
  account,
  loading,
}: AccountDetailsProps) {
  const noAccountSelected = useMemo(
    () => !loading && !account,
    [loading, account],
  )

  return (
    <div>
      {noAccountSelected && <span>No account has been selected</span>}
      {loading && <Skeleton variant="rectangular" />}
    </div>
  )
}
