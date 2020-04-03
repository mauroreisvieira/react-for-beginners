import React from 'react';

import { Header } from './components/Header';
import { Form } from './components/Form';
import { List } from './components/List';

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
                    <div className="max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
                        <div className="bg-white shadow overflow-hidden rounded-md">
                            <div className="bg-white px-4 sm:px-6 py-6 border-b border-gray-200">
                                <h3 className="text-2xl leading-6 font-medium text-gray-900">
                                    People List
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
