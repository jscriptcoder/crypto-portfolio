import useAccountDetails from './useAccountDetails'
import NoAccountSelected from './NoAccountSelected'
import Wallet, { LoadingWallet } from '../Wallet'

interface AccountDetailsProps {
  loading?: boolean
  account?: AccountDetails
}

export default function AccountDetails({
  account,
  loading,
}: AccountDetailsProps) {
  const { noAccountSelected } = useAccountDetails(loading, account)

  // For the sake of this exercise we're gonna be displaying
  // details about wallet protocole
  const wallet: Protocole = account?.assetByProtocols['wallet']

  return (
    <div className="AccountDetails">
      {noAccountSelected && <NoAccountSelected />}
      {loading && <LoadingWallet />}
      {account && <Wallet data={wallet} />}
    </div>
  )
}
