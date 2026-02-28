import React from 'react';

const teamMembers = [
  {
    name: 'Dr. Jane Doe',
    role: 'Principal Dentist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Specialist in restorative dentistry with over 15 years of experience.'
  },
  {
    name: 'Dr. John Smith',
    role: 'Orthodontist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Expert in clear aligner technology and traditional braces.'
  },
  {
    name: 'Sarah Williams',
    role: 'Dental Hygienist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Dedicated to providing gentle and thorough preventive care.'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Implant Specialist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Focuses on advanced dental implants and oral surgery.'
  }
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Meet Our Expert Team</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our highly qualified specialists are dedicated to providing the best possible care for your smile.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
