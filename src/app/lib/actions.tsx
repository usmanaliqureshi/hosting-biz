"use server"

import { z } from 'zod';
import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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
    status: z.string(),
});

export async function addCustomer(data: FormData) {

    const rawFormData = Object.fromEntries(data.entries())

    const { fullname, email, phone } = FormSchema.parse({
        fullname: rawFormData.name,
        email: rawFormData.email,
        phone: rawFormData.phone,
        status: 'Active',
    });

    if (typeof fullname === 'undefined' || fullname === '') {
        throw new Error('Please provide a valid Full name');
    } else if (typeof email === 'undefined' || email === '') {
        throw new Error('Please provide a valid Email Address');
    } else if (typeof phone === 'undefined' || !isNaN(phone)) {
        throw new Error('Please provide a valid Phone Number');
    }

    try {

        await sql`INSERT INTO customers (name, email, phone, status) VALUES (${fullname}, ${email}, ${phone}, 'Active')`;

    } catch (err) {

        console.error('Database Error:', err);

        throw new Error('Failed to add the new Customer');

    }

    redirect('/customers');
}