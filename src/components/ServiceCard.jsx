export default function ServiceCard({ imgSrc, title, desc, href = '/contact', cardBg = 'bg-white', textColor = 'text-slate-900', descColor = 'text-slate-600' }) {
  return (
    <a
      href={href}
      className={`group relative block rounded-2xl border border-slate-200 ${cardBg} p-5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-xl aspect-16/10 bg-slate-200 image-anime">
          {imgSrc && (
            <img
              src={imgSrc}
              alt={title}
              className="h-full w-full object-cover transform-gpu transition duration-500 ease-out scale-105 group-hover:scale-100 group-hover:saturate-125"
            />
          )}
        </div>
        <div className="min-w-0">
          <h3 className={`text-lg font-semibold ${textColor}`}>{title}</h3>
          <p className={`mt-1 text-sm ${descColor} line-clamp-3`}>{desc}</p>
        </div>
      </div>
    </a>
  )
}
