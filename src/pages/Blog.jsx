import PageHeader from '../components/PageHeader.jsx'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'

export default function Blog() {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Insights and tips about dental care"
        image="/slide2.jpg"
      />
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
      </section>
    </>
  )
}
