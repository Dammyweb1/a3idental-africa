import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="app-shell" className="app min-h-screen flex flex-col">
      <Navbar />
      <div id="content-shell" className="flex-1 flex flex-col transition-transform duration-300 will-change-transform">
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
