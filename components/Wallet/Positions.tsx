import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { coloredPrice, price } from '../../utils/numbers'

interface PositionsProps {
  chains: Record<string, ChainWithProtocolePositions>
}

export default function Positions({ chains }: PositionsProps) {
  const entries = Object.entries(chains)

  return (
    <Table size="small">
      <TableHead>
        <TableCell>Chain</TableCell>
        <TableCell align="right">Total Cost Basis</TableCell>
        <TableCell align="right">Total Open PnL</TableCell>
        <TableCell align="right">Total Closed PnL</TableCell>
      </TableHead>
      <TableBody>
        {entries.map(([chain, positions]) => {
          return (
            <TableRow>
              <TableCell>
                <div className="flex items-center space-x-4">
                  <Avatar
                    className="col-start-1 col-end-2"
                    src={positions.imgSmall}
                  />
                  <div className="flex flex-col">
                    <span className="font-bold">{positions.name}</span>
                    <span className="text-gray-300">
                      {price(positions.value)}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell align="right">
                {coloredPrice(positions.totalCostBasis)}
              </TableCell>
              <TableCell align="right">
                {coloredPrice(positions.totalOpenPnl)}
              </TableCell>
              <TableCell align="right">
                {coloredPrice(positions.totalClosedPnl)}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
