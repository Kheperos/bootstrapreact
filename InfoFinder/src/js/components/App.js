const React = require('react');
const ReactDOM = require('react-dom');
const AppStore = require('../store/AppStore');
const SearchForm = require('./SearchForm');
const SearchResults = require('./SearchResults');

function getAppState() {
    return {
        results: AppStore.getResults(),
        searchText: AppStore.getSearchText(),
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
                <SearchForm/>
                <SearchResults results={this.state.results} searchText={this.state.searchText}/>
            </div>

        )

    }
}

module.exports = App;