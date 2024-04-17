import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ invalid_type_error: "Invalid email" })
    .email({
      message: "Email required!",
    })
    .trim(),
  password: z
    .string({
      invalid_type_error: "Invalid password!",
    })
    .trim(),
});

export const RegisterSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Invalid username!",
    })
    .min(2, { message: "Name must be atleast 2 characters long!" })
    .trim(),
  email: z
    .string({
      invalid_type_error: "Invalid email!",
    })
    .email({ message: "Please enter valid email!" })
    .trim(),
  password: z
    .string({
      invalid_type_error: "Invalid password!",
    })
    .min(6, { message: "Password must be atleast 6 characters long!" })
    .regex(/[A-Z]/, {
      message: "Password must contain atleast one uppercase letter!",
    })
    .regex(/[a-z]/, {
      message: "Password must contain atleas one lowercase letter!",
    })
    .regex(/[0-9]/, { message: "Password must contain atleast one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain atleast one special character!",
    })
    .trim(),
});
