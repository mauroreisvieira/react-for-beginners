# React For Beginners

Starter files for the React For Beginners course.

## Cookbook

- 👉 Install [Node.js](https://nodejs.org/en/)
- 👉 Install dependencies with: [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)
- 👉 React + ReactDOM
- 👉 Typescript

## React Class Component

```jsx
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        // first time the component shows up, the method is executed.
        // re-render method not re-run this method, because component not unmounted and mount again.
        // common case to use is when to new data form some API
    }

    componentWillReceiveProps(nextProps) {
        // anytime component receive props this method runs.
        // we can check if next props its different to the previous
        // Note: DEPRECATED in next major release
        if (nextProps.whatever !== this.props.whatever) {
            // do something
        }
    }

    shouldComponentUpdate(nextProps, nextStates) {
        // helps developers to optimize our App.
        // sometimes React re-render the component even nothing change on this specific component.
        // return true if want it to update
        // return false if not
    }

    componentWillUpdate() {
        // it’s basically the same as componentWillReceiveProps, except you are not allowed to call this.setState
        // instead of componentWillReceiveProps on a component that also has shouldComponentUpdate (but no access to previous props).
    }

    componentDidUpdate() {
        // when an operation needs to happen after the DOM is updated and the update queue is emptied.
        // updating the DOM in response to prop or state changes.
    }

    componentWillUnmount() {
        // the main use case for this method is teardown or cleanup your code before your component disappears
        // (e.g. remove event listeners)
    }

    render() {
        return <h1>React for Beginners</h1>;
    }
}
```

## React Functional Component

```jsx
import React, { useState, useEffect, useContext } from 'react';

const UserContext = React.createContext(null);

const UserInfo = () => {
    const user = useContext(UserContext);
    return <div>{user ? 'Logged in as ' + user.name : 'Anonymous'}</div>;
};

const App = () => {
    const [user, setUser] = React.useState(null);
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount((currentCount) => currentCount + 1);
    const handleDecrement = () => setCount((currentCount) => currentCount - 1);
    useEffect(() => setCount((currentCount) => currentCount + 1), []);
    return (
        <div>
            <UserContext.Provider value={user}>
                <UserInfo />
            </UserContext.Provider>
            <h1>{count}</h1>
            <button type="button" onClick={handleIncrement}>
                Increment
            </button>
            <button type="button" onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    );
};
```

## Hooks

- `useState` — This hook returns a state full value and a function to update it.
Originally, we had to initialize the apps state separately and then use the setState function to
update the state’s value.

- `useEffect` — This hook takes a function that contains code (fetching data or subscribing to a service)
and returns a function that will be executed every time before the effect runs and when the component
is unmounted — in order to re-initialize itself from the last iteration.

- `useContext` — This hook accepts a context object and returns the current context value,
as given by the nearest context provider for the given context.
