import { z } from "zod";

const productSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(3),
  price: z.number().positive(),
});

export default productSchema;
