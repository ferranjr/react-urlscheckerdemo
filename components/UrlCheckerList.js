var React = require('react'),
		UrlChecker = require('./UrlChecker.js');


var UrlCheckerList = React.createClass({
	
	displayName: 'UrlCheckerList',

	render: function () {
		var i = 0;
		var urls = this.props.urls.map( function( urlToCheck ) {
			i++;
			return <UrlChecker key={'urlToCheck_'+i} urlToCheck = {urlToCheck.url } />;
		});

		return (
			<div>
				<h1>List Urls to check</h1>
				{ urls }
			</div>
		)
	}


});

module.exports = UrlCheckerList;