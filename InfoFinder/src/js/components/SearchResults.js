const React = require('react');
const ReactDOM = require('react-dom');
const AppStore = require('../store/AppStore');
const Result = require('./Result');

function getAppState() {
    return {};
}

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
    }

    render() {
        if (this.props.searchText != '') {
            var results = <h2 className="pb-2 mt-4 mb-2 border-bottom">Results for {this.props.searchText}</h2>;
        } else {
            var results = '';
        }
        return (
            < div>
                {results}
                {
                    this.props.results.map(function (result, i) {
                        return (
                            <Result result={result} key={i}/>
                        )
                    })
                }
            </div>

        )

    }
}

module.exports = SearchResults;