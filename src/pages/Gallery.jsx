import { useCallback, useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

const images = [
  // 8 fresh dental-related images (Pexels)
  'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6502307/pexels-photo-6502307.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6502283/pexels-photo-6502283.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.unsplash.com/photo-1588776814325-b8b5b3f76ca8?q=80&w=1200&auto=format&fit=crop',
  'https://images.pexels.com/photos/4269356/pexels-photo-4269356.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/4269362/pexels-photo-4269362.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1200',
]

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  const closeModal = useCallback(() => setOpenIndex(null), [])
  const showPrev = useCallback((e) => {
    e?.stopPropagation?.()
    setOpenIndex((idx) => (idx === null ? null : (idx + images.length - 1) % images.length))
  }, [])
  const showNext = useCallback((e) => {
    e?.stopPropagation?.()
    setOpenIndex((idx) => (idx === null ? null : (idx + 1) % images.length))
  }, [])

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, closeModal, showPrev, showNext])

  return (
    <>
      <PageHeader title="Gallery" subtitle="A look at our dental care and happy smiles" image="/slide2.jpg" />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Our Work</h2>
            <p className="mt-2 text-slate-600">A selection of treatments, facilities, and beautiful smile results.</p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
            {images.map((src, idx) => (
              <figure
                key={idx}
                className="group mb-4 break-inside-avoid rounded-xl overflow-hidden bg-slate-100 shadow-sm cursor-zoom-in"
                onClick={() => setOpenIndex(idx)}
              >
                <img
                  src={src}
                  alt={`Dental gallery ${idx + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-[1px] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            aria-label="Close"
            className="absolute top-4 right-4 rounded-md bg-white/10 text-white p-2 hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); closeModal() }}
          >
            ✕
          </button>
          <button
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-md bg-white/10 text-white p-2 hover:bg-white/20"
            onClick={showPrev}
          >
            ‹
          </button>
          <figure className="max-w-4xl w-full max-h-[80vh] flex items-center justify-center">
            <img
              src={images[openIndex]}
              alt={`Dental gallery ${openIndex + 1}`}
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </figure>
          <button
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md bg-white/10 text-white p-2 hover:bg-white/20"
            onClick={showNext}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
