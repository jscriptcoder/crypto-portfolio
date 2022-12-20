import useAccountDetails from './useAccountDetails'
import NoAccountSelected from './NoAccountSelected'
import Wallet, { LoadingWallet } from '../Wallet'
import { Alert } from '@mui/material'

interface AccountDetailsProps {
  error?: ServerError
  loading?: boolean
  account?: AccountDetails
}

export default function AccountDetails({
  error,
  account,
  loading,
}: AccountDetailsProps) {
  const { noAccountSelected } = useAccountDetails(loading, account, error)

  // For the sake of this exercise we're gonna be displaying
  // details about wallet protocole
  const wallet: Protocole = account?.assetByProtocols['wallet']

  return (
    <div className="AccountDetails">
      {noAccountSelected && <NoAccountSelected />}
      {loading && <LoadingWallet />}
      {account && <Wallet data={wallet} />}
      {error && (
        <Alert severity="error">There was an error accessing the server</Alert>
      )}
    </div>
  )
}
