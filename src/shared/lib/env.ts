import { z } from "zod";

const envSchema = z.object({});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("❌ Erro ao carregar variáveis de ambiente:");
    console.error(parsed.error.format());
    throw new Error("Variáveis de ambiente inválidas.");
}

export const env = parsed.data;