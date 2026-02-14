import * as z from "zod";

export const signInSchema = z.object({
    identifier: z.string()
        .min(1, { message: "Email or username is required" })
        .email({ message: "please enter a valid email address" }),
    password: z
        .string()
        .min(1, { message: "password is required" })
        .min(8, { message: "password must be at least 8 characters long" }),
    passwordConfirmation: z
        .string()
        .min(1, { message: "Please confirm your password" })
}).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
});