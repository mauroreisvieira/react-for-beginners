import React from 'react';
import PropTypes from 'prop-types';

export class Form extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleChange = event => {
        const { onChange } = this.props;
        onChange(event.target.value);
    };

    render() {
        return (
            <div className="px-4 pt-5 pb-3 sm:px-6">
                <div>
                    <label htmlFor="filter" className="sr-only">
                        Filter people
                    </label>
                    <div className="flex shadow-sm">
                        <div className="relative flex-grow focus-within:z-10">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                onInput={this.handleChange}
                                id="filter"
                                className="appearance-none rounded-md block w-full pl-10 pr-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    onChange: PropTypes.func,
};
