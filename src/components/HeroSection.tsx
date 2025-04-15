import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Создавайте <span className="text-primary">эстетичный контент</span> для YouTube
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Научитесь создавать видео, которые притягивают внимание своей эстетикой и качеством.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium">
                Начать обучение <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-4 w-4" /> Смотреть демо
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <img
                  alt="Аватар пользователя"
                  className="rounded-full border-2 border-background h-8 w-8 object-cover"
                  src="/placeholder.svg"
                />
                <img
                  alt="Аватар пользователя"
                  className="rounded-full border-2 border-background h-8 w-8 object-cover"
                  src="/placeholder.svg"
                />
                <img
                  alt="Аватар пользователя"
                  className="rounded-full border-2 border-background h-8 w-8 object-cover"
                  src="/placeholder.svg"
                />
                <img
                  alt="Аватар пользователя"
                  className="rounded-full border-2 border-background h-8 w-8 object-cover"
                  src="/placeholder.svg"
                />
              </div>
              <div>
                <span className="font-medium">500+ студентов</span> уже прошли курс
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
            <img
              alt="Эстетичный YouTube контент"
              className="object-cover w-full h-full"
              src="/placeholder.svg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                <Play className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;