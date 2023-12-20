import { object, string } from 'zod';
export const createSessionSchema = object({
    body: object({
        email: string({
            required_error: "Email Is required"
        }),
        password: string({
            required_error: "Password Is required"
        })

    })
});

