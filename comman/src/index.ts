import z from "zod";


// Signup
export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export type SingupInput = z.infer<typeof signupInput>


// Signin 
export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})
export type SinginInput = z.infer<typeof signinInput>

// Create  blog
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export type CreateBlogInput = z.infer<typeof createBlogInput>

// Update blog
export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type UpdateBlogInput = z.infer<typeof updateBlogInput>