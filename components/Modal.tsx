
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

      <div style={{ backgroundColor: '#FFFFFF', borderColor: '#F5F5F4', color: '#44403C' }} className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border">
        <div style={{ backgroundColor: '#FFFFFF' }} className="sticky top-0 z-10 flex justify-between items-center p-8 md:p-10 border-b border-stone-100">
          <h3 className="text-2xl md:text-3xl font-light serif italic">{title}</h3>
          <button
            style={{ color: '#A8A29E' }}
            onClick={onClose}
            className="p-2 hover:bg-stone-50 transition-colors text-3xl leading-none"
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
