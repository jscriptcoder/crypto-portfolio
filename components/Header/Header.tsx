import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'

export default function Header() {
  return (
    <header className="flex items-center space-x-2 text-yellow-400">
      <div>
        <CurrencyBitcoinIcon className="!text-4xl" />
      </div>
      <span className="font-bold">Cool Crypto Portfolio</span>
    </header>
  )
}
