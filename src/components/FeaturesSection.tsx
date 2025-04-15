import { Camera, Paintbrush, Wand2, PenTool, Lightbulb, Palette } from "lucide-react";

const features = [
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "Основы видеосъемки",
    description: "Научитесь правильно работать с камерой, светом и композицией для создания профессионального вида"
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: "Цветокоррекция",
    description: "Освойте техники цветокоррекции для создания уникальной цветовой атмосферы в ваших видео"
  },
  {
    icon: <Wand2 className="h-10 w-10 text-primary" />,
    title: "Монтаж и эффекты",
    description: "Изучите современные приемы монтажа и эффектов, которые сделают ваше видео запоминающимся"
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "Графический дизайн",
    description: "Создавайте профессиональные титры, заставки и другие элементы графики для YouTube"
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Развитие стиля",
    description: "Сформируйте свой уникальный эстетический стиль, который будет выделять ваш канал среди других"
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Работа с референсами",
    description: "Научитесь собирать и применять референсы для создания гармоничного визуального стиля"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Чему вы научитесь</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Наш курс охватывает все аспекты создания эстетичного контента для YouTube, от съемки до финального рендера.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-card border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 rounded-full bg-accent mb-5 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;