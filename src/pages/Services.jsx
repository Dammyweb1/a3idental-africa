import PageHeader from '../components/PageHeader.jsx'
import ServicesSection from '../components/ServicesSection.jsx'

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive care from routine to advanced treatments"
        image="/slide1.jpg"
      />
      <ServicesSection 
        title="Service categories" 
        bgColor="bg-white" 
        textColor="text-slate-900"
        cardBg="bg-blue-700"
        cardTextColor="text-white"
        cardDescColor="text-white/90"
      />
    </>
  )
}
