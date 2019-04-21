const React = require('react');
const ReactDOM = require('react-dom');
const AppActions = require('../actions/AppActions');

function getAppState() {
    return {};
}

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this.handleDelete = this.handleDelete.bind(this, this.props.video.id)
    }

    handleDelete(i, j){
        AppActions.removeVideo(i);
    }

    render() {
        var link = 'https://www.youtube.com/embed/'+this.props.video.video_id;
        return (
            <div className="c4">
                <h5>{this.props.video.title} <span className="delete"><a onClick={this.handleDelete} href="#">X</a> </span></h5>
                <iframe width="360" height="285" src={link} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <p>{this.props.video.description}</p>
            </div>
        )
    }
}

module.exports = Video;