import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './index.css'

export const metadata: Metadata = { title: 'v' }

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
)

export default Layout
