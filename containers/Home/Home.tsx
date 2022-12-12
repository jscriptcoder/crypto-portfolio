import AccountDetails from '../../components/AccountDetails'
import AccountSelect from '../../components/AccountSelect'
import useHome from './useHome'

export default function Home() {
  const { account, loadingAccount, onChangeAccount } = useHome()

  return (
    <div className="space-y-4">
      <div>
        <AccountSelect onChange={onChangeAccount} />
      </div>
      <div>
        <AccountDetails account={account} loading={loadingAccount} />
      </div>
    </div>
  )
}
