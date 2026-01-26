
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAFAF9] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
        <div className="sticky top-0 bg-[#FAFAF9] z-10 flex justify-between items-center p-8 md:p-10 border-b border-stone-100">
          <h3 className="text-2xl md:text-3xl font-light serif italic">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-900 text-3xl leading-none"
            aria-label="Cerrar"
          >
            &times;
          </button>
        </div>

        <div className="p-8 md:p-16">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
