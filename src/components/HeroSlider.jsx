import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [prevActive, setPrevActive] = useState(null)
  return (
    <div className="mt-0">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        onSlideChange={(swiper) => {
          setPrevActive(active)
          setActive(swiper.realIndex)
        }}
        onAfterInit={(swiper) => setActive(swiper.realIndex)}
      >
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <img className={`w-full h-[500px] sm:h-[640px] lg:h-[720px] object-cover will-change-transform transform-gpu ${active === 0 ? 'animate-kenburns-in' : 'animate-kenburns-out'}`} src="/slide1.jpg" alt="Comprehensive dental care" />
            <div className="absolute inset-0 bg-black/40" aria-hidden />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-6xl mx-auto px-4">
                <div className={`bg-black/35 backdrop-blur-[1px] rounded-xl p-4 inline-block text-white ${active === 0 ? 'animate-slide-in-left' : prevActive === 0 ? 'animate-slide-out-left' : 'opacity-0'}`}>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">Your Smile, Our Priority</h2>
                  <p className="mt-2 max-w-xl opacity-95">Modern prosthetic and restorative dentistry tailored to you.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a href="/services" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2">Explore Services</a>
                    <a href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 text-white px-4 py-2 hover:bg-white/10">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <img className={`w-full h-[500px] sm:h-[640px] lg:h-[720px] object-cover will-change-transform transform-gpu ${active === 1 ? 'animate-kenburns-in' : 'animate-kenburns-out'}`} src="/slide2.jpg" alt="Gentle dental checkup" />
            <div className="absolute inset-0 bg-black/40" aria-hidden />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-6xl mx-auto px-4">
                <div className={`bg-black/35 backdrop-blur-[1px] rounded-xl p-4 inline-block text-white ${active === 1 ? 'animate-slide-in-left' : prevActive === 1 ? 'animate-slide-out-left' : 'opacity-0'}`}>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">Advanced Care, Gentle Touch</h2>
                  <p className="mt-2 max-w-xl opacity-95">State-of-the-art technology for precise, comfortable treatments.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a href="/services" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2">View Treatments</a>
                    <a href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 text-white px-4 py-2 hover:bg-white/10">Get in Touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <img className={`w-full h-[500px] sm:h-[640px] lg:h-[720px] object-cover will-change-transform transform-gpu ${active === 2 ? 'animate-kenburns-in' : 'animate-kenburns-out'}`} src="/1305.jpg" alt="Modern dental equipment" />
            <div className="absolute inset-0 bg-black/40" aria-hidden />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-6xl mx-auto px-4">
                <div className={`bg-black/35 backdrop-blur-[1px] rounded-xl p-4 inline-block text-white ${active === 2 ? 'animate-slide-in-left' : prevActive === 2 ? 'animate-slide-out-left' : 'opacity-0'}`}>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">Book Today, Smile Tomorrow</h2>
                  <p className="mt-2 max-w-xl opacity-95">Flexible scheduling that fits your life and your smile goals.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a href="/contact" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2">Book Appointment</a>
                    <a href="/services" className="inline-flex items-center gap-2 rounded-md border border-white/40 text-white px-4 py-2 hover:bg-white/10">All Services</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
