export default function PageHeader({ title, subtitle, image = '/slide1.jpg' }) {
  return (
    <section className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      <div className="relative z-10 h-full">
        <div className="max-w-6xl mx-auto h-full px-4 flex flex-col justify-center text-white">
          <h1 className="text-2xl sm:text-3xl font-extrabold">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-white/90 max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
