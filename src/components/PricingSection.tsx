const plans = [
  {
    name: "Базовый",
    price: "9 900",
    description: "Полный курс без практических занятий",
    features: [
      "Доступ к видео-урокам",
      "Базовые рецепты и формулы",
      "Доступ к сообществу",
      "6 месяцев доступа к материалам",
      "Сертификат о прохождении"
    ]
  },
  {
    name: "Продвинутый",
    price: "19 900",
    description: "Расширенный доступ с мастер-классами",
    features: [
      "Все преимущества Базового",
      "Набор ароматических масел",
      "Онлайн мастер-классы с экспертом",
      "Индивидуальные консультации",
      "Доступ к закрытому клубу",
      "Пожизненный доступ к материалам"
    ]
  },
  {
    name: "Профессиональный",
    price: "39 900",
    description: "Для тех, кто хочет создать свой бренд ароматов",
    features: [
      "Все преимущества Продвинутого",
      "Полный набор для создания свечей",
      "Консультации по запуску бизнеса",
      "Помощь в разработке брендинга",
      "Маркетинговая стратегия",
      "Доступ к поставщикам ингредиентов"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="font-mono text-2xl mb-12 text-black font-bold">Тарифы и стоимость</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border border-black p-6 ${
                index === 1 ? "bg-primary text-white" : "bg-white text-black"
              }`}
            >
              <h3 className="font-mono text-xl mb-2 font-bold">{plan.name}</h3>
              
              <div className="flex items-baseline mb-3">
                <span className="text-2xl font-mono font-bold">{plan.price}</span>
                <span className="ml-1 font-mono font-semibold">₽</span>
              </div>
              
              <p className="font-mono text-xs mb-6 font-semibold">{plan.description}</p>
              
              <ul className="space-y-3 font-mono text-sm mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 font-bold">-</span>
                    <span className="font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-2 px-4 font-mono text-sm border font-bold ${
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