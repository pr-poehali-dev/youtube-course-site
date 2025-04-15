const testimonials = [
  {
    name: "Анна Соколова",
    role: "Владелица бутика",
    content: "После прохождения курса я создала свою линейку ароматических свечей, которые стали бестселлерами в моем магазине. Благодарна за знания и вдохновение!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Максим Петров",
    role: "Дизайнер интерьеров",
    content: "Научился создавать уникальные ароматы для своих проектов. Теперь каждый интерьер получает свой неповторимый парфюмерный паспорт.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Елена Васильева",
    role: "Начинающий парфюмер",
    content: "Благодаря курсу я обрела уверенность в своих навыках и теперь создаю ароматы, которые действительно отражают эмоции и воспоминания.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-background py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="font-mono text-2xl mb-12 text-white font-bold">Отзывы</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200">
              <div className="p-4">
                <div className="polaroid mb-6 max-w-[120px] mx-auto">
                  <img
                    alt={`Фото ${testimonial.name}`}
                    className="w-full h-32 object-cover"
                    src={testimonial.image}
                  />
                </div>
                
                <p className="font-mono text-sm text-black mb-4 italic font-semibold">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-mono text-sm font-bold">{testimonial.name}</h3>
                    <p className="text-xs text-gray-600 font-mono font-semibold">{testimonial.role}</p>
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