const React = require('react');
const ReactDOM = require('react-dom');
const AppStore = require('../store/AppStore');
const AppActions = require('../actions/AppActions');

function getAppState() {
    return {};
}

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this.text = React.createRef();
        this.searchText = this.searchText.bind(this);
    }

    searchText(e) {
        e.preventDefault();
        var search = {
            text: this.text.current.value.trim(),
        };

        AppActions.searchText(search);
    }

    render() {
        return (
            < div className="card bg-light">
                <div className="card-body">
                    <form onSubmit={this.searchText}>
                        <div className="form-group">
                            <label>Search for Something....</label>
                            <input type="text" className="form-control" ref={this.text}/>
                        </div>
                    </form>
                </div>
            </div>

        )

    }
}

module.exports = SearchForm;