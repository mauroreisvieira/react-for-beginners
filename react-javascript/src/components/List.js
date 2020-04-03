import React from 'react';
import PropTypes from 'prop-types';

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
                            <div className="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                                <div>
                                    <div className="text-md leading-5 font-medium text-indigo-600 truncate">
                                        {name}
                                    </div>
                                    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
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

List.propTypes = {
    peoples: PropTypes.array,
};
