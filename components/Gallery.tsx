import React, { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore'; // Descomentar cuando tengas el config
// import { db } from '../lib/firebase';

const Gallery: React.FC = () => {
  const images = [
    { url: "https://firebasestorage.googleapis.com/v0/b/escenciaanimal-ecaa9.firebasestorage.app/o/Animales-Landing%2F5.jpg?alt=media", alt: "Gato arriba 1" },
    { url: "https://firebasestorage.googleapis.com/v0/b/escenciaanimal-ecaa9.firebasestorage.app/o/Animales-Landing%2F2%20(1).jpg?alt=media", alt: "Gato arriba 2" },
    { url: "https://firebasestorage.googleapis.com/v0/b/escenciaanimal-ecaa9.firebasestorage.app/o/Animales-Landing%2F3%20(1).jpg?alt=media", alt: "Gato arriba 3" },
    { url: "https://firebasestorage.googleapis.com/v0/b/escenciaanimal-ecaa9.firebasestorage.app/o/Animales-Landing%2F2.jpg?alt=media", alt: "Perro abajo 1" },
    { url: "https://firebasestorage.googleapis.com/v0/b/escenciaanimal-ecaa9.firebasestorage.app/o/Animales-Landing%2F7.jpg?alt=media", alt: "Perro abajo 2" },
    { url: "https://firebasestorage.googleapis.com/v0/b/escenciaanimal-ecaa9.firebasestorage.app/o/Animales-Landing%2F3.jpg?alt=media", alt: "Perro abajo 3" }
  ];

  return (
    <section id="galeria" style={{ backgroundColor: '#FFFFFF' }} className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
          <h2 style={{ color: '#2F4F4F' }} className="text-4xl md:text-5xl font-light serif italic leading-tight">Portafolio</h2>
          <p style={{ color: '#8FA998' }} className="font-light tracking-widest text-xs uppercase">Instantes de silencio y luz</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden flex items-center justify-center">
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-auto object-contain transition-all duration-1000 group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
