import { styled } from '@mui/material'

export function price(
  number: number,
  locale = 'en-US',
  currency = 'USD',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(number)
}

export function coloredPrice(
  number: number,
  locale?: string,
  currency?: string,
): JSX.Element {
  const isZero = number === 0
  const isPositive = number > 0

  const StyledSpan = styled('span')(({ theme }) => ({
    color: isZero ? '' : theme.palette[isPositive ? 'success' : 'error'].main,
  }))
  return <StyledSpan>{price(number, locale, currency)}</StyledSpan>
}
