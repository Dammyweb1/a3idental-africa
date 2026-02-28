import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import PageHeader from '../components/PageHeader.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-slate-900">Post Not Found</h1>
        <p className="mt-4 text-slate-600">Sorry, the blog post you are looking for does not exist.</p>
        <Link to="/blog" className="mt-8 px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={post.title}
        subtitle={`${post.date} | By ${post.author}`}
        image={post.image}
      />
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div 
          className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Share this post</h3>
          <div className="flex gap-4">
            {/* Simple share placeholders */}
            <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors" aria-label="Share on Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </button>
            <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors" aria-label="Share on Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12.07h3.047V9.47c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.4h-2.796v8.457C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
          </div>
        </div>
      </article>
    </>
  )
}
