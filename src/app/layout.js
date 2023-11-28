import './globals.css'
import HeaderComponent from './components/HeaderCompnent'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <HeaderComponent></HeaderComponent>
        {children}
      </body>
    </html>
  )
}
