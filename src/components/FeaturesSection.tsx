const FeaturesSection = () => {
  return (
    <section id="features" className="bg-background">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Левая колонка - красное изображение */}
        <div className="bg-primary">
          <img 
            src="https://images.unsplash.com/photo-1591454371758-644f9d123a81?q=80&w=2670&auto=format&fit=crop" 
            alt="Растение на красном фоне" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Правая колонка - черно-белое изображение с текстом */}
        <div className="bg-white p-5 flex flex-col justify-between">
          <img 
            src="https://images.unsplash.com/photo-1581101767113-7b6e54c1b7c0?q=80&w=2670&auto=format&fit=crop" 
            alt="Руки" 
            className="w-full mb-6 grayscale"
          />
          
          <div>
            <p className="font-mono text-black text-sm mb-4 font-semibold"><span className="text-primary cursive-text">perfume is an art</span></p>
            
            <p className="font-mono text-black text-sm mb-6 font-semibold">
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
          <p className="text-primary font-mono text-sm mb-6 font-semibold">(gift certificate)</p>
          
          <p className="font-mono text-sm mb-2 font-semibold">for:</p>
          <div className="border-b border-black w-full mb-4">
            <p className="text-center text-sm italic font-semibold">Your loved ones or even yourself</p>
          </div>
          
          <div className="flex justify-between items-end">
            <p className="text-primary cursive-text text-xl">perfect</p>
            
            <div className="flex gap-2">
              {/* Фотостопка справа */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1592945403407-3ad78e40de39?q=80&w=2670&auto=format&fit=crop" 
                  alt="Фото" 
                  className="w-20 h-20 object-cover mb-1" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1512303452027-750531d7cb7f?q=80&w=2670&auto=format&fit=crop" 
                  alt="Фото" 
                  className="w-20 h-20 object-cover mb-1" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=2787&auto=format&fit=crop" 
                  alt="Фото" 
                  className="w-20 h-20 object-cover" 
                />
              </div>
              
              <button className="bg-black text-white text-xs py-2 px-4 font-mono font-semibold">
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