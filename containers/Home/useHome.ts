import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { AccountValue } from '../../components/AccountSelect/AccountSelect'

interface UseHomeReturn {
  account: AccountDetails
  loadingAccount: boolean
  onChangeAccount: (
    event: SyntheticEvent,
    accountValue: AccountValue,
  ) => Promise<void>
}

export default function useHome() {
  const [loadingAccount, setLoadingAccount] = useState(false)
  const [account, setAccount] = useState<AccountDetails>()

  const onChangeAccount = useCallback(
    async (event: SyntheticEvent, accountValue: AccountValue) => {
      const account = accountValue as Account

      setLoadingAccount(true)

      try {
        const response = await fetch(`/api/account/${account.address}`)
        const data = (await response.json()) as AccountDetails
        setAccount(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingAccount(false)
      }
    },
    [],
  )

  return {
    account,
    loadingAccount,
    onChangeAccount,
  }
}
