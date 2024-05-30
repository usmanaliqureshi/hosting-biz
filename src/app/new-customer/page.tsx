import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import DashboardNav from "../ui/navigation";
import AddCustomerForm from "@/app/ui/add-customer"
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Add New Customer - Dashboard',
  description: 'Add a new customer with all details',
};

export default async function Protected() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  const user = await getUser();

  if (!isLoggedIn) {
    redirect('/');
  }

  return (
    <>
      <Suspense fallback={
        <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
          <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-600 border-8 h-32 w-32" />
        </div>
      }>

        <>
          {/* ========== HEADER ========== */}
          <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-neutral-800 dark:border-neutral-700">
            <nav
              className="flex basis-full items-center w-full mx-auto px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="me-5 lg:me-0 lg:hidden">
                {/* Logo */}
                <a
                  className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                  href="/"
                  aria-label="Preline"
                >
                  HostingWala
                </a>
                {/* End Logo */}
              </div>
              <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
                <div className="sm:hidden">
                  <button
                    type="button"
                    className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                  >
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={11} cy={11} r={8} />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
                <div className="hidden sm:block">
                  <label htmlFor="icon" className="sr-only">
                    Search
                  </label>
                  <div className="relative min-w-72 md:min-w-80">
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                      <svg
                        className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={11} cy={11} r={8} />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="icon"
                      name="icon"
                      className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-2">
                  <button
                    type="button"
                    className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                  >
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                    data-hs-offcanvas="#hs-offcanvas-right"
                  >
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </button>
                  <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-dropdown-with-header"
                      type="button"
                      className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                    >
                      <img
                        className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
                        src="https://lh3.googleusercontent.com/-ScHXWTSvB_E/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmL6wJUaZFG0dARdgabxXxRFsbaTg/photo.jpg?sz=46"
                        alt="Image Description"
                      />
                    </button>
                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
                      aria-labelledby="hs-dropdown-with-header"
                    >
                      <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-neutral-800">
                        <p className="text-sm text-gray-500 dark:text-neutral-400">
                          Signed in as
                        </p>
                        <p className="text-sm font-medium text-gray-800 dark:text-neutral-300">
                          {(user?.email)}
                        </p>
                      </div>
                      <div className="mt-2 py-2 first:pt-0 last:pb-0">
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                          </svg>
                          Newsletter
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                            <path d="M3 6h18" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                          </svg>
                          Purchases
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                            <path d="M12 12v9" />
                            <path d="m8 17 4 4 4-4" />
                          </svg>
                          Downloads
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx={9} cy={7} r={4} />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          Team Account
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          {/* ========== END HEADER ========== */}
          {/* ========== MAIN CONTENT ========== */}
          {/* Breadcrumb */}
          <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
            <div className="flex justify-between items-center py-2">
              {/* Breadcrumb */}
              <ol className="ms-3 flex items-center whitespace-nowrap">
                <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                  Application Layout
                  <svg
                    className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </li>
                <li
                  className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
              {/* End Breadcrumb */}
              {/* Sidebar */}
              <button
                type="button"
                className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                data-hs-overlay="#application-sidebar"
                aria-controls="application-sidebar"
                aria-label="Sidebar"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
                </svg>
                <span className="sr-only">Sidebar</span>
              </button>
              {/* End Sidebar */}
            </div>
          </div>
          {/* End Breadcrumb */}
          {/* Sidebar */}
          <div
            id="application-sidebar"
            className="hs-overlay [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-[260px]
  hidden
  fixed inset-y-0 start-0 z-[60]
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700
 "
          >
            <div className="px-8 pt-4">
              {/* Logo */}
              <a
                className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                href="/dashboard"
                aria-label="Preline"
              >
                HostingWala
              </a>
              {/* End Logo */}
            </div>
            <DashboardNav />
          </div>
          {/* End Sidebar */}
          {/* Content */}
          <div className="w-full lg:ps-64">
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 hidden">
                {/* Card */}
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                        Total users
                      </p>
                      <div className="hs-tooltip">
                        <div className="hs-tooltip-toggle">
                          <svg
                            className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                          </svg>
                          <span
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                            role="tooltip"
                          >
                            The number of daily users
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                        72,540
                      </h3>
                      <span className="flex items-center gap-x-1 text-green-600">
                        <svg
                          className="inline-block size-4 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                        <span className="inline-block text-sm">1.7%</span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                        Sessions
                      </p>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                        29.4%
                      </h3>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                        Avg. Click Rate
                      </p>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                        56.8%
                      </h3>
                      <span className="flex items-center gap-x-1 text-red-600">
                        <svg
                          className="inline-block size-4 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                          <polyline points="16 17 22 17 22 11" />
                        </svg>
                        <span className="inline-block text-sm">1.7%</span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                        Pageviews
                      </p>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                        92,913
                      </h3>
                    </div>
                  </div>
                </div>
                {/* End Card */}
              </div>
              {/* End Grid */}
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 hidden">
                {/* Card */}
                <div className="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                        Income
                      </h2>
                      <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                        $126,238.49
                      </p>
                    </div>
                    <div>
                      <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500">
                        <svg
                          className="inline-block size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5v14" />
                          <path d="m19 12-7 7-7-7" />
                        </svg>
                        25%
                      </span>
                    </div>
                  </div>
                  {/* End Header */}
                  <div id="hs-multiple-bar-charts" />
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                        Visitors
                      </h2>
                      <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                        80.3k
                      </p>
                    </div>
                    <div>
                      <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500">
                        <svg
                          className="inline-block size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5v14" />
                          <path d="m19 12-7 7-7-7" />
                        </svg>
                        2%
                      </span>
                    </div>
                  </div>
                  {/* End Header */}
                  <div id="hs-single-area-chart" />
                </div>
                {/* End Card */}
              </div>
              {/* Card */}
              {/* Card Section */}
              <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Card */}
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
                      Add New Customer
                    </h2>
                  </div>
                  <AddCustomerForm />
                </div>
                {/* End Card */}
              </div>
              {/* End Card Section */}
              {/* End Card */}
            </div>
          </div>
          {/* End Content */}
          {/* ========== END MAIN CONTENT ========== */}
        </>
      </Suspense>
    </>
  )
}

// app/protected/page.tsx - Client Component