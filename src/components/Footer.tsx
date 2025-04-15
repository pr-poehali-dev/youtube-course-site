import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-lg">EsteticTube</span>
              <span className="font-mono text-xs">(perfume atelier)</span>
            </div>
            <p className="font-mono text-xs mb-4">
              Обучаем созданию эстетичного контента для YouTube с 2021 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="font-mono text-xs border border-black px-2 py-1">YT</a>
              <a href="#" className="font-mono text-xs border border-black px-2 py-1">IG</a>
              <a href="#" className="font-mono text-xs border border-black px-2 py-1">TW</a>
              <a href="#" className="font-mono text-xs border border-black px-2 py-1">FB</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-mono text-sm mb-4">КОНТАКТЫ</h3>
            <address className="not-italic font-mono text-xs space-y-2">
              <p>hello@estetictube.com</p>
              <p>+7 (999) 123-45-67</p>
              <p>Москва, ул. Красная, 1</p>
            </address>
          </div>
          
          <div>
            <h3 className="font-mono text-sm mb-4">ПОДПИШИТЕСЬ НА РАССЫЛКУ</h3>
            <div className="border border-black p-4">
              <p className="font-mono text-xs mb-4">
                Получайте бесплатные материалы и новости о скидках
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Ваш email" 
                  className="flex-1 font-mono text-xs border-black rounded-none"
                />
                <button className="bg-black text-white font-mono text-xs px-4">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-black text-center">
          <p className="font-mono text-xs">© 2023 EsteticTube. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;