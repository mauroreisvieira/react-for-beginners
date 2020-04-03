## React Javascript

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## React Class Component

```js
import React from 'react';

class Template extends React.Component {
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
        return (
            <h1>React for Beginners</h1>
        );
    }
}

export default Template;
````
