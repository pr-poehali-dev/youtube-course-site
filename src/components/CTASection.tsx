import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы создавать привлекательный контент для YouTube?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Присоединяйтесь к сотням креаторов, которые уже улучшили качество своих видео и увеличили аудиторию благодаря нашему курсу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-medium">
              Начать обучение сейчас <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Узнать больше
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Ограниченное предложение: скидка 20% для первых 50 студентов
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;