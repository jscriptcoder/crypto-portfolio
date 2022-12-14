import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'

interface UseAccountSelectReturn {
  label: string
  accounts: Account[]
  loadingAccounts: boolean
}

export type SetLoading = Dispatch<SetStateAction<boolean>>

export default function useAccountSelect(): UseAccountSelectReturn {
  const [loadingAccounts, setLoadingAccounts] = useState(false)
  const [accounts, setAccounts] = useState<Account[]>([])

  useEffect(() => {
    setLoadingAccounts(true)
    fetch(`/api/accounts`)
      .then((response) => response.json())
      .then((data: Account[]) => setAccounts(data))
      .catch(console.error)
      .finally(() => setLoadingAccounts(false))
  }, [])

  const label = useMemo(
    () => (loadingAccounts ? 'Loading accounts...' : 'Account'),
    [loadingAccounts],
  )

  return {
    label,
    accounts,
    loadingAccounts,
  }
}
