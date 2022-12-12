import TextField from '@mui/material/TextField'
import Autocomplete, {
  AutocompleteChangeReason,
} from '@mui/material/Autocomplete'
import useAccountSelect, { type SetLoading } from './useAccountSelect'
import { SyntheticEvent } from 'react'
import { AutocompleteValue } from '@mui/material'

export type AccountValue = AutocompleteValue<Account, boolean, boolean, boolean>

interface AccountSelectProps {
  onChange: (event: SyntheticEvent, value: AccountValue) => void
}

export default function AccountSelect({ onChange }: AccountSelectProps) {
  const { accounts, loadingAccounts, getOptionLabel } = useAccountSelect()

  return (
    <Autocomplete
      loading={loadingAccounts}
      options={accounts}
      renderInput={(params) => <TextField {...params} label="Your account" />}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
    />
  )
}
