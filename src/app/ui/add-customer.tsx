"use server"

import { redirect } from "next/dist/server/api-utils";
import { addCustomer } from "../lib/actions";
import { revalidatePath } from "next/cache";

export default async function AddCustomerForm() {

    return (
        <form action={addCustomer}>
        {/* Section */}
        <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
          <label
            htmlFor="af-payment-billing-contact"
            className="inline-block text-sm font-medium dark:text-white"
          >
            Basic Information
          </label>
          <div className="mt-2 space-y-3">
            <input
              id="af-payment-billing-contact"
              name="name"
              type="text"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Phone Number"
            />
                  <div className="mt-5 flex justify-end gap-x-2">
                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                    href="/customers"
                    >
                      Cancel
                    </a>
                    <button
                      type="submit"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Save changes
                    </button>
                  </div>
          </div>
        </div>
        {/* End Section */}
      </form>
    )
}