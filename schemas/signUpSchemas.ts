import * as z from "zod";

export const signUpSchema = z.object({
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "please enter a valid email address" }),

  password: z.string()
    .min(1, { message: "password is required" })
    .min(8, { message: "password must be at least 8 characters long" }),

  passwordConfirmation: z.string()
    .min(1, { message: "please confirm your password" }),
}).refine((data: { password: string; passwordConfirmation: string }) => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ["passwordConfirmation"],
});

 