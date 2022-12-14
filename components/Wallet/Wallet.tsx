import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { coloredPrice, price } from '../../utils/numbers'
import ExpandMore from './ExpandMore'
import Positions from './Positions'
import useWallet from './useWallet'

interface WalletProps {
  data: Protocole
}

export default function Wallet({ data }: WalletProps) {
  const { expanded, expandClick } = useWallet()

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Icon wallet" src={data.imgSmall} />}
        title={data.name}
        subheader={price(data.value)}
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell>Total Cost Basis</TableCell>
                <TableCell align="right">
                  {coloredPrice(data.totalCostBasis)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Open PnL</TableCell>
                <TableCell align="right">
                  {coloredPrice(data.totalOpenPnl)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Cost Basis</TableCell>
                <TableCell align="right">
                  {coloredPrice(data.totalClosedPnl)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions className="flex justify-end space-x-2">
        <span className="text-sm">See {expanded ? 'less' : 'more'}</span>
        <ExpandMore
          expand={expanded}
          onClick={expandClick}
          aria-expanded={expanded}
          aria-label="show more"
        />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Positions chains={data.chains} />
        </CardContent>
      </Collapse>
    </Card>
  )
}
