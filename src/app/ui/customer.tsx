import { deleteCustomer } from '../lib/actions';

export default async function Customers(props) {
    const deleteCustomerwithID = await deleteCustomer.bind(null, props.id);

    return (
        <>
            <tr>
                <td key={props.id} className="size-px whitespace-nowrap">
                    <div className="ps-6 py-3">
                        <label
                            htmlFor="hs-at-with-checkboxes-1"
                            className="flex"
                        >
                            <input
                                type="checkbox"
                                className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-at-with-checkboxes-1"
                            />
                            <span className="sr-only">Checkbox</span>
                        </label>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <img
                                className="inline-block size-[38px] rounded-full"
                                src={props.image}
                                alt="Image Description"
                            />
                            <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                    {props.name}
                                </span>
                                <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                    {props.email}
                                </span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                            <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            {props.status}
                        </span>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="text-sm text-gray-500 dark:text-neutral-500">
                            {props?.created}
                        </span>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-1.5">
                        <a
                            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                            href="#"
                        >
                            <form action={deleteCustomerwithID}>
                                <input type="hidden" name="id" value={props.id} />
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Delete</button>
                            </form>
                        </a>
                    </div>
                </td>
            </tr>
        </>
    )
}