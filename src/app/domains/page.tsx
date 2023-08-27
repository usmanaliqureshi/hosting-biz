'use client';

import { useEffect } from 'react';

// Components
import Header from "../../components/header";
import Footer from "../../components/footer";

const WebHosting = () => {

    useEffect(() => {
        import('preline');
    }, []);

    return (
        <>

            <Header title={"Domain Registration"} sub={"Best Domain Name Prices"} details={"Our domain name registration prices are listed below. Remember that our add-ons such as WHOIS Privacy, Email Forwarding, Domain Defender Protection, Custom WHOIS Records and DNS Management are always 100% free!"} />

            {/* Card Section */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {/* Card */}
                    <a
                        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
                        href="#"
                    >
                        <div className="p-4 md:p-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                        .COM
                                    </h3>
                                    <p className="text-sm text-gray-500">$13.99 / year</p>
                                </div>
                                <div className="pl-3">
                                    <svg
                                        className="w-3.5 h-3.5 text-gray-500"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
                        href="#"
                    >
                        <div className="p-4 md:p-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                        .NET
                                    </h3>
                                    <p className="text-sm text-gray-500">$13.99 / year</p>
                                </div>
                                <div className="pl-3">
                                    <svg
                                        className="w-3.5 h-3.5 text-gray-500"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
                        href="#"
                    >
                        <div className="p-4 md:p-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                        .ORG
                                    </h3>
                                    <p className="text-sm text-gray-500">$13.99 / year</p>
                                </div>
                                <div className="pl-3">
                                    <svg
                                        className="w-3.5 h-3.5 text-gray-500"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
                        href="#"
                    >
                        <div className="p-4 md:p-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                        .INFO
                                    </h3>
                                    <p className="text-sm text-gray-500">$19.99 / year</p>
                                </div>
                                <div className="pl-3">
                                    <svg
                                        className="w-3.5 h-3.5 text-gray-500"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
                        href="#"
                    >
                        <div className="p-4 md:p-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                        .PK
                                    </h3>
                                    <p className="text-sm text-gray-500">$14.99</p>
                                </div>
                                <div className="pl-3">
                                    <svg
                                        className="w-3.5 h-3.5 text-gray-500"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
                        href="#"
                    >
                        <div className="p-4 md:p-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                        .COM.PK
                                    </h3>
                                    <p className="text-sm text-gray-500">$14.99</p>
                                </div>
                                <div className="pl-3">
                                    <svg
                                        className="w-3.5 h-3.5 text-gray-500"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
                        href="#"
                    >
                        <div className="p-4 md:p-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                        .NET.PK
                                    </h3>
                                    <p className="text-sm text-gray-500">$14.99</p>
                                </div>
                                <div className="pl-3">
                                    <svg
                                        className="w-3.5 h-3.5 text-gray-500"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
                        href="#"
                    >
                        <div className="p-4 md:p-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                        .BIZ
                                    </h3>
                                    <p className="text-sm text-gray-500">$17.99 / year</p>
                                </div>
                                <div className="pl-3">
                                    <svg
                                        className="w-3.5 h-3.5 text-gray-500"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Card Section */}


            <Footer />

        </>
    )
}

export default WebHosting;