const testimonials = [
  {
    name: "Анна Соколова",
    role: "Начинающий ютубер",
    content: "После курса мои видео полностью преобразились. Теперь я получаю комплименты от зрителей о том, насколько приятно смотреть мой контент.",
    image: "/placeholder.svg"
  },
  {
    name: "Максим Петров",
    role: "Тревел-блогер",
    content: "Я всегда считал, что качество моих путешествий говорит само за себя, но после прохождения курса понял, насколько важна визуальная подача.",
    image: "/placeholder.svg"
  },
  {
    name: "Елена Васильева",
    role: "Бьюти-блогер",
    content: "Благодаря курсу мне удалось найти свой уникальный стиль, который теперь является моей визитной карточкой.",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-background py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="font-mono text-2xl mb-12 text-white">Отзывы</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200">
              <div className="p-4">
                <div className="polaroid mb-6 max-w-[120px] mx-auto">
                  <img
                    alt={`Фото ${testimonial.name}`}
                    className="w-full"
                    src={testimonial.image}
                  />
                </div>
                
                <p className="font-mono text-sm text-black mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-mono text-sm font-semibold">{testimonial.name}</h3>
                    <p className="text-xs text-gray-600 font-mono">{testimonial.role}</p>
                  </div>
                  <div className="text-primary cursive-text">perfect</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;