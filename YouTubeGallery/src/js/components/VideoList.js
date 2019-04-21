const React = require('react');
const ReactDOM = require('react-dom');
const AppActions = require('../actions/AppActions');
const Video = require('./Video');

function getAppState() {
    return {};
}

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.videos.map(function (video, index) {
                        return(
                            <Video video={video} key={index} />
                        )
                    })
                }
            </div>
        )
    }
}

module.exports = VideoList;