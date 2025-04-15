const FeaturesSection = () => {
  return (
    <section id="features" className="bg-background">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Левая колонка - красное изображение */}
        <div className="bg-primary">
          <img 
            src="/placeholder.svg" 
            alt="Растение на красном фоне" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Правая колонка - черно-белое изображение с текстом */}
        <div className="bg-white p-5 flex flex-col justify-between">
          <img 
            src="/placeholder.svg" 
            alt="Руки" 
            className="w-full mb-6 grayscale"
          />
          
          <div>
            <p className="font-mono text-black text-sm mb-4"><span className="text-primary cursive-text">perfume is an art</span></p>
            
            <p className="font-mono text-black text-sm mb-6">
              As perfume artists,<br/>
              we are an expression<br/>
              of two cultures:<br/>
              British and Caucasian
            </p>
          </div>
        </div>
      </div>
      
      {/* Сертификат подарочный */}
      <div className="bg-white p-8">
        <div className="border border-black p-6 flex flex-col">
          <p className="text-primary font-mono text-sm mb-6">(gift certificate)</p>
          
          <p className="font-mono text-sm mb-2">for:</p>
          <div className="border-b border-black w-full mb-4">
            <p className="text-center text-sm italic">Your loved ones or even yourself</p>
          </div>
          
          <div className="flex justify-between items-end">
            <p className="text-primary cursive-text text-xl">perfect</p>
            
            <div className="flex gap-2">
              {/* Фотостопка справа */}
              <div className="flex flex-col">
                <img src="/placeholder.svg" alt="Фото" className="w-20 h-20 object-cover mb-1" />
                <img src="/placeholder.svg" alt="Фото" className="w-20 h-20 object-cover mb-1" />
                <img src="/placeholder.svg" alt="Фото" className="w-20 h-20 object-cover" />
              </div>
              
              <button className="bg-black text-white text-xs py-2 px-4 font-mono">
                GET A GIFT CERTIFICATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;