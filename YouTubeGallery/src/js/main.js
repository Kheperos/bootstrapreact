const App = require('./components/App');
const React = require('react');
const ReactDOM = require('react-dom');
const AppAPI = require('./utils/AppAPI');

AppAPI.getVideos();

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);