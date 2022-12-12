import type { NextApiRequest, NextApiResponse } from 'next'

const SERVER_API = 'http://localhost:4000'

export default async function accountDetails(
  req: NextApiRequest,
  res: NextApiResponse<AccountDetails | ServerError>,
) {
  try {
    const { address } = req.query

    // Queries the server that interfaces with Defillama API
    const response = await fetch(`${SERVER_API}/address/${address}`)
    const data: AccountDetails = await response.json()

    res.status(response.status).json(data)
  } catch (error) {
    res.status(500)
    res.json({ error })
  }
}
