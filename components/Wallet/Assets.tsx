import {
  Avatar,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import { coloredPrice, price } from '../../utils/numbers'
import { useCallback } from 'react'

interface AssetsProps {
  data: ProtocolePosition
}

export default function Assets({ data }: AssetsProps) {
  return (
    <div className="Assets">
      <Paper elevation={12}>
        <Table size="small">
          <TableHead>
            <TableCell>Asset & Price</TableCell>
            <TableCell align="right">Total Cost Basis</TableCell>
            <TableCell align="right">Open PnL</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell>Explorer</TableCell>
            <TableCell />
          </TableHead>
          <TableBody>
            {data.assets.map((asset) => (
              <TableRow>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Avatar src={asset.imgSmall} alt={asset.name} />
                    <div className="flex flex-col text-xs">
                      <span className="uppercase font-bold">
                        {asset.symbol}
                      </span>
                      <span className="text-gray-300">
                        {price(asset.price)}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="right">
                  {coloredPrice(asset.totalCostBasis)}
                </TableCell>
                <TableCell align="right">
                  {coloredPrice(asset.openPnl)}
                </TableCell>
                <TableCell align="right">{asset.balance}</TableCell>
                <TableCell align="right">{price(asset.value)}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="secondary"
                    href={asset.explorerUrl}
                    target="_blank"
                  >
                    <TravelExploreIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}
