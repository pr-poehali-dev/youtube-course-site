import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна Соколова",
    role: "Начинающий ютубер",
    content: "После курса мои видео полностью преобразились. Теперь я получаю комплименты от зрителей о том, насколько приятно смотреть мой контент. Рост канала ускорился в 3 раза!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Максим Петров",
    role: "Тревел-блогер",
    content: "Я всегда считал, что качество моих путешествий говорит само за себя, но после прохождения курса понял, насколько важна визуальная подача. Количество подписчиков выросло на 40% за месяц.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Елена Васильева",
    role: "Бьюти-блогер",
    content: "Благодаря курсу мне удалось найти свой уникальный стиль, который теперь является моей визитной карточкой. Очень довольна результатами и полученными знаниями.",
    rating: 4,
    image: "/placeholder.svg"
  },
  {
    name: "Дмитрий Иванов",
    role: "Lifestyle-блогер",
    content: "Никогда не думал, что цветокоррекция и монтаж настолько важны. Теперь мои видео выглядят профессионально, а аудитория стала более вовлеченной. Спасибо за прекрасный курс!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Ольга Смирнова",
    role: "Кулинарный блогер",
    content: "Мои рецепты всегда были вкусными, но теперь они еще и выглядят аппетитно на видео. После курса статистика просмотров выросла в 2 раза. Очень рекомендую!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Кирилл Козлов",
    role: "Техноблогер",
    content: "Несмотря на техническую специфику моего канала, улучшение визуальной составляющей привело к значительному росту подписчиков. Курс дал мне именно те инструменты, которые были нужны.",
    rating: 4,
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших студентов</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Узнайте, как курс помог другим создателям улучшить качество своего контента и привлечь новую аудиторию.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    alt={`Фото ${testimonial.name}`}
                    className="rounded-full h-12 w-12 object-cover border-2 border-primary/20"
                    src={testimonial.image}
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;