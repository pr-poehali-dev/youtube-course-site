import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex justify-between items-center py-4">
        {/* Логотип */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-primary">EsteticTube</span>
        </div>

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            О курсе
          </a>
          <a href="#curriculum" className="text-foreground/80 hover:text-primary transition-colors">
            Программа
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
            Отзывы
          </a>
          <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Тарифы
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
            FAQ
          </a>
        </div>

        {/* Кнопка действия */}
        <div className="hidden md:block">
          <Button className="font-medium">Начать обучение</Button>
        </div>

        {/* Мобильное меню */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Выпадающее мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 bg-background border-b animate-accordion-down">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О курсе
            </a>
            <a 
              href="#curriculum" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Программа
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#pricing" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Тарифы
            </a>
            <a 
              href="#faq" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="w-full">Начать обучение</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;