import React from 'react';
import PropTypes from 'prop-types';

export class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { title } = this.props;
        return (
            <header className="py-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
                                {title}
                            </h2>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
};
