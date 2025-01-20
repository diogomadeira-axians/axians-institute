import { z } from "zod"

export const FormFiltersSchema = z.object({
    search: z.string().optional(),
    countryInstitute: z.string().optional(),
    language: z.string().optional(),
    topic: z.string().optional(),
    duration: z.string().optional(),
    trainingPath: z.string().optional(),
})

export type FormFiltersSchemaType = z.infer<typeof FormFiltersSchema>