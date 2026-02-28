import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1447E6] border-t border-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & About */}
          <div className="text-white/90">
            <div className="flex items-center gap-2 text-white font-extrabold text-xl">
              <span role="img" aria-label="tooth">🦷</span>
              <span>A3idental</span>
            </div>
            <p className="mt-4 text-white/90 text-sm leading-relaxed">
              A3idental provides comprehensive, high‑quality dental care with a focus on comfort,
              safety, and long‑term oral health for all ages.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10" aria-label="social">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-white/90 text-sm">
              <li><Link className="hover:underline" to="/contact">Contact Us</Link></li>
              <li><Link className="hover:underline" to="/services">Our Services</Link></li>
              <li><Link className="hover:underline" to="/about">About Us</Link></li>
              <li><Link className="hover:underline" to="/blog">Blog</Link></li>
              <li><Link className="hover:underline" to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* Our Dentistries */}
          <div>
            <h3 className="text-white font-semibold text-lg">Our Dentistries</h3>
            <div className="mt-4 rounded-xl border border-white/20 bg-white/5 max-h-44 overflow-auto p-3">
              <ul className="space-y-2 text-white/90 text-sm">
                <li>Conservative Dentistry</li>
                <li>Pediatric Dentistry</li>
                <li>Implantology</li>
                <li>Preventive Dentistry</li>
                <li>Oral & Maxillofacial Surgery</li>
                <li>Endodontics (Root Canal)</li>
                <li>Periodontics (Gums)</li>
                <li>Orthodontics (Braces)</li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-white/90 text-sm">
              <li className="flex items-start gap-3">
                <FiMail className="mt-0.5 text-white" />
                <span>support@a3idental.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 text-white" />
                <span>
                  LAGOS: 29B Admiralty Way, Beside Zenith Bank, Lekki Phase 1.
                  <br /> <span className="inline-flex items-center gap-2"><FiPhone className="text-white" /> 0815 555 9878</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 text-white" />
                <span>
                  ABUJA: Suite 047, De Avalon Plaza, Peace Mass Transport Park, Utako.
                  <br /> <span className="inline-flex items-center gap-2"><FiPhone className="text-white" /> 0701 4144 878</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-5 text-sm text-white/80 flex items-center justify-between">
          <div>© {new Date().getFullYear()} A3idental. Alrights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}
