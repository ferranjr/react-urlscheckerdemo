var React = require('react'),
		$ = require('jquery');


var UrlChecker = React.createClass({ 

	displayName: 'UrlChecker',

	getInitialState: function() {
		return {
			statusColor: 	'default',
			statusText:   'checking'
		}
	},

	componentDidMount: function(){
		// Check the url is available
		var that = this;

		$.get( this.props.urlToCheck )
			.done(function(data) {
				console.log(data);
				that.setState({ statusColor: 'success' , statusText: 'cool' });
			})
			.fail(function(data) {
				console.log(data);
				that.setState({ statusColor: 'danger' , statusText: 'failed' });
			});

	},

	render: function () {
		return (
			<p>
				<span className={ 'label label-' + this.state.statusColor }>
					{ this.state.statusText }
				</span>&nbsp;
				{ this.props.urlToCheck } 
			</p>
		);
	}

});

module.exports = UrlChecker;
