import { Inter } from 'next/font/google'
import './globals.css'
import Headercompo from './maincomponents/Headercompo'

export const metadata = {
  title: 'shin',
  description: 'hair',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Headercompo></Headercompo>
      {children}
      footer
    </>
  )
}
