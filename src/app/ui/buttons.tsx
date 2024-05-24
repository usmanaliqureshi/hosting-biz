import { deleteCustomer } from '@/app/lib/actions';

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
 
  return (
    <form action={deleteCustomer}>
    <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
    </button>
    </form>
  );
}