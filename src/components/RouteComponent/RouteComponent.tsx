import Link from 'next/link'
import type { ReactNode } from 'react'

interface RouteComponentProps {
  path: string
  children: ReactNode
}
export default function RouteComponent({
  children,
  path,
}: RouteComponentProps) {
  return (
    <Link href={path} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </Link>
  )
}
