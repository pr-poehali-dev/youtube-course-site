import { useState } from "react";

const modules = [
  {
    id: "module-1",
    title: "Основы эстетичной видеосъемки",
    description: "Знакомство с базовыми принципами съемки и композиции",
    lessons: [
      { title: "Вводное занятие: что такое эстетика в видео", type: "video", duration: "20 мин" },
      { title: "Работа с камерой и основы композиции", type: "video", duration: "35 мин" },
      { title: "Свет и его влияние на атмосферу видео", type: "video", duration: "40 мин" },
      { title: "Практическое задание: съемка мини-ролика", type: "practice", duration: "25 мин" }
    ]
  },
  {
    id: "module-2",
    title: "Цвет и атмосфера в видео",
    description: "Создание уникальной цветовой гаммы для вашего контента",
    lessons: [
      { title: "Теория цвета и ее применение в видео", type: "video", duration: "30 мин" },
      { title: "Основы цветокоррекции в Adobe Premiere", type: "video", duration: "45 мин" },
      { title: "Создание цветовых пресетов", type: "video", duration: "35 мин" },
      { title: "Практическое задание: цветокоррекция материала", type: "practice", duration: "40 мин" }
    ]
  },
  {
    id: "module-3",
    title: "Монтаж и ритм повествования",
    description: "Техники монтажа, создающие плавное восприятие",
    lessons: [
      { title: "Принципы монтажа для эстетичного контента", type: "video", duration: "40 мин" },
      { title: "Работа с таймлайном и переходами", type: "video", duration: "50 мин" },
      { title: "Синхронизация видео с музыкой", type: "video", duration: "45 мин" },
      { title: "Практическое задание: монтаж мини-ролика", type: "practice", duration: "45 мин" }
    ]
  }
];

const CurriculumSection = () => {
  const [openModule, setOpenModule] = useState<string>("module-1");

  return (
    <section id="curriculum" className="bg-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="font-mono text-2xl mb-12 text-black">Программа курса</h2>

        <div className="grid grid-cols-1 gap-6">
          {modules.map((module, index) => (
            <div key={module.id} className="border border-black">
              <button 
                onClick={() => setOpenModule(openModule === module.id ? "" : module.id)}
                className="w-full flex justify-between items-center p-4 text-left font-mono"
              >
                <div>
                  <span className="text-sm mr-2">MODULE {index + 1}</span>
                  <span className="text-lg">{module.title}</span>
                </div>
                <span className="text-xl">{openModule === module.id ? "-" : "+"}</span>
              </button>
              
              {openModule === module.id && (
                <div className="border-t border-black p-4">
                  <p className="mb-4 font-mono text-sm text-gray-700">{module.description}</p>
                  
                  <ul className="space-y-4">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="border border-gray-200 p-3">
                        <div className="flex justify-between">
                          <div className="font-mono text-sm">
                            <span className="mr-2">{index + 1}.{lessonIndex + 1}</span>
                            {lesson.title}
                          </div>
                          <div className="text-xs font-mono text-gray-500">
                            {lesson.duration}
                          </div>
                        </div>
                        <div className="mt-1 text-xs text-gray-500 font-mono">
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