import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({ children }) {
  return (
    <div className="site-shell">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  )
}
