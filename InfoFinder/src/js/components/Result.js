const React = require('react');
const ReactDOM = require('react-dom');
const AppStore = require('../store/AppStore');

function getAppState() {
    return {};
}

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
    }

    render() {
        return (
            < div>
                <p className="content lead" dangerouslySetInnerHTML={{__html: this.props.result.Result}}></p>
            </div>

        )

    }
}

module.exports = Result;