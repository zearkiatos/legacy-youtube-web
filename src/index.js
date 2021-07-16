import React from 'react';
import ReactDOM from 'react-dom';
// Create a new Component. This component should produce
// some HTML
const App = function() {
    return <div>Hi!</div>
}

// Take this component's generated HTML and got it
// on the page (in the DOM)

ReactDOM.render(<App />);