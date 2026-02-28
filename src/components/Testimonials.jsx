import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Patient',
    text:
      'Absolutely amazing care! The team was so kind and explained every step. My smile has never looked better.',
  },
  {
    name: 'James K.',
    role: 'Patient',
    text:
      'State-of-the-art clinic with a warm atmosphere. The whitening treatment was fast and painless.',
  },
  {
    name: 'Alicia R.',
    role: 'Patient',
    text:
      'They crafted a plan that fit my schedule. From consultation to follow-up, everything felt seamless.',
  },
  {
    name: 'Mark T.',
    role: 'Patient',
    text:
      'Professional, gentle, and very thorough. Highly recommend for implant work and general care.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-14 bg-[#e0e7ef]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">What our patients say</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Real experiences from people who trusted us with their smiles.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-600 text-white text-lg font-semibold">
                      {t.name.split(' ').map((n) => n[0]).slice(0,2).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{t.name}</div>
                      <div className="text-sm text-slate-500">{t.role}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    “{t.text}”
                  </p>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1/2 px-6">
                    <div className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 transition group-hover:opacity-100" />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
