import { useState } from "react";

const faqItems = [
  {
    question: "Для кого подходит этот курс?",
    answer: "Курс подходит как для начинающих YouTube-блогеров, так и для тех, кто уже имеет свой канал, но хочет улучшить визуальную составляющую своих видео. Мы покрываем как базовые техники, так и продвинутые методы создания эстетичного контента."
  },
  {
    question: "Нужно ли дорогое оборудование для прохождения курса?",
    answer: "Нет, курс разработан таким образом, что вы можете начать с любым оборудованием, даже со смартфоном. Мы фокусируемся на принципах и техниках, которые можно применить независимо от используемой техники."
  },
  {
    question: "Как долго я буду иметь доступ к материалам курса?",
    answer: "При покупке тарифа «Стандарт» вы получаете доступ на 6 месяцев. Тариф «Премиум» дает пожизненный доступ ко всем материалам курса, включая будущие обновления. Тариф «Команда» также предоставляет пожизненный доступ для всех участников вашей команды."
  },
  {
    question: "Могу ли я получить возврат средств, если курс мне не подойдет?",
    answer: "Да, мы предоставляем 14-дневную гарантию возврата средств. Если в течение 14 дней после покупки вы поймете, что курс вам не подходит, мы вернем полную стоимость без дополнительных вопросов."
  }
];

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="bg-background py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="font-mono text-2xl mb-12 text-white">Часто задаваемые вопросы</h2>

        <div className="border border-white">
          {faqItems.map((item, index) => (
            <div key={index} className={`${index !== 0 ? 'border-t border-white' : ''}`}>
              <button 
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center p-4 text-left font-mono text-white"
              >
                <span className="text-sm">{item.question}</span>
                <span className="text-xl">{openItem === index ? "-" : "+"}</span>
              </button>
              
              {openItem === index && (
                <div className="border-t border-white p-4 font-mono text-xs text-gray-300">
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