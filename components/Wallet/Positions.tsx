import { Table, TableBody, TableCell, TableHead } from '@mui/material'
import PositionRow from './PositionRow'

interface PositionsProps {
  chains: Record<string, ChainWithProtocolePositions>
}

export default function Positions({ chains }: PositionsProps) {
  const entries = Object.entries(chains)

  return (
    <Table size="small">
      <TableHead>
        <TableCell width={60} />
        <TableCell>Chain</TableCell>
        <TableCell align="right">Total Cost Basis</TableCell>
        <TableCell align="right">Total Open PnL</TableCell>
        <TableCell align="right">Total Closed PnL</TableCell>
      </TableHead>
      <TableBody>
        {entries.map(([chainKey, position]) => (
          <PositionRow key={chainKey} data={position} />
        ))}
      </TableBody>
    </Table>
  )
}
