const React = require('react');
const ReactDOM = require('react-dom');
const AppStore = require('../store/AppStore');


function getAppState() {
    return {

    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this._onChange = this._onChange.bind(this);
        this.render = this.render.bind(this);
    }


    _onChange() {
        this.setState(getAppState());
    }

    render() {
        return (
            < div>

            </div>
        )

    }
}

module.exports = App;