import { useState } from "react";

const faqItems = [
  {
    question: "Для кого подходит этот курс?",
    answer: "Курс подходит как для новичков, интересующихся ароматической композицией, так и для профессионалов, желающих расширить свои навыки. Мы рассматриваем как базовые принципы, так и продвинутые техники создания уникальных ароматов."
  },
  {
    question: "Нужно ли специальное оборудование?",
    answer: "Для базового курса вам понадобится лишь набор эссенций и масел, который можно приобрести отдельно или в составе наших тарифов. Для создания свечей потребуются дополнительные материалы, подробный список вы получите перед началом соответствующего модуля."
  },
  {
    question: "Как долго я буду иметь доступ к материалам?",
    answer: "При покупке тарифа «Базовый» вы получаете доступ на 6 месяцев. Тарифы «Продвинутый» и «Профессиональный» предоставляют пожизненный доступ ко всем материалам курса, включая будущие обновления."
  },
  {
    question: "Можно ли получить возврат средств?",
    answer: "Да, мы предоставляем 14-дневную гарантию возврата. Если вы решите, что курс вам не подходит в течение 14 дней после приобретения, мы вернем полную стоимость без дополнительных вопросов."
  }
];

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="bg-background py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="font-mono text-2xl mb-12 text-white font-bold">Часто задаваемые вопросы</h2>

        <div className="border border-white">
          {faqItems.map((item, index) => (
            <div key={index} className={`${index !== 0 ? 'border-t border-white' : ''}`}>
              <button 
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center p-4 text-left font-mono text-white"
              >
                <span className="text-sm font-bold">{item.question}</span>
                <span className="text-xl font-bold">{openItem === index ? "-" : "+"}</span>
              </button>
              
              {openItem === index && (
                <div className="border-t border-white p-4 faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;