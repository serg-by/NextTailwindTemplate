import Navbar from '../block/Navbar'
import Footer from '../block/Footer'

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
          <Navbar />
          <main>{children}</main>
          <Footer />
      </div>
    </>
  )
}