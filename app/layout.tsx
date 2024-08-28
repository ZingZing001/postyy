import './globals.css'
import Nav from './auth/Nav'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {

      }
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}