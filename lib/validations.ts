import { z } from "zod";

export const soumissionSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  ville: z.string().min(1, "La ville ou le code postal est requis"),
  email: z.string().min(1, "Le courriel est requis").email("Format de courriel invalide"),
  telephone: z
    .string()
    .min(1, "Le téléphone est requis")
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Minimum 10 chiffres requis"),
  budget: z
    .enum(["", "lt5k", "5k-25k", "gt25k"])
    .optional()
    .default(""),
  moment: z
    .enum(["urgent", "1-3m", "3-6m", "gt6m"])
    .optional()
    .default("urgent"),
  description: z.string().min(1, "Veuillez décrire votre projet"),
});

export type SoumissionValues = z.infer<typeof soumissionSchema>;
