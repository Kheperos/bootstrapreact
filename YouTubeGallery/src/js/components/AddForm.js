const React = require('react');
const ReactDOM = require('react-dom');
const AppActions = require('../actions/AppActions');

function getAppState() {
    return {};
}

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this.title = React.createRef();
        this.video_id = React.createRef();
        this.description = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        var video = {
            title: this.title.current.value.trim(),
            video_id: this.video_id.current.value.trim(),
            description: this.description.current.value.trim(),
        };

        AppActions.saveVideo(video);
    }

    render() {
        return (
            <div className="add-form">
                <div className="panel c12">
                    <h3>Add Video</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Video Title</label><br/>
                            <input type="text" className="form-control" ref={this.title}/>
                        </div>
                        <div className="form-group">
                            <label>Video ID</label><br/>
                            <input type="text" className="form-control" ref={this.video_id}/>
                        </div>
                        <div className="form-group">
                            <label>Video Description</label><br/>
                            <textarea className="form-control" ref={this.description}/>
                        </div>
                        <button type="submit" className="button">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

module.exports = AddForm;