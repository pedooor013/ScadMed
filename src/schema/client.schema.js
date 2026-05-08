import {z} from 'zod';

const clientSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.email("Invalid email!"),
    password: z.string().min(6, "Password is required")
});

const clientIdSchema = z.object({
    clientId: z.number().int().positive("User ID must be a positive integer"),
});

export { clientSchema, clientIdSchema}; 