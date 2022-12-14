import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'

export default function DetailsLoading() {
  return (
    <Card>
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={<Skeleton variant="text" width={100} />}
        subheader={<Skeleton variant="text" width={100} />}
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell>
                  <Skeleton variant="text" width={300} />
                </TableCell>
                <TableCell>
                  <div className="flex justify-end">
                    <Skeleton variant="text" width={100} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Skeleton variant="text" width={300} />
                </TableCell>
                <TableCell>
                  <div className="flex justify-end">
                    <Skeleton variant="text" width={100} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Skeleton variant="text" width={300} />
                </TableCell>
                <TableCell>
                  <div className="flex justify-end">
                    <Skeleton variant="text" width={100} />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}
