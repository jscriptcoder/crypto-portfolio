import WarningRoundedIcon from '@mui/icons-material/WarningRounded'

export default function NoAccountSelected() {
  return (
    <div className="flex items-center space-x-2">
      <WarningRoundedIcon />
      <span>No account has been selected yet</span>
    </div>
  )
}
