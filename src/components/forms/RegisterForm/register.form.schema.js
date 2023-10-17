import { z } from "zod";

const RegisterFormSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório."),
    email: z
      .string()
      .email("Forneça um e-mail válido.")
      .min(1, "O e-mail é obrigatório."),
    password: z
      .string()
      .min(8, "São necessários pelo menos oito caracteres.")
      .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
      .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
      .regex(/[0-9]+/, "É necessário conter pelo menos um número.")
      .regex(
        /[!@#$%^&*]+/,
        "É necessário conter pelo menos um caracter especial (!@#$%^&*)."
      ),
    confirmPassword: z.string().min(1, "Confirmar a senha é obrigatório."),
    bio: z.string().min(1, "A bio é obrigatória."),
    contact: z.string().min(1, "O contato é obrigatório."),
    course_module: z.string().min(1, "O modulo é obrigatório."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  });

export default RegisterFormSchema;
