import { useCallback, useState } from 'react'

export default function useWallet() {
  const [expanded, setExpanded] = useState(false)

  const expandClick = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded])

  return {
    expanded,
    expandClick,
  }
}
