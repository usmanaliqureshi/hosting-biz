import { Suspense } from 'react';

// Components
import Header from "../components/header";
import Footer from "../components/footer";

const Pricing = () => {

    return (
        <>
            <Suspense fallback={
                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
                    <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-600 border-8 h-32 w-32" />
                </div>
            }>
                <Header title={"Reliable Hosting Solution"} sub={"Just a Click Away!"} details={"Discover a seamless web hosting experience where making your mark online is as effortless as it is reliable. With our guaranteed dependability, embark on your digital journey right here."} />

                {/* Pricing */}
                <div id="get-started" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
                    {/* Title */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                            Pricing </h2>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Join us and access pricing that mirrors current market standards, providing you with
                            affordability and choice aligned with your needs. </p>
                    </div>
                    {/* End Title */}
                    {/* Switch */}
                    <div className="flex justify-center items-center">
                        <label className="min-w-[3.5rem] text-sm text-gray-500 mr-3 dark:text-gray-400">
                            Monthly
                        </label>
                        <input type="checkbox" id="hs-basic-with-description" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

    before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200" />
                        <label className="relative min-w-[3.5rem] text-sm text-gray-500 ml-3 dark:text-gray-400">
                            Annual
                            <span className="absolute -top-10 left-auto -right-28">
                                <span className="flex items-center">
                                    <svg className="w-14 h-8 -mr-6" width={45} height={25} viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z" fill="currentColor" className="fill-gray-300 dark:fill-gray-700" />
                                    </svg>
                                    <span className="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5">
                                        Save up to 10%
                                    </span>
                                </span>
                            </span>
                        </label>
                    </div>
                    {/* End Switch */}
                    {/* Grid */}
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
                        {/* Card */}
                        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
                            <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                                Starter </h4>
                            <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                                <span className="absolute font-normal text-2xl text-md -ml-4">$</span>
                                4.99
                                <span className="font-normal text-sm"> / year</span>
                            </span>
                            <p className="mt-2 text-sm text-gray-500">All the basics for starting a new business</p>
                            <ul className="mt-7 space-y-2.5 text-sm">
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">1024 MB Disk Space</span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        10240 MB Bandwidth
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        10 Emails
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        10 FTP Accounts
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        One-Click WordPress Installer
                                    </span>
                                </li>
                            </ul>
                            <a className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700" href="#">
                                Sign Up
                            </a>
                        </div>
                        {/* End Card */}
                        {/* Card */}
                        <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
                            <p className="mb-3">
                                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                                    Most popular
                                </span>
                            </p>
                            <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                                Harpy </h4>
                            <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                                <span className="absolute font-normal text-2xl text-md -ml-4">$</span>
                                11.99
                                <span className="font-normal text-sm"> / year</span>
                            </span>
                            <p className="mt-2 text-sm text-gray-500">
                                All the basics for starting a new business </p>
                            <ul className="mt-7 space-y-2.5 text-sm">
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">2560 MB Disk Space</span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        25600 MB Bandwidth
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        25 Emails
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        25 FTP Accounts
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        One-Click WordPress Installer
                                    </span>
                                </li>
                            </ul>
                            <a className="mt-5 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
                                Sign Up
                            </a>
                        </div>
                        {/* End Card */}
                        {/* Card */}
                        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
                            <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                                Golden </h4>
                            <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                                <span className="absolute font-normal text-2xl text-md -ml-4">$</span>
                                24.99
                                <span className="font-normal text-sm"> / year</span>
                            </span>
                            <p className="mt-2 text-sm text-gray-500">
                                Everything you need for a growing business </p>
                            <ul className="mt-7 space-y-2.5 text-sm">
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">5120 MB Disk Space</span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        51200 MB Bandwidth
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        50 Emails
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        50 FTP Accounts
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        One-Click WordPress Installer
                                    </span>
                                </li>
                            </ul>
                            <a className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700" href="#">
                                Sign Up
                            </a>
                        </div>
                        {/* End Card */}
                        {/* Card */}
                        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
                            <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                                Warrior </h4>
                            <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                                <span className="absolute font-normal text-2xl text-md -ml-4">$</span>
                                49.99
                                <span className="font-normal text-sm"> / year</span>
                            </span>
                            <p className="mt-2 text-sm text-gray-500">
                                Advanced features for scaling your business </p>
                            <ul className="mt-7 space-y-2.5 text-sm">
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">10000 MB Disk Space</span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        1000 GB Bandwidth
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        100 Emails
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        100 FTP Accounts
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 h-5 w-5 text-blue-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        One-Click WordPress Installer
                                    </span>
                                </li>
                            </ul>
                            <a className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700" href="#">
                                Sign Up
                            </a>
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Grid */}
                </div>
                {/* End Pricing */}

                {/* Icon Blocks */}
                <div className="bg-blue-100">
                    <div className=" max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
                            {/* Icon Block */}
                            <a className="group flex flex-col justify-center hover:bg-blue-50 rounded-xl p-4 md:p-7" href="#">
                                <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
                                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                </div>
                                <div className="mt-5">
                                    <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                                        Competitive Packages </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        Competitive hosting packages with state of the art features. </p>
                                    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                                        Learn more
                                        <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <a className="group flex flex-col justify-center hover:bg-blue-50 rounded-xl p-4 md:p-7" href="#">
                                <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
                                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                                        <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                                        <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                                    </svg>
                                </div>
                                <div className="mt-5">
                                    <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                                        Intuitive Control Panel </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        cPanel hosting control panel to easily manage your hosting needs. </p>
                                    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                                        Learn more
                                        <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <a className="group flex flex-col justify-center hover:bg-blue-50 rounded-xl p-4 md:p-7" href="#">
                                <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
                                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                    </svg>
                                </div>
                                <div className="mt-5">
                                    <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                                        Documentation </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        Every component and plugin is well documented </p>
                                    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                                        Learn more
                                        <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <a className="group flex flex-col justify-center hover:bg-blue-50 rounded-xl p-4 md:p-10" href="#">
                                <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
                                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                </div>
                                <div className="mt-5">
                                    <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                                        24/7 Support </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        Round the clock support, 24 hours a day, 7 days a week. </p>
                                    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                                        Learn more
                                        <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                            {/* End Icon Block */}
                        </div>
                    </div>
                    {/* End Icon Blocks */}
                </div>
                {/* Features */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
                    {/* Grid */}
                    <div className="my-5 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
                        {/* Stats */}
                        <div className="text-center">
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Guaranteed Uptime </h4>
                            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
                                99.9% </p>
                            <p className="mt-1 text-gray-500">Reliable Hosting</p>
                        </div>
                        {/* End Stats */}
                        {/* Stats */}
                        <div className="text-center">
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Hosting Features </h4>
                            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
                                200+ </p>
                            <p className="mt-1 text-gray-500">State of the Art</p>
                        </div>
                        {/* End Stats */}
                        {/* Stats */}
                        <div className="text-center">
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Around the Globe </h4>
                            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
                                99% </p>
                            <p className="mt-1 text-gray-500">Happy Customers</p>
                        </div>
                        {/* End Stats */}
                    </div>
                    {/* End Grid */}
                </div>
                {/* End Features */}
                <Footer />
            </Suspense>
        </>
    )
}

export default Pricing;