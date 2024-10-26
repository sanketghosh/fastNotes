import { z } from "zod";

export const RegisterSchema = z.object({
  username: z
    .string({
      required_error: "Username is required.",
    })
    .max(15, {
      message: "An username of ",
    }),

  email: z
    .string({
      required_error: "Email address is required.",
    })
    .email("Not a valid email."),

  password: z.string().min(6, {
    message: "A password of minimum six characters is needed.",
  }),
});

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Email address is required.",
    })
    .email("Not a valid email."),

  password: z.string().min(6, {
    message: "A password of minimum six characters is needed.",
  }),
});

export type RegisterType = z.infer<typeof RegisterSchema>;
export type LoginType = z.infer<typeof LoginSchema>;
