import React from 'react';
import PropTypes from 'prop-types';
import * as classNames from 'classnames';

export class Pagination extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
        };
    }

    componentDidMount() {
        const { currentPage } = this.props;
        this.setState({ currentPage });
    }

    componentDidUpdate(prevProps) {
        const { currentPage } = this.props;

        if (prevProps.currentPage !== currentPage) {
            this.setState({ currentPage: currentPage });
        }
    }

    handleClickPage = value => {
        this.setState({ currentPage: value });
    };

    computedClassNames(page) {
        const { currentPage } = this.state;

        return classNames(
            '-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none transition ease-in-out duration-150',
            {
                'text-gray-800 hover:text-gray-800 is-active':
                    page === currentPage,
            }
        );
    }
    renderPagination() {
        const { numberResults, perPage } = this.props;
        return Array.from(
            { length: Math.ceil(numberResults / perPage) },
            (page, index) => index + 1
        ).map((page, index) => {
            return (
                <button
                    key={index}
                    onClick={() => {
                        this.handleClickPage(page);
                    }}
                    type="button"
                    className={this.computedClassNames(page)}
                >
                    {page}
                </button>
            );
        });
    }

    render() {
        const { perPage, numberResults } = this.props;

        const { currentPage } = this.state;
        return (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                    <button className="relative inline-flex justify-center flex-1 items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                        Previous
                    </button>
                    <button className="ml-3 relative inline-flex justify-center flex-1 items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm leading-5 text-gray-700">
                            Showing
                            <span className="font-medium mx-1">
                                {Math.min(currentPage * perPage, numberResults)}
                            </span>
                            of
                            <span className="font-medium mx-1">
                                {numberResults}
                            </span>
                            results
                        </p>
                    </div>
                    <div>
                        <span className="relative z-0 inline-flex shadow-sm">
                            <button
                                type="button"
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            {this.renderPagination()}
                            <button
                                type="button"
                                className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    perPage: PropTypes.number,
    numberResults: PropTypes.number,
    totalResults: PropTypes.number,
};
