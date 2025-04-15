const CTASection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="border border-black p-8 flex flex-col items-center text-center">
          <h2 className="font-mono text-2xl mb-6 text-black">
            Готовы создавать привлекательный контент для YouTube?
          </h2>
          
          <p className="font-mono text-sm mb-8 max-w-xl">
            Присоединяйтесь к сотням креаторов, которые уже улучшили качество своих видео и увеличили аудиторию благодаря нашему курсу.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white py-2 px-8 font-mono text-sm">
              НАЧАТЬ ОБУЧЕНИЕ
            </button>
            <button className="bg-black text-white py-2 px-8 font-mono text-sm">
              УЗНАТЬ БОЛЬШЕ
            </button>
          </div>
          
          <div className="mt-12 polaroid rotate-3 max-w-[150px]">
            <img src="/placeholder.svg" alt="Вдохновляющее фото" className="w-full"/>
            <p className="polaroid-caption">for you</p>
          </div>
          
          <p className="mt-8 font-mono text-xs text-primary cursive-text">
            perfume as art
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;