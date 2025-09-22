import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z
    .string()
    .url()
    .refine((url) => {
      try {
        const urlObj = new URL(url);
        const extension = urlObj.pathname.toLowerCase();
        // Check if URL ends with common image extensions
        return /\.(jpg|jpeg|png|gif|webp|svg|avif)$/.test(extension);
      } catch {
        return false;
      }
    }, "URL must point to an image file"),
  pitch: z.string().min(10),
});