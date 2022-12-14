import useAccountSelect from './useAccountSelect'
import {
  AutocompleteValue,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'

export type AccountValue = AutocompleteValue<Account, boolean, boolean, boolean>

interface AccountSelectProps {
  onChange: (event: SelectChangeEvent<string>) => void
}

export default function AccountSelect({ onChange }: AccountSelectProps) {
  const { label, accounts, loadingAccounts } = useAccountSelect()

  return (
    <div className="AccountSelect">
      <FormControl variant="filled" className="w-full">
        <InputLabel>{label}</InputLabel>
        <Select disabled={loadingAccounts} label={label} onChange={onChange}>
          {accounts.map((account) => (
            <MenuItem key={account.address} value={account.address}>
              {account.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
