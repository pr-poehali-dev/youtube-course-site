import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="flex justify-between items-center p-4 border-b border-black">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xl font-bold">Mzia</span>
          <span className="font-mono text-xs font-semibold">(perfume atelier)</span>
        </div>

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center">
          <a href="#features" className="nav-item font-semibold">О НАС</a>
          <a href="#curriculum" className="nav-item font-semibold">ПРОГРАММА</a>
          <a href="#testimonials" className="nav-item font-semibold">ОТЗЫВЫ</a>
          <a href="#pricing" className="nav-item font-semibold">ТАРИФЫ</a>
          <a href="#faq" className="nav-item font-semibold">FAQ</a>
          <a href="#contact" className="nav-item font-semibold">КОНТАКТЫ</a>
        </div>

        {/* Мобильное меню кнопка */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="border border-black p-1 px-3">
              <span className="font-mono text-xs font-bold">MENU</span>
            </div>
          )}
        </button>
      </div>

      {/* Выпадающее мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-black animate-accordion-down">
          <div className="flex flex-col">
            <a href="#features" className="nav-item border-b border-black p-4 font-semibold" onClick={() => setIsMenuOpen(false)}>
              О НАС
            </a>
            <a href="#curriculum" className="nav-item border-b border-black p-4 font-semibold" onClick={() => setIsMenuOpen(false)}>
              ПРОГРАММА
            </a>
            <a href="#testimonials" className="nav-item border-b border-black p-4 font-semibold" onClick={() => setIsMenuOpen(false)}>
              ОТЗЫВЫ
            </a>
            <a href="#pricing" className="nav-item border-b border-black p-4 font-semibold" onClick={() => setIsMenuOpen(false)}>
              ТАРИФЫ
            </a>
            <a href="#faq" className="nav-item border-b border-black p-4 font-semibold" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <a href="#contact" className="nav-item p-4 font-semibold" onClick={() => setIsMenuOpen(false)}>
              КОНТАКТЫ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;