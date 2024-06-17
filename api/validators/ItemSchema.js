import z from "zod";
//const currentYear = new Date().getFullYear();

const itemSchema = z.object({
    id: z.number().min(4),
    productName: z.string({
        required_error: "Field is required",
    })
    .min(1),
    stock: z.number().min(0),
    price: z.number().min(1),
    category: z.enum([
        "yerba mate",
        "alfajores",
        "dulce de leche",
        "galletitas"
    ]),
    image: z.string()
}); //Estas son las reglas de validación, con las que va a ser comparada nuestra request

export function validateItem(object) {
    return itemSchema.safeParse(object);//safeParse : función interna del validador
} //Esta función hace la comparación entre la request y el schema

export function validatePartialItem(object) {
    return itemSchema.partial().safeParse(object);
  }