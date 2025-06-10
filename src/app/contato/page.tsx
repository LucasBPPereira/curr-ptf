import { FormContact } from "@/components/FormContact/FormContact";
import { Title } from "@/components/infra/Title";
import { cn } from "@/shared/utils/cn";
import { poppins } from "../fonts";
import AnimatedContent from "@/components/motion/AnimatedContent";

export default function PageContato() {
  return (
    <div className="h-full w-full pt-28 bg-blue-50">
      <div className="flex flex-col max-w-4xl w-full items-center mx-auto px-10">
        <section className="self-start">
          <AnimatedContent
            distance={30}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
            delay={0.3}
          >
            <Title
              level={1}
              className={cn(
                poppins.className,
                " text-md text-blue-600 font-medium mb-2"
              )}
            >
              Contato
            </Title>
          </AnimatedContent>
          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
            delay={0.5}
          >
            <p
              className={cn(
                poppins.className,
                " text-4xl font-bold text-zinc-800"
              )}
            >
              Como eu posso te ajudar?
            </p>
          </AnimatedContent>
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
            delay={0.6}
          >
            <p
              className={cn(
                poppins.className,
                " font-light text-zinc-700 max-w-lg mt-2 mb-10"
              )}
            >
              Vamos conversar para que eu possa sanar dúvidas, resolver
              problemas ou compartilharmos ideias. Estou sempre disponível para
              tal.
            </p>
          </AnimatedContent>
        </section>
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
          delay={1}
          className="max-w-4xl w-full"
        >
          <FormContact />
        </AnimatedContent>
      </div>
    </div>
  );
}
