import ServiceCard from './ServiceCard.jsx'

const services = [
  {
    imgSrc: '/orthodontics.jpg',
    title: 'Orthodontics',
    desc: 'Straighter smiles with clear aligners and traditional braces tailored to you.',
    href: '/services',
  },
  {
    imgSrc: '/teeth_whitening.jpg',
    title: 'Teeth Whitening',
    desc: 'Professional whitening for a brighter, confident smile with safe procedures.',
    href: '/services',
  },
  {
    imgSrc: '/dental_implants.jpg',
    title: 'Dental Implants',
    desc: 'Long‑lasting replacements for missing teeth with natural look and function.',
    href: '/services',
  },
  {
    imgSrc: '/crown_bridges.jpg',
    title: 'Crowns & Bridges',
    desc: 'Durable restorations to protect teeth and restore natural function.',
    href: '/services',
  },
  {
    imgSrc: '/root_canal.jpg',
    title: 'Root Canal Therapy',
    desc: 'Relieve pain and save natural teeth with gentle endodontic care.',
    href: '/services',
  },
  {
    imgSrc: '/preventive_care.jpg',
    title: 'Preventive Care',
    desc: 'Routine exams, cleanings, and personalized hygiene guidance.',
    href: '/services',
  },
  {
    imgSrc: '/pediatric_dentistry.jpg',
    title: 'Pediatric Dentistry',
    desc: 'Friendly, comfortable visits designed for children’s oral health.',
    href: '/services',
  },
  {
    imgSrc: '/Emergency_Dentistry.jpg',
    title: 'Emergency Dentistry',
    desc: 'Same‑day relief for urgent dental issues like pain or fractures.',
    href: '/services',
  },
]

export default function ServicesSection({ 
  title = 'Our Services', 
  subtitle = 'Comprehensive care from routine to advanced treatments.', 
  bgColor = 'bg-blue-700',
  cardBg = 'bg-white',
  textColor = 'text-white',
  cardTextColor = 'text-slate-900',
  cardDescColor = 'text-slate-600'
}) {
  return (
    <section className={`py-12 ${bgColor} ${textColor}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-current opacity-90 max-w-2xl">{subtitle}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard 
              key={s.title} 
              imgSrc={s.imgSrc} 
              title={s.title} 
              desc={s.desc} 
              href={s.href}
              cardBg={cardBg}
              textColor={cardTextColor}
              descColor={cardDescColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
