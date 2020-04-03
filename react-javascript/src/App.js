import React from 'react';

function App() {
    return (
        <div>
            <div className="bg-gray-800 pb-32">
                <header className="py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div className="flex-1 min-w-0">
                                <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
                                    React for Beginners
                                </h2>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <main className="-mt-32">
                <div className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
                    <div className="bg-white shadow overflow-hidden rounded-md">
                        <div className="bg-white px-4 pt-5 pb-4 border-b border-gray-200">
                            <h3 className="text-xl leading-6 font-medium text-gray-900">
                                People
                            </h3>
                        </div>
                        <div className="px-4 pt-5 pb-3 sm:px-6">
                            <div>
                                <label for="filter" className="sr-only">
                                    Search...
                                </label>
                                <div className="flex rounded-md shadow-sm">
                                    <div className="relative flex-grow focus-within:z-10">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <input
                                            id="filter"
                                            className="appearance-none rounded-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md text-gray-900 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <button className="-ml-px relative flex items-center px-3 py-2 rounded-r-md border border-gray-300 text-sm leading-5 bg-gray-50 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="ml-2">Filter</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <div className="flex items-center px-4 py-4 sm:px-6">
                                    <div className="min-w-0 flex-1 flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-12 w-12 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                            <div>
                                                <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                    Ricardo Cooper
                                                </div>
                                                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                                    <svg
                                                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                                            clip-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                    <span className="truncate">
                                                        ricardo@example.com
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="hidden md:flex justify-center items-center">
                                                <p className="leading-5 text-gray-600">
                                                    Music, Cars, Party
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
