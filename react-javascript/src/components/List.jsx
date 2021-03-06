import React from 'react';
import PropTypes from 'prop-types';

export class List extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    renderPeopleList() {
        const { people } = this.props;

        return people.map((person, index) => {
            const { name, company, position, city, phone, email } = person;
            return (
                <li key={index}>
                    <div className="flex items-center px-4 py-4 sm:px-6 border-b border-gray-200">
                        <div className="min-w-0 flex-1 flex items-center">
                            <div className="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                                <div>
                                    <div className="text-lg leading-5 font-medium truncate">
                                        {name}
                                    </div>
                                    <div className="mt-2 flex items-center text-sm leading-5 font-medium text-gray-500">
                                        <span className="truncate">
                                            {position}
                                        </span>
                                    </div>
                                    {company && (
                                        <div className="mt-2 flex items-center text-sm leading-5 font-medium text-gray-500">
                                            <span className="truncate">
                                                {company}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {city && (
                                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                            <span className="truncate">
                                                City: {city}
                                            </span>
                                        </div>
                                    )}
                                    {email && (
                                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                            Email:
                                            <a
                                                href={'mailto:' + email}
                                                className="truncate text-indigo-600 ml-1"
                                            >
                                                {email}
                                            </a>
                                        </div>
                                    )}
                                    {phone && (
                                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                            <span className="truncate">
                                                Phone: {phone}
                                            </span>
                                        </div>
                                    )}
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

List.propTypes = {
    people: PropTypes.array,
};
