import HeroSlider from '../components/HeroSlider.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'

export default function Home() {
  return (
    <>
      {/* Hero banner */}
      <section className="text-white">
        <div className="px-0 py-0">
          <HeroSlider />
        </div>
      </section>

      {/* About Us section */}
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
                <div className="pt-4">
                  <a href="/about" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                    Learn more about us
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
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
      <ServicesSection />
      <Testimonials />

      {/* Blog Section */}
      <section className="pt-20 pb-10 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Latest from our Blog</h2>
              <p className="mt-4 text-slate-600 max-w-2xl">
                Stay informed with the latest dental health tips, news, and insights from our specialist-led team.
              </p>
            </div>
            <Link to="/blog" className="text-blue-700 font-semibold hover:underline flex items-center gap-2">
              View all posts
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
                <div className="aspect-video overflow-hidden image-anime">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-blue-700 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-blue-700 font-medium hover:gap-2 transition-all"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
