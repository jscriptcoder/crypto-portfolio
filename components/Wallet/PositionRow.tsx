import {
  Avatar,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { coloredPrice, price } from '../../utils/numbers'
import usePositionRow from './usePositionRow'
import Assets from './Assets'

interface PositionRowProps {
  data: ChainWithProtocolePositions
}

export default function PositionRow({ data }: PositionRowProps) {
  const { open, openClick } = usePositionRow()

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={openClick}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <div className="flex items-center space-x-4">
            <Avatar className="col-start-1 col-end-2" src={data.imgSmall} />
            <div className="flex flex-col">
              <span className="font-bold">{data.name}</span>
              <span className="text-gray-300">{price(data.value)}</span>
            </div>
          </div>
        </TableCell>
        <TableCell align="right">{coloredPrice(data.totalCostBasis)}</TableCell>
        <TableCell align="right">{coloredPrice(data.totalOpenPnl)}</TableCell>
        <TableCell align="right">{coloredPrice(data.totalClosedPnl)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="py-4 px-12 width-[50%]">
              <Assets data={data.protocolPositions['WALLET']} />
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
