import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Стандарт",
    price: "9 900",
    description: "Полный курс без дополнительной поддержки",
    features: [
      "Доступ ко всем видеоурокам",
      "Материалы и шаблоны",
      "Доступ к сообществу студентов",
      "6 месяцев доступа к курсу",
      "Сертификат о прохождении"
    ],
    highlighted: false,
    buttonText: "Выбрать тариф"
  },
  {
    name: "Премиум",
    price: "19 900",
    description: "Расширенный доступ с поддержкой наставника",
    features: [
      "Все преимущества Стандарта",
      "Персональные консультации с преподавателем",
      "Разбор ваших работ с обратной связью",
      "Пожизненный доступ к обновлениям курса",
      "Закрытый чат с экспертами",
      "Дополнительные мастер-классы"
    ],
    highlighted: true,
    buttonText: "Выбрать тариф"
  },
  {
    name: "Команда",
    price: "39 900",
    description: "Для команд и студий, работающих над YouTube-проектами",
    features: [
      "До 5 участников с полным доступом",
      "Групповые консультации",
      "Приоритетная поддержка",
      "Корпоративный сертификат",
      "Командные задания и проекты",
      "Индивидуальная стратегия развития канала"
    ],
    highlighted: false,
    buttonText: "Связаться для оформления"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифы и стоимость</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Выберите подходящий тариф и начните создавать эстетичный контент для своего YouTube-канала.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.highlighted
                  ? "border-primary/50 shadow-lg shadow-primary/10"
                  : "border shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rotate-[30deg] translate-x-[30%] translate-y-[-10%] font-medium">
                    Популярный выбор
                  </div>
                </div>
              )}
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-muted-foreground">₽</span>
                </div>
                <CardDescription className="pt-3">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;