const React = require('react');
const ReactDOM = require('react-dom');
const AppStore = require('../store/AppStore');
const AddForm = require('./AddForm');
const VideoList = require('./VideoList');

function getAppState() {
    return {
        videos: AppStore.getVideos(),
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

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillMount() {
        AppStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            < div>
                <AddForm />
                <VideoList videos={this.state.videos} />
            </div>

        )

    }
}

module.exports = App;