import React, { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore'; // Descomentar cuando tengas el config
// import { db } from '../lib/firebase';

const Gallery: React.FC = () => {
  // Estos son los nombres de los archivos que subiste a Storage
  const storageImages = [
    { name: "IMG_0982 (1).webp", alt: "Mirada tierna", aspect: "aspect-square" },
    { name: "IMG_0997 (1).webp", alt: "Enfoque natural", aspect: "aspect-[3/4]" },
    { name: "IMG_1041.webp", alt: "Esencia pura", aspect: "aspect-square" },
    { name: "IMG_1225.webp", alt: "Compañero fiel", aspect: "aspect-[4/5]" },
    { name: "IMG_1451.webp", alt: "Luz de tarde", aspect: "aspect-square" },
    { name: "IMG_1623.webp", alt: "Instante de paz", aspect: "aspect-[3/4]" }
  ];

  // Por ahora usamos URLs de placeholder o directas si las tuviéramos.
  // Una vez que pongas el Config, activaremos la carga real desde Firebase.
  const [images, setImages] = useState(storageImages.map(img => ({
    ...img,
    url: `https://firebasestorage.googleapis.com/v0/b/escenciaanimal-ecaa9.firebasestorage.app/o/Animales-Landing%2F${encodeURIComponent(img.name)}?alt=media`
  })));

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
              onError={(e) => {
                // Fallback por si la URL de Firebase falla sin el config adecuado
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800';
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
