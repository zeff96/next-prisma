import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string({ invalid_type_error: "Invalid email" }).email({
    message: "Email required!",
  }),
  password: z.string({
    invalid_type_error: "Invalid password!",
  }),
});

export const RegisterSchema = z.object({
  name: z.string({
    invalid_type_error: "Invalid username!",
  }),
  email: z.string({
    invalid_type_error: "Invalid email!",
  }),
  password: z
    .string({
      invalid_type_error: "Invalid password!",
    })
    .min(6),
});
