var React = require('react'),
    ReactDOM = require('react-dom'),
    UrlCheckerList = require('./components/UrlCheckerList.js');


var urlsToCheck = [
    {url: "http://www.getbootstrap.com", expectedStatus: 200},
    {url: "http://www.google.com", expectedStatus: 200},
    {url: "http://localhost:8000", expectedStatus: 200}
];


ReactDOM.render(
    <UrlCheckerList urls = {urlsToCheck} />,
    document.getElementById('app')
);