"use server"

import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache'

export async function deleteCustomer(id: string) {
    try {
        await sql`DELETE FROM customers WHERE id = ${id}`;
        revalidatePath('/');
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to delete the Customer ' + id);
    }
}