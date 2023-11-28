import './globals.css'
import HeaderComponent from './components/HeaderCompnent'
import FooterComponent from './components/FooterComponent'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <HeaderComponent></HeaderComponent>
        {children}
      <FooterComponent></FooterComponent>
      </body>
    </html>
  )
}
