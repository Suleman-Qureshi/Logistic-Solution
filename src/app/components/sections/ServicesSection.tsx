import React from "react";
import Link from "next/link"
function ServicesSection() {
  const CARD_DATA = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1685119166946-d4050647b0e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdlbmVyYWwlMjBvcmRlciUyMHN1cHBseXxlbnwwfHwwfHx8Mg%3D%3D",
      title: "General Order Supplies/Indenting",
      description:
        "At Logistics Solution, we simplify your supply chain needs by providing general order supplies of all sorts …",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571929711205-14aae07834ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxldmVudCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDI%3D",
      title: "Event Management",
      description:
        "At Logistics Solutions, we specialize in turning your events into unforgettable experiences! …",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmxlZXQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHwy",
      title: "Fleet Management",
      description:
        "At Logistics Solutions, we provide flexible, reliable, and hassle-free vehicle rental and fleet management services",
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1595054225874-7d2315262e73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGRlbGl2ZXJ5fGVufDB8fDB8fHwy',
        title: 'One Stop Solution For Door to Door Service',
        description: 'Our mission is to make life easier for residents of Banigala by providing a wide range of services—big or small—right at your fingertips.'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1623902114332-ca8edd175815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3B5fGVufDB8MXwwfHx8Mg%3D%3D',
        title: 'I Can Hear You',
        description: 'we are dedicated to empowering hearing-impaired children and their families by providing expert support, resources, and guidance. '
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1550121383-e037fbf91941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbCUyMHBhcnRuZXJ8ZW58MHx8MHx8fDI%3D',
        title: 'Travel Partner',
        description: 'we make travel dreams come true! Whether you’re a domestic traveler exploring your own country or an international tourist discovering new horizons, '
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWdyaWN1bHR1cmUlMjBmYXJtfGVufDB8fDB8fHwy',
        title: 'Nasimabad Agriculture Research Farms',
        description: 'we are proud to contribute to the agricultural development of Khyber Pakhtunkhwa through our Agricultural Research Farms located in Nasimabad'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW1wYWN0JTIwQ29ubmVjdCUyMENvbnN1bHRhbnQlMjBOZXR3b3JrfGVufDB8fDB8fHwy',
        title: 'Impact Connect Consultant Network',
        description: 'the Impact Connect Consultants Network (ICCN) is a dynamic and versatile network of freelance consultants'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1504202302068-15fc2055f7f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhvdXNpbmclMkMlMjBMYW5kJTIwUHJvcGVydHklMjBTZXJ2aWNlfGVufDB8fDB8fHwy',
        title: 'Housing, Land Property Service (HLP)',
        description: 'HLP Services is a specialized advisory firm dedicated to providing comprehensive technical and legal support in Housing, Land, and Property'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1730047614287-65e28e013ce1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJjaGJhYWJyYWslMjBDb25zdWx0YW50c3xlbnwwfHwwfHx8Mg%3D%3D',
        title: 'ArchBaabrak Consultants',
        description: 'Arch-Baabrak is a premier architectural firm dedicated to providing innovative, sustainable, and client-centric design solutions for construction and development projects.'
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1636761358783-209512dccd98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1lY2hhbmljfGVufDB8fDB8fHwy',
        title: 'PAKMECH',
        description: 'we are excited to launch PAKMECH, a revolutionary mobile app designed to connect vehicle owners with certified auto mechanics and engineers'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1598871265419-c471c1b43a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGp1aWNlJTIwbWFudWZhY3R1cmluZ3xlbnwwfHwwfHx8Mg%3D%3D',
        title: 'FruityFizz (Juice Manufacturing)',
        description: 'At Logistics Solutions, we’re not just about logistics—we’re also passionate about health and freshness! '
    },
  ];
  return (
    <section className="w-screen min-h-screen relative overflow-hidden flex flex-col gap-12 items-center pb-20">
      <div className="flex flex-col items-center gap-6">
        <h1 className="w-screen bg-[#ED7D31] text-white text-7xl font-bold text-center py-2 relative left-0">
          Our Services
        </h1>
        <p className="text-lg text-gray-500 text-center w-2/3">
          Over the years, we have expanded our expertise to offer a wide range
          of services, driven by our commitment to innovation and client
          satisfaction
        </p>
      </div>
      <div className="flex flex-wrap gap-12 justify-center items-center px-20">
        {CARD_DATA.map((card) => (
          <Link href="/" className={`w-72 h-96 bg-no-repeat bg-cover relative before:absolute before:w-full before:h-full before:bg-black before:opacity-30 rounded-md`} style={{ backgroundImage: `url(${card.src})` }} key={card.id}>
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent  hover:via-[#002060b3]  to-[#002060] content-end pb-4 cursor-pointer group">
            <div className="h-2/5 group-hover:h-3/5 duration-200 pb-4">
              <div className=" w-full  text-white px-2 duration-200 group-hover:pb-4">
              <h2 className="text-2xl font-semibold mb-1">{card.title}</h2>
              <p className="text-sm  font-light tracking-tight">{card.description}</p>
              <span className="hidden  group-hover:block duration-200 group-hover:duration-200 group-hover:py-4 text-2xl font-semibold absolute bottom-4">Click To Learn More</span>
            </div>
              </div>
          </div>
          </Link>
        ))}
        
      </div>
    </section>
  );
}

export default ServicesSection;
