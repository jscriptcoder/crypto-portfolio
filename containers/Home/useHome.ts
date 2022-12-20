import { SelectChangeEvent } from '@mui/material'
import { useCallback, useState } from 'react'

interface UseHomeReturn {
  error?: ServerError
  account?: AccountDetails
  loadingAccount: boolean
  onChangeAccount: (event: SelectChangeEvent<string>) => void
}

function isServerError(
  details: AccountDetails | ServerError,
): details is ServerError {
  return 'error' in details
}

export default function useHome(): UseHomeReturn {
  const [loadingAccount, setLoadingAccount] = useState(false)

  // TODO: consider using SWR here
  const [account, setAccount] = useState<AccountDetails>()
  const [error, setError] = useState<ServerError>()

  const onChangeAccount = useCallback(
    async (event: SelectChangeEvent<string>) => {
      const address = event.target.value

      setLoadingAccount(true)

      try {
        const response = await fetch(`/api/account/${address}`)
        const data = (await response.json()) as AccountDetails | ServerError

        if (!isServerError(data)) {
          setAccount(data)
          setError(undefined)
        } else {
          setError(data)
        }
      } catch (err) {
        setError({ error: err })
      } finally {
        setLoadingAccount(false)
      }
    },
    [],
  )

  return {
    error,
    account,
    loadingAccount,
    onChangeAccount,
  }
}
