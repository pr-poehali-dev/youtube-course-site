const HeroSection = () => {
  return (
    <section className="w-full bg-background">
      <div className="grid md:grid-cols-3 gap-0">
        
        {/* Левая колонка с текстом */}
        <div className="bg-white p-5 flex flex-col justify-center">
          <h1 className="text-black text-4xl mb-1">EsteticTube</h1>
          <p className="text-black text-sm">(perfume atelier)</p>
        </div>
        
        {/* Центральная колонка с черно-белым изображением */}
        <div className="bg-white">
          <img 
            src="/placeholder.svg" 
            alt="Черно-белое фото руки с цветком" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        {/* Правая колонка - красный блок с текстом */}
        <div className="bg-primary p-5 flex flex-col justify-between">
          <div className="polaroid self-end max-w-[120px] rotate-6">
            <img src="/placeholder.svg" alt="Фото здания" className="w-full" />
            <p className="polaroid-caption">for you</p>
          </div>
          
          <div className="mt-20">
            <p className="text-white text-sm mb-2">The subtlety</p>
            <p className="text-white text-sm">of every memory</p>
          </div>
        </div>
      </div>
      
      {/* Секция бестселлеров */}
      <div className="bg-background p-5">
        <h2 className="text-white text-xl mb-6">Bestsellers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="product-card">
            <img src="/placeholder.svg" alt="Свеча в коробке" className="w-full" />
            <div className="flex justify-between mt-2">
              <span className="font-mono text-sm text-black">CANDLE (SUNSET)</span>
              <span className="product-price">32$</span>
            </div>
          </div>
          
          <div className="product-card bg-primary">
            <img src="/placeholder.svg" alt="Свеча зажженная" className="w-full" />
            <div className="flex justify-between mt-2">
              <span className="font-mono text-sm text-white">CANDLE (SUNSET)</span>
              <span className="product-price text-white">32$</span>
            </div>
          </div>
          
          <div className="product-card">
            <img src="/placeholder.svg" alt="Мыло" className="w-full" />
            <div className="flex justify-between mt-2">
              <span className="font-mono text-sm text-black">SOAP (ORANGE)</span>
              <span className="product-price">15$</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Эмоциональная секция с цитатой */}
      <div className="bg-background p-10 text-center">
        <div className="polaroid mx-auto mb-8 max-w-[150px] -rotate-3">
          <img src="/placeholder.svg" alt="Портрет" className="w-full" />
          <p className="polaroid-caption">perfume as art</p>
        </div>

        <h2 className="text-white text-2xl mb-2">We <span className="cursive-text">know</span> how to</h2>
        <h2 className="text-white text-2xl mb-2">feel and <span className="cursive-text">convey</span></h2>
        <h2 className="text-white text-2xl mb-2">emotion through</h2>
        <h2 className="text-white text-2xl mb-6"><span className="cursive-text">fragrance</span></h2>
      </div>
    </section>
  );
};

export default HeroSection;