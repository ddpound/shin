import { Inter } from 'next/font/google'
import './globals.css'
import headercompo from './components/headercompo'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'shin',
  description: 'hair',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <headercompo></headercompo>
      <body>{children}</body>
      <footer>

      </footer>
    </html>
  )
}
