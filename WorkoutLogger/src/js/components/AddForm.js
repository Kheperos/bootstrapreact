const React = require('react');
const ReactDOM = require('react-dom');
const AppStore = require('../store/AppStore');
import AppActions from '../actions/AppActions';

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.type = React.createRef();
        this.minutes = React.createRef();
        this.miles = React.createRef();
    }

    handleSubmit(e) {
        e.preventDefault();
        var workout = {
            id: this.generateId(),
            type: this.type.current.value.trim(),
            minutes: this.minutes.current.value.trim(),
            miles: this.miles.current.value.trim(),
            date: new Date()
        };

        AppActions.addWorkout(workout);
    }

    generateId() {
        var id = '';
        var possible= '0123456789';

        for (var i=0;i<5;i++){
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return id;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <select className="form-control" ref={this.type}>
                        <option value="Jogging">Jogging</option>
                        <option value="Weight Lifting">Lifting</option>
                        <option value="Elliptical">Elliptical</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" ref={this.minutes} placeholder="Minutes"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" ref={this.miles} placeholder="Miles (Optional)"/>
                </div>
                <button type="submit" className="btn btn-outline-secondary btn-block">Log Workout</button>
            </form>
        )
    }
}

module.exports = AddForm;