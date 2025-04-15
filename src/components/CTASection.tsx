const CTASection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="border border-black p-8 flex flex-col items-center text-center">
          <h2 className="font-mono text-2xl mb-6 text-black font-bold">
            Готовы создавать уникальные ароматы?
          </h2>
          
          <p className="font-mono text-sm mb-8 max-w-xl font-semibold">
            Присоединяйтесь к сообществу творческих людей, которые уже открыли для себя искусство парфюмерии и создали свои неповторимые ароматические композиции.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white py-2 px-8 font-mono text-sm font-bold">
              НАЧАТЬ ОБУЧЕНИЕ
            </button>
            <button className="bg-black text-white py-2 px-8 font-mono text-sm font-bold">
              УЗНАТЬ БОЛЬШЕ
            </button>
          </div>
          
          <div className="mt-12 polaroid rotate-3 max-w-[150px]">
            <img 
              src="https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=2787&auto=format&fit=crop" 
              alt="Вдохновляющее фото парфюмерии" 
              className="w-full h-32 object-cover"
            />
            <p className="polaroid-caption font-bold">for you</p>
          </div>
          
          <p className="mt-8 font-mono text-xs text-primary cursive-text text-lg">
            perfume as art
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;