import { useState } from "react";

const modules = [
  {
    id: "module-1",
    title: "Основы ароматической композиции",
    description: "Ознакомление с базовыми принципами создания ароматов и их классификация",
    lessons: [
      { title: "Вводное занятие: искусство парфюмерии", type: "video", duration: "20 мин" },
      { title: "Основные ноты и их сочетания", type: "video", duration: "35 мин" },
      { title: "Особенности восприятия ароматов", type: "video", duration: "40 мин" },
      { title: "Практическое задание: создание простой композиции", type: "practice", duration: "25 мин" }
    ]
  },
  {
    id: "module-2",
    title: "Натуральные ингредиенты",
    description: "Изучение природных компонентов и их применение в парфюмерии",
    lessons: [
      { title: "Эфирные масла и их свойства", type: "video", duration: "30 мин" },
      { title: "Растительные экстракты и их особенности", type: "video", duration: "45 мин" },
      { title: "Работа с натуральными компонентами", type: "video", duration: "35 мин" },
      { title: "Практическое задание: создание натурального аромата", type: "practice", duration: "40 мин" }
    ]
  },
  {
    id: "module-3",
    title: "Создание парфюмерных свечей",
    description: "Техники изготовления ароматических свечей ручной работы",
    lessons: [
      { title: "Материалы и инструменты для свечей", type: "video", duration: "40 мин" },
      { title: "Работа с воском и ароматическими композициями", type: "video", duration: "50 мин" },
      { title: "Декорирование и презентация готового продукта", type: "video", duration: "45 мин" },
      { title: "Практическое задание: создание парфюмерной свечи", type: "practice", duration: "45 мин" }
    ]
  }
];

const CurriculumSection = () => {
  const [openModule, setOpenModule] = useState<string>("module-1");

  return (
    <section id="curriculum" className="bg-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="font-mono text-2xl mb-12 text-black font-bold">Программа курса</h2>

        <div className="grid grid-cols-1 gap-6">
          {modules.map((module, index) => (
            <div key={module.id} className="border border-black">
              <button 
                onClick={() => setOpenModule(openModule === module.id ? "" : module.id)}
                className="w-full flex justify-between items-center p-4 text-left font-mono"
              >
                <div>
                  <span className="text-sm mr-2 font-semibold">MODULE {index + 1}</span>
                  <span className="text-lg font-semibold">{module.title}</span>
                </div>
                <span className="text-xl font-bold">{openModule === module.id ? "-" : "+"}</span>
              </button>
              
              {openModule === module.id && (
                <div className="border-t border-black p-4">
                  <p className="mb-4 font-mono text-sm text-gray-700 font-semibold">{module.description}</p>
                  
                  <ul className="space-y-4">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="border border-gray-200 p-3">
                        <div className="flex justify-between">
                          <div className="font-mono text-sm font-semibold">
                            <span className="mr-2">{index + 1}.{lessonIndex + 1}</span>
                            {lesson.title}
                          </div>
                          <div className="text-xs font-mono text-gray-500 font-semibold">
                            {lesson.duration}
                          </div>
                        </div>
                        <div className="mt-1 text-xs text-gray-500 font-mono font-semibold">
                          {lesson.type === "video" ? "Видеоурок" : "Практика"}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;