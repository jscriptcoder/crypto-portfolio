import { useMemo } from 'react'

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="flex justify-center text-sm">
      © {year} :: Cool Crypto Portfolio
    </footer>
  )
}
