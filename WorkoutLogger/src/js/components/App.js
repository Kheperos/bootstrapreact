const React = require('react');
const ReactDOM = require('react-dom');
const AppStore = require('../store/AppStore');
import AddForm from './AddForm';
import AppActions from '../actions/AppActions';


function getAppState() {
    return {
        showForm: AppStore.getShowForm(),
        workouts: AppStore.getWorkouts(),
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this._onChange = this._onChange.bind(this);
        this.onShowFormClick = this.onShowFormClick.bind(this);
        this.render = this.render.bind(this);
    }


    _onChange() {
        this.setState(getAppState());
    }

    onShowFormClick(e) {
        e.preventDefault();

        AppActions.showForm();
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillMount() {
        AppStore.removeChangeListener(this._onChange);
    }

    render() {
        console.log(this.state.workouts);
        if (this.state.showForm) {
            var form = <AddForm/>
        } else {
            var form = '';
        }
        return (
            <div>
                <div className="pb-2 mt-4 mb-2 border-bottom">
                    <h1 className="text-center">WorkoutLogger</h1>
                </div>
                <a onClick={this.onShowFormClick} href="#" className="btn btn-primary btn-block">Add Workout</a>
                <br />
                {form}
                <br />
                WORKOUTS
                <br/>
            </div>

        )

    }
}

module.exports = App;