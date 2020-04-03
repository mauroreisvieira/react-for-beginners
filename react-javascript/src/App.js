import React from 'react';

import { Header } from './Header';
import { Form } from './Form';
import { List } from './List';

class App extends React.Component {
    constructor() {
        super();
        this.state = { peoples: [] };
    }

    componentDidMount() {
        fetch(
            'https://v2-api.sheety.co/9af7c5608fe82bb956978b451f1dbe35/reactForBeginners/people'
        )
            .then((response) => response.json())
            .then((results) => {
                const { people } = results;
                this.setState({
                    peoples: people,
                });
            });
    }

    render() {
        const { peoples } = this.state;

        return (
            <div>
                <div className="bg-gray-800 pb-32">
                    <Header title="React for Beginners" />
                </div>
                <main className="-mt-32">
                    <div className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
                        <div className="bg-white shadow overflow-hidden rounded-md">
                            <div className="bg-white px-4 pt-5 pb-4 border-b border-gray-200">
                                <h3 className="text-xl leading-6 font-medium text-gray-900">
                                    People
                                </h3>
                            </div>
                            <Form />
                            <List {...{ peoples }} />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
