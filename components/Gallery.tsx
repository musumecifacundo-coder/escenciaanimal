
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800",
      alt: "Cachorros jugando",
      aspect: "aspect-square"
    },
    {
      url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
      alt: "Gato en el sol",
      aspect: "aspect-[3/4]"
    },
    {
      url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
      alt: "Primer plano de perro",
      aspect: "aspect-square"
    },
    {
      url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800",
      alt: "Nariz de perro",
      aspect: "aspect-[4/5]"
    },
    {
      url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
      alt: "Pata de animal",
      aspect: "aspect-square"
    },
    {
      url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=800",
      alt: "Gato mirando",
      aspect: "aspect-[3/4]"
    }
  ];

  return (
    <section id="galeria" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <h2 className="text-4xl md:text-5xl font-light">Portafolio</h2>
        <p className="text-stone-400 font-light italic serif text-xl">Instantes de silencio y luz.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {images.map((img, idx) => (
          <div key={idx} className={`overflow-hidden group cursor-pointer ${img.aspect}`}>
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] brightness-[95%]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
