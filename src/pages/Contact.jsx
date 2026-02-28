import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // This matches the state you have in your screenshot
        });

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: data.message })
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect to the server.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you"
        image="/slide1.jpg"
      />
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-8">Get In Touch</h2>
            
            {status.message && (
              <div className={`mb-6 p-4 rounded-xl ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder:text-slate-400" 
                  placeholder="First Name" 
                  value={formData.firstName || ''}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input 
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder:text-slate-400" 
                  placeholder="Last Name" 
                  value={formData.lastName || ''}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <input 
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder:text-slate-400" 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <textarea 
                required
                className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder:text-slate-400 resize-none" 
                rows="5" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <div>
                <button 
                  disabled={loading}
                  className={`rounded-lg px-8 py-3 bg-[#1447E6] text-white font-bold transition-all ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`} 
                  type="submit"
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/dental_implants.jpg" 
              alt="Dental Professional" 
              className="w-full h-125 object-cover"
            />
            <div className="absolute inset-x-4 bottom-4">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white">
                <div className="flex justify-between items-center mb-4 border-b border-white/20 pb-4">
                  <span className="font-semibold text-slate-900">Monday - Saturday</span>
                  <span className="font-semibold text-slate-900">9AM - 9PM</span>
                </div>
                <button className="w-full py-4 bg-[#1447E6] text-white font-bold rounded-xl hover:bg-blue-700 transition-colors uppercase tracking-wider">
                  Working Hours
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
