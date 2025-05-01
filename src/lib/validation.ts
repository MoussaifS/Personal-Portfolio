// lib/validation.ts (Example)
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string()
    .min(1, { message: 'Message cannot be empty' })
    // Add this refinement check
    .refine(message => !/http|www|href/.test(message ?? ''), {
      message: 'Message must not contain URLs', // This message will be shown automatically
    }),
  honeypot: z.string().optional().refine(val => !val, { // Ensure honeypot is empty
      message: 'Spam detected', // Optional: you can handle this silently too
  }),
});

export type FormValues = z.infer<typeof formSchema>;

export function getFormSchema() {
  return formSchema;
}