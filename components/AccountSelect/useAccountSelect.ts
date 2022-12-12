import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface UseAccountSelectReturn {
  accounts: Account[]
  loadingAccounts: boolean
  getOptionLabel: (account: Account) => string
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

  const getOptionLabel = useCallback((account: Account) => account.name, [])

  return {
    accounts,
    loadingAccounts,
    getOptionLabel,
  }
}
