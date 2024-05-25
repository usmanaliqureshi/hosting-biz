"use server"

import { z } from 'zod';
import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache';

export async function deleteCustomer(id: string) {
    try {
        await sql`DELETE FROM customers WHERE id = ${id}`;
        revalidatePath('/');
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to delete the Customer ' + id);
    }
}

const FormSchema = z.object({
    fullname: z.string(),
    email: z.string(),
    phone: z.coerce.number(),
    status: z.enum(['Active', 'In-Active']),
});

const CreateCustomer = FormSchema.omit({ status: true });

export async function addCustomer(formData: FormData) {

    const { fullname, email, phone } = CreateCustomer.parse({
        fullname: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        status: 'Active',
    });

    const rawFormData = Object.fromEntries(formData.entries())

    console.log(rawFormData);

    // try {
        
    //     await sql`INSERT INTO customers (name, email, phone, status) VALUES (${fullname}, ${email}, ${phone}, ${status})`;
        
    //     console.log('A User has been created');

    //     redirect('/dashboard');

    // } catch (err) {
        
    //     console.error('Database Error:', err);
        
    //     throw new Error('Failed to add the new Customer');

    // }
}