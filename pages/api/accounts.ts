import type { NextApiRequest, NextApiResponse } from 'next'

export default function accounts(
  req: NextApiRequest,
  res: NextApiResponse<Account[]>,
) {
  // Reaches out to internal DB to get user's list of accounts
  res.status(200).json([
    {
      name: 'Account 1',
      address: '0xef7f2e81ea14538858d962df34eb1bfda83da395',
    },
  ])
}
