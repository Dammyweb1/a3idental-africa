import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const content = document.getElementById('content-shell')
    const drawer = document.getElementById('mobile-drawer')
    if (!content) return
    if (menuOpen && drawer) {
      const width = drawer.offsetWidth || 256
      content.style.transform = `translateX(${width}px)`
      document.body.style.overflow = 'hidden'
    } else {
      content.style.transform = ''
      document.body.style.overflow = ''
    }
  }, [menuOpen])
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])
  const linkClass = ({ isActive }) =>
    [
      'px-3 py-2 rounded-md text-base font-medium transition-colors',
      'hover:bg-black/5',
      isActive ? 'font-semibold underline underline-offset-4 decoration-blue-500' : '',
    ].join(' ')

  const headerClasses = scrolled
    ? 'sticky top-0 z-50 bg-slate-100 text-black border-b border-slate-200'
    : 'sticky top-0 z-50 bg-blue-700 text-white border-b border-blue-800'
  const hamburgerHover = scrolled ? 'hover:bg-black/5' : 'hover:bg-white/10'

  return (
    <header className={headerClasses}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold" style={{ color: 'inherit' }}>
          <span role="img" aria-label="tooth">🦷</span>
          <span>A3idental</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          <NavLink to="/" end className={linkClass} style={{ color: 'inherit' }}>Home</NavLink>
          <NavLink to="/about" className={linkClass} style={{ color: 'inherit' }}>About Us</NavLink>
          <NavLink to="/services" className={linkClass} style={{ color: 'inherit' }}>Our Services</NavLink>
          <NavLink to="/gallery" className={linkClass} style={{ color: 'inherit' }}>Gallery</NavLink>
          <NavLink to="/blog" className={linkClass} style={{ color: 'inherit' }}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass} style={{ color: 'inherit' }}>Contact Us</NavLink>
        </nav>
        <button
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className={`sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md ${hamburgerHover}`}
          style={{ color: 'inherit' }}
          onClick={() => setMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className={`sm:hidden fixed inset-0 z-40 ${menuOpen ? '' : 'pointer-events-none'}`} aria-hidden={!menuOpen}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className={`absolute left-0 top-0 h-full w-[85vw] max-w-72 sm:w-64 bg-white text-slate-800 shadow-xl transition-transform duration-300 overflow-y-auto ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="h-14 px-4 flex items-center justify-between border-b">
            <Link to="/" className="flex items-center gap-2 font-bold text-blue-700" onClick={() => setMenuOpen(false)}>
              <span role="img" aria-label="tooth">🦷</span>
              <span>A3idental</span>
            </Link>
            <button aria-label="Close menu" className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <nav className="p-2 flex flex-col gap-1">
            <NavLink to="/" end className={({isActive}) => linkClass({isActive}) + ' text-slate-800 w-full block'} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => linkClass({isActive}) + ' text-slate-800 w-full block'} onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/services" className={({isActive}) => linkClass({isActive}) + ' text-slate-800 w-full block'} onClick={() => setMenuOpen(false)}>Our Services</NavLink>
            <NavLink to="/gallery" className={({isActive}) => linkClass({isActive}) + ' text-slate-800 w-full block'} onClick={() => setMenuOpen(false)}>Gallery</NavLink>
            <NavLink to="/blog" className={({isActive}) => linkClass({isActive}) + ' text-slate-800 w-full block'} onClick={() => setMenuOpen(false)}>Blog</NavLink>
            <NavLink to="/contact" className={({isActive}) => linkClass({isActive}) + ' text-slate-800 w-full block'} onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
          </nav>
        </aside>
      </div>
    </header>
  )
}
