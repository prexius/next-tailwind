/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Home() {
    return (
        <>
            {/* <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" key="title" />
                <link rel="stylesheet" href="" />
            </Head> */}
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold underline text-left">
                    Hello world!
                </h1>
                <h2 className="text-black bg-primary xxl:bg-info">Primary</h2>


                <div className="flex flex-row space-x-4 font-mono text-white text-sm font-bold leading-6">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
                </div>
                <div className="flex flex-row space-x-4 font-mono text-white text-sm font-bold leading-6 mt-10 justify-between">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-orange-500 shadow-lg">01</div>
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">02</div>
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                    <div>
                        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
                        </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>

                <button className="btn-primary font-pp">
                    Save changes
                </button>

                <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
                    When you look
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                        <span className="relative text-white">annoyed</span>
                    </span>
                    all the time, people think that youre busy.
                </blockquote>


                <div className="bg-hero h-96 w-100"></div>


                <div className="bg-indigo-300">
                    <img className="object-fill h-48 w-96" src="/images/1.png" alt="" />
                </div>

                <div className="columns-2 lg:columns-4">
                    <h4 className="bg-primary">One</h4>
                    <h4 className="bg-primary">One</h4>
                    <h4 className="bg-primary">One</h4>
                    <h4 className="bg-primary">One</h4>
                </div>
                <div className="columns-2 lg:columns-4">
                <img className="object-fill h-48 w-96" src="/images/1.png" alt="" />
                <img className="object-fill h-48 w-96" src="/images/1.png" alt="" />
                <img className="object-fill h-48 w-96" src="/images/1.png" alt="" />
                <img className="object-fill h-48 w-96" src="/images/1.png" alt="" />
                </div>

                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap justify-between pt-8 pb-16">
                        <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__ animate__fadeInUp animated" data-wow-delay=".2s" >
                            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <div className="sm:py-2 ml-2 sm:ml-6">
                                <span className="sm:text-2xl font-bold font-heading">+ </span>
                                <span className="sm:text-2xl font-bold font-heading count">150</span>
                                <p className="text-xs sm:text-base text-blueGray-400">Annual Partner</p>
                            </div>
                        </div>
                        <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__ animate__fadeInUp animated" data-wow-delay=".4s" >
                            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                </svg>
                            </div>
                            <div className="sm:py-2 ml-2 sm:ml-6">
                                <span className="sm:text-2xl font-bold font-heading">+ </span>
                                <span className="sm:text-2xl font-bold font-heading count">57</span>
                                <span className="sm:text-2xl font-bold font-heading"> k </span>
                                <p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                            </div>
                        </div>
                        <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__ animate__fadeInUp animated" data-wow-delay=".6s" >
                            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                            </div>
                            <div className="sm:py-2 ml-2 sm:ml-6">
                                <span className="sm:text-2xl font-bold font-heading">+ </span>
                                <span className="sm:text-2xl font-bold font-heading count">500</span>
                                <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                            </div>
                        </div>
                        <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__ animate__fadeInUp animated" data-wow-delay=".8s" >
                            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <div className="sm:py-2 ml-2 sm:ml-6">
                                <span className="sm:text-2xl font-bold font-heading">+ </span>
                                <span className="sm:text-2xl font-bold font-heading count">320</span>
                                <p className="text-xs sm:text-base text-blueGray-400">Research Work</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-auto h-72 relative max-w-sm mx-auto bg-white dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
                    <div className="flex items-center gap-4 p-4">
                        <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                        <div className="flex flex-col">
                            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Andrew Alfred</strong>
                            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Technical advisor</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4">
                        <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                        <div className="flex flex-col">
                            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Debra Houston</strong>
                            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Analyst</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4">
                        <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                        <div className="flex flex-col">
                            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Jane White</strong>
                            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Director, Marketing</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4">
                        <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                        <div className="flex flex-col">
                            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Ray Flint</strong>
                            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Technical Advisor</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
