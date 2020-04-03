import React from 'react';

export class List extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    renderPeopleList() {
        const { peoples } = this.props;

        return peoples.map((people, index) => {
            const { name, email } = people;

            return (
                <li key={index}>
                    <div className="flex items-center px-4 py-4 sm:px-6 border-b border-gray-200">
                        <div className="min-w-0 flex-1 flex items-center">
                            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                <div>
                                    <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                                        {name}
                                    </div>
                                    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                        <svg
                                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="truncate">
                                            {email}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            );
        });
    }

    render() {
        return <ul>{this.renderPeopleList()}</ul>;
    }
}
