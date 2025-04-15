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
    ]
  },
  {
    name: "Премиум",
    price: "19 900",
    description: "Расширенный доступ с поддержкой наставника",
    features: [
      "Все преимущества Стандарта",
      "Персональные консультации",
      "Разбор ваших работ с обратной связью",
      "Пожизненный доступ к обновлениям",
      "Закрытый чат с экспертами",
      "Дополнительные мастер-классы"
    ]
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
      "Индивидуальная стратегия развития"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="font-mono text-2xl mb-12 text-black">Тарифы и стоимость</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border border-black p-6 ${
                index === 1 ? "bg-primary text-white" : "bg-white text-black"
              }`}
            >
              <h3 className="font-mono text-xl mb-2">{plan.name}</h3>
              
              <div className="flex items-baseline mb-3">
                <span className="text-2xl font-mono font-bold">{plan.price}</span>
                <span className="ml-1 font-mono">₽</span>
              </div>
              
              <p className="font-mono text-xs mb-6">{plan.description}</p>
              
              <ul className="space-y-3 font-mono text-sm mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-2 px-4 font-mono text-sm border ${
                  index === 1 
                    ? "bg-white text-black border-white" 
                    : "bg-black text-white border-black"
                }`}
              >
                ВЫБРАТЬ
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;