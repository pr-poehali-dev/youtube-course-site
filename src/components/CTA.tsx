import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Готовы создавать эстетичный контент?
            </h2>
            <p className="mt-4 text-xl opacity-90 max-w-[600px]">
              Присоединяйтесь к сообществу креативных авторов и начните свой путь к успеху на YouTube уже сегодня.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
              Получите бесплатный урок
            </h3>
            <p className="text-muted-foreground mb-6">
              Оставьте свой email, и мы отправим вам пробный урок из нашего курса
            </p>
            <form className="space-y-4">
              <div className="space-y-2">
                <Input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full" 
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="w-full" 
                />
              </div>
              <Button className="w-full">
                Получить бесплатный урок
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Отправляя форму, вы соглашаетесь с нашей политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;