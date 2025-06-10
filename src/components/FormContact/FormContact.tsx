"use client";
import { Controller, Form, useForm } from "react-hook-form";
import { Fieldset } from "../infra/Fieldset";
import { Title } from "../infra/Title";
import { Input } from "../infra/Input";
import { Label } from "../infra/Label";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../infra/Textarea";
import { SubmitButton } from "../SubmitButton";
import { noHtmlRegex } from "@/shared/noHTMLRegex";
import DOMPurify from "dompurify";
import { cn } from "@/shared/utils/cn";
import { poppins } from "@/app/fonts";
import AnimatedContent from "../motion/AnimatedContent";

const contactSchema = z.object({
  name: z
    .string()
    .refine((val) => !noHtmlRegex.test(val), { message: "Campo inválido!" }),
  assunt: z.string().refine((val) => !noHtmlRegex.test(val)),
  email: z
    .string()
    .email()
    .refine((val) => !noHtmlRegex.test(val)),
  tel: z
    .string()
    .optional()
    .refine((val) => val && !noHtmlRegex.test(val)),
  message: z.string().refine((val) => !noHtmlRegex.test(val)),
});

type TContactSchema = z.infer<typeof contactSchema>;

export const FormContact = () => {
  const form = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      assunt: "",
      message: "",
      name: "",
      tel: "",
    },
  });

  return (
    <section
      className={"px-3 py-5 border rounded-xl shadow bg-white max-w-4xl w-full"}
    >
      <AnimatedContent
        distance={40}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        threshold={0.2}
        delay={1}
      >
        <Title level={2} className={cn(poppins.className, "text-center")}>
          Preencha o formulário
        </Title>
        <Form
          control={form.control}
          onSubmit={async ({ data }) => {
            try {
              console.log(data);
              const sanitizedData = {
                name: DOMPurify.sanitize(data.name),
              };

              console.log(sanitizedData);

              const response = await fetch("/api/contact", {
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(sanitizedData),
              });

              if (response.ok) {
                console.log("ddeu certo");
              }
            } catch (error) {
              console.error("Ocorreu um erro", error);
            }
          }}
          className="p-2"
        >
          <Controller
            control={form.control}
            name="name"
            render={({ field }) => (
              <Fieldset>
                <Label label="Nome" required htmlFor="name" />
                <Input
                  id="name"
                  ariaInvalid={!!form.formState.errors.name}
                  className={cn(
                    form.formState.errors.name &&
                      "border-red-500 ring-red-100 focus-visible:border-red-600 focus-visible:ring-red-200 bg-white"
                  )}
                  {...field}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 font-medium font-sans mt-1 mb-3">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </Fieldset>
            )}
          />
          <Controller
            control={form.control}
            name="assunt"
            render={({ field }) => (
              <Fieldset>
                <Label label="Assunto" required htmlFor="assunt" />
                <Input id="assunt" {...field} />
              </Fieldset>
            )}
          />
          <Controller
            control={form.control}
            name="email"
            render={({ field }) => (
              <Fieldset>
                <Label label="E-mail" required htmlFor="email" />
                <Input id="email" {...field} />
              </Fieldset>
            )}
          />
          <Controller
            control={form.control}
            name="tel"
            render={({ field }) => (
              <Fieldset>
                <Label label="Telefone" optional htmlFor="telephone" />
                <Input id="telephone" {...field} />
              </Fieldset>
            )}
          />
          <Controller
            control={form.control}
            name="message"
            render={({ field }) => (
              <Fieldset>
                <Label label="Mensagem" required htmlFor="message" />
                <Textarea
                  id="message"
                  {...field}
                  ariaInvalid={!!form.formState.errors.message}
                />
              </Fieldset>
            )}
          />
          <SubmitButton
            content="Enviar"
            isLoading={form.formState.isSubmitting}
            loadingContent="Enviando dados..."
            className={cn(
              poppins.className,
              `font-medium bg-gradient-to-b text-white hover:text-white from-blue-600 to-blue-700  transition-colors duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]  hover:bg-gradient-to-b hover:from-blue-600/95 hover:to-blue-700 `
            )}
          />
        </Form>
      </AnimatedContent>
    </section>
  );
};
