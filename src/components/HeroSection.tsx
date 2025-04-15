const HeroSection = () => {
  return (
    <section className="w-full bg-background">
      <div className="grid md:grid-cols-3 gap-0">
        
        {/* Левая колонка с текстом */}
        <div className="bg-white p-5 flex flex-col justify-center">
          <h1 className="text-black text-4xl mb-1 font-bold">Mzia</h1>
          <p className="text-black text-sm font-semibold">(perfume atelier)</p>
        </div>
        
        {/* Центральная колонка с черно-белым изображением */}
        <div className="bg-white">
          <img 
            src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=2832&auto=format&fit=crop"
            alt="Черно-белое фото руки с цветком" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        {/* Правая колонка - красный блок с текстом */}
        <div className="bg-primary p-5 flex flex-col justify-between">
          <div className="polaroid self-end max-w-[120px] rotate-6">
            <img 
              src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=2670&auto=format&fit=crop" 
              alt="Фото здания" 
              className="w-full" 
            />
            <p className="polaroid-caption font-semibold">for you</p>
          </div>
          
          <div className="mt-20">
            <p className="text-white text-sm mb-2 font-semibold">The subtlety</p>
            <p className="text-white text-sm font-semibold">of every memory</p>
          </div>
        </div>
      </div>
      
      {/* Секция бестселлеров */}
      <div className="bg-background p-5">
        <h2 className="text-white text-xl mb-6 font-semibold">Bestsellers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="product-card">
            <img 
              src="https://images.unsplash.com/photo-1603006945771-10b79aab34c3?q=80&w=1635&auto=format&fit=crop" 
              alt="Свеча в коробке" 
              className="w-full h-64 object-cover" 
            />
            <div className="flex justify-between mt-2">
              <span className="font-mono text-sm text-black font-semibold">CANDLE (SUNSET)</span>
              <span className="product-price">32$</span>
            </div>
          </div>
          
          <div className="product-card bg-primary">
            <img 
              src="https://images.unsplash.com/photo-1602517807446-a49b3383c632?q=80&w=2787&auto=format&fit=crop" 
              alt="Свеча зажженная" 
              className="w-full h-64 object-cover" 
            />
            <div className="flex justify-between mt-2">
              <span className="font-mono text-sm text-white font-semibold">CANDLE (SUNSET)</span>
              <span className="product-price text-white">32$</span>
            </div>
          </div>
          
          <div className="product-card">
            <img 
              src="https://images.unsplash.com/photo-1607006344380-b6775a0824ce?q=80&w=2787&auto=format&fit=crop" 
              alt="Мыло" 
              className="w-full h-64 object-cover" 
            />
            <div className="flex justify-between mt-2">
              <span className="font-mono text-sm text-black font-semibold">SOAP (ORANGE)</span>
              <span className="product-price">15$</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Эмоциональная секция с цитатой */}
      <div className="bg-background p-10 text-center">
        <div className="polaroid mx-auto mb-8 max-w-[150px] -rotate-3">
          <img 
            src="https://images.unsplash.com/photo-1614846384571-1e31138c6cab?q=80&w=2574&auto=format&fit=crop" 
            alt="Портрет" 
            className="w-full object-cover" 
          />
          <p className="polaroid-caption font-semibold">perfume as art</p>
        </div>

        <h2 className="text-white text-2xl mb-2 font-semibold">We <span className="cursive-text">know</span> how to</h2>
        <h2 className="text-white text-2xl mb-2 font-semibold">feel and <span className="cursive-text">convey</span></h2>
        <h2 className="text-white text-2xl mb-2 font-semibold">emotion through</h2>
        <h2 className="text-white text-2xl mb-6 font-semibold"><span className="cursive-text">fragrance</span></h2>
      </div>
    </section>
  );
};

export default HeroSection;