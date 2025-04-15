import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Clock, Video, FileText, BookOpen } from "lucide-react";

const modules = [
  {
    id: "module-1",
    title: "Основы эстетичной видеосъемки",
    description: "Знакомство с базовыми принципами съемки и композиции",
    duration: "2 часа",
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
    duration: "2.5 часа",
    lessons: [
      { title: "Теория цвета и ее применение в видео", type: "video", duration: "30 мин" },
      { title: "Основы цветокоррекции в Adobe Premiere", type: "video", duration: "45 мин" },
      { title: "Создание цветовых пресетов", type: "video", duration: "35 мин" },
      { title: "Практическое задание: цветокоррекция отснятого материала", type: "practice", duration: "40 мин" }
    ]
  },
  {
    id: "module-3",
    title: "Монтаж и ритм повествования",
    description: "Техники монтажа, создающие плавное и приятное восприятие",
    duration: "3 часа",
    lessons: [
      { title: "Принципы монтажа для эстетичного контента", type: "video", duration: "40 мин" },
      { title: "Работа с таймлайном и переходами", type: "video", duration: "50 мин" },
      { title: "Синхронизация видео с музыкой", type: "video", duration: "45 мин" },
      { title: "Практическое задание: монтаж мини-ролика", type: "practice", duration: "45 мин" }
    ]
  },
  {
    id: "module-4",
    title: "Графические элементы и типографика",
    description: "Создание уникальных заставок, титров и других элементов",
    duration: "2.5 часа",
    lessons: [
      { title: "Основы типографики для видео", type: "video", duration: "30 мин" },
      { title: "Создание титров и нижних третей", type: "video", duration: "40 мин" },
      { title: "Анимация графических элементов", type: "video", duration: "45 мин" },
      { title: "Практическое задание: создание пакета графики", type: "practice", duration: "35 мин" }
    ]
  },
  {
    id: "module-5",
    title: "Формирование уникального стиля",
    description: "Разработка собственного узнаваемого визуального стиля",
    duration: "2 часа",
    lessons: [
      { title: "Анализ популярных эстетических стилей на YouTube", type: "video", duration: "35 мин" },
      { title: "Создание moodboard для своего канала", type: "video", duration: "25 мин" },
      { title: "Разработка визуальной концепции", type: "video", duration: "30 мин" },
      { title: "Финальный проект: создание эстетичного видео для YouTube", type: "practice", duration: "30 мин" }
    ]
  }
];

const LessonTypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "video":
      return <Video className="h-4 w-4" />;
    case "text":
      return <FileText className="h-4 w-4" />;
    case "practice":
      return <BookOpen className="h-4 w-4" />;
    default:
      return <Video className="h-4 w-4" />;
  }
};

const CurriculumSection = () => {
  const [openModule, setOpenModule] = useState<string>("module-1");

  return (
    <section id="curriculum" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Программа курса</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Структурированный план обучения поможет вам шаг за шагом освоить все аспекты создания эстетичного контента.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible value={openModule} onValueChange={setOpenModule}>
            {modules.map((module, index) => (
              <AccordionItem key={module.id} value={module.id} className="border rounded-lg mb-4 px-2 bg-card">
                <AccordionTrigger className="py-6 px-4 hover:no-underline font-medium">
                  <div className="flex flex-col md:flex-row md:items-center text-left gap-2 w-full">
                    <Badge variant="outline" className="w-fit md:mr-4">
                      Модуль {index + 1}
                    </Badge>
                    <div className="flex-1">{module.title}</div>
                    <div className="flex items-center text-sm text-muted-foreground md:ml-auto">
                      <Clock className="mr-1 h-4 w-4" />
                      {module.duration}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 pb-6 px-4">
                    <p className="text-muted-foreground mb-4">{module.description}</p>
                    <ul className="space-y-3">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-start p-3 bg-background rounded-md">
                          <div className="flex items-center justify-center p-2 bg-accent/50 rounded-md mr-3">
                            <LessonTypeIcon type={lesson.type} />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{lesson.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {lesson.type === "video" ? "Видеоурок" : lesson.type === "practice" ? "Практика" : "Материалы для чтения"}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {lesson.duration}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;