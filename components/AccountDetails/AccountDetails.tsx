import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  List,
  ListItem,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'
import { useMemo } from 'react'
import useAccountDetails from './useAccountDetails'
import { coloredPrice, price } from '../../utils/numbers'
import DetailsLoading from './DetailsLoading'

interface AccountDetailsProps {
  loading?: boolean
  account?: AccountDetails
}

export default function AccountDetails({
  account,
  loading,
}: AccountDetailsProps) {
  const { noAccountSelected } = useAccountDetails(loading, account)
  const wallet: Protocole = account?.assetByProtocols['wallet']

  return (
    <div className="AccountDetails">
      {noAccountSelected && (
        <div className="flex items-center space-x-2">
          <WarningRoundedIcon />
          <span>No account has been selected yet</span>
        </div>
      )}

      {loading && <DetailsLoading />}

      {account && (
        <Card>
          <CardHeader
            avatar={<Avatar aria-label="Icon wallet" src={wallet.imgSmall} />}
            title={wallet.name}
            subheader={price(wallet.value)}
          />
          <CardContent>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>Total Cost Basis</TableCell>
                    <TableCell align="right">
                      {coloredPrice(wallet.totalCostBasis)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Open PnL</TableCell>
                    <TableCell align="right">
                      {coloredPrice(wallet.totalOpenPnl)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Cost Basis</TableCell>
                    <TableCell align="right">
                      {coloredPrice(wallet.totalClosedPnl)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions> */}
          {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse> */}
        </Card>
      )}
    </div>
  )
}
