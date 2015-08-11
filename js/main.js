"use strict";

var App = React.createClass({
	displayName: "App",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "container-fluid" },
			React.createElement(
				"div",
				{ className: "jumbotron" },
				React.createElement(
					"h1",
					{ className: "page-header" },
					"Welcome to the Carl Network!"
				)
			),
			React.createElement("div", null)
		);
	}
});

React.render(React.createElement(App, null), document.body);
