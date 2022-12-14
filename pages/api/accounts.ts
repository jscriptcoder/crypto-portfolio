import type { NextApiRequest, NextApiResponse } from 'next'
import { delay } from '../../utils/random'

// Reaches out to internal DB to get user's list of accounts
export default function accounts(
  req: NextApiRequest,
  res: NextApiResponse<Account[]>,
) {
  // Introduces a random delay in the response
  delay(
    () => {
      res.status(200).json([
        {
          name: 'My main account',
          address: '0xef7f2e81ea14538858d962df34eb1bfda83da395',
        },
      ])
    },
    1000,
    3000,
  )
}
