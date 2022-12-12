type Address = string

interface Asset {
  name: string
  symbol: string
  balance: number
  price: number
  value: number
  decimal: number
  chainContract: string
  contract: string
  imgSmall: string
  imgLarge: string
  explorerUrl: string
  openPnl: number
  totalCostBasis: number
}

interface Chain {
  name: string
  key: string
  imgSmall: string
  imgLarge: string
  color: string
  value: number
  totalCostBasis: number
  totalClosedPnl: number
  totalOpenPnl: number
}

type AssetType = 'UNDEFINED'
type AssetCategory = 'ERC721' | 'ERC1155'

interface ExtendedAsset extends Asset {
  chain: string
  costBasis: number
  averageClosedPnl: number
  totalClosedPnl: number
  balanceClosedPnl: number
  tokenId: string
  type: AssetType
  category: AssetCategory
}

interface ChainWithExtendedAssets extends Chain {
  assets: ExtendedAsset[]
}

interface Nft {
  name: Address
  key: string
  imgSmall: string
  imgLarge: string
  sellPrice: number
  spotPrice: number
  contract: Address
  vaultId: number
  vaultAddress: number
  totalCostBasis: number
  totalClosedPnl: number
  totalOpenPnl: number
  chains: Record<string, ChainWithExtendedAssets>
}

interface PositionAsset extends Asset {
  chainKey: string
  uuid: string
}

interface ProtocolPostionDetails {
  name: string
  assets: PositionAsset[]
  borrowAssets: PositionAsset[]
  healthRate: number
  rewardAssets: PositionAsset[]
  supplyAssets: PositionAsset[]
  totalCostBasis: number
  totalClosedPnl: number
  totalOpenPnl: number
  unlockAt: number
  value: number
}

interface ProtocolePosition {
  name: string
  assets: PositionAsset[]
  protocolPostions: ProtocolPostionDetails[]
}

interface ChainWithProtocolePositions extends Chain {
  protocolPositions: Record<string, ProtocolePosition>
}

interface Protocole {
  uuid: string
  name: string
  key: string
  imgSmall: string
  imgLarge: string
  value: number
  totalCostBasis: number
  totalClosedPnl: number
  totalOpenPnl: number
  chains: Record<string, ChainWithProtocolePositions>
}

interface AccountDetails {
  address: Address
  cashBalance: number
  closedPnl: number
  dailyIncome: number
  dailyExpense: number
  fees: number
  feesFiat: number
  openPnl: number
  networth: number
  totalCostBasis: number
  assetByProtocols: Recoder<string, Protocole>
  chains: Record<string, Chain>
  nftChains: Record<string, Chain>
  nftsByCollection: Record<Address, Nft>
}

type Account = {
  name: string
  address: Address
}

type ServerError = {
  error: unknown
}
