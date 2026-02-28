import PageHeader from '../components/PageHeader.jsx'
import TeamSection from '../components/TeamSection.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function About() {
  return (
    <>
      <PageHeader
        title="About A3idental"
        subtitle="Specialist‑led prosthetic and restorative dentistry"
        image="/slide2.jpg"
      />
      {/* About Us section replicated from Home */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">About A3idental</h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  At A3idental, we are a specialist-led practice providing prosthetic and 
                  restorative dentistry with a focus on patient comfort, long-term 
                  outcomes, and modern techniques.
                </p>
                <p>
                  Our team combines advanced expertise with a personalized approach to 
                  ensure every patient receives the highest standard of dental care. 
                  Whether you're looking for routine maintenance or complex restorative 
                  procedures, we are here to help you achieve a healthy, confident smile.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern dental office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl hidden lg:block shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <Testimonials />
    </>
  )
}
