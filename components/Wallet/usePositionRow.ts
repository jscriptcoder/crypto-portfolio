import { useCallback, useState } from 'react'

export default function usePositionRow() {
  const [open, setOpen] = useState(false)
  const openClick = useCallback(() => setOpen(!open), [open])

  return {
    open,
    openClick,
  }
}
