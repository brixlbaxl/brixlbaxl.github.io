"use strict";

var App = React.createClass({
	displayName: "App",

	getInitialState: function getInitialState() {
		return {
			favoriteThings: ["zooping the doop", "wood burning", "drinking tea", "hanging with good pals"]
		};
	},

	render: function render() {

		var favoriteThings = this.state.favoriteThings.map(function (thing) {
			return React.createElement(
				"p",
				null,
				thing
			);
		});

		return React.createElement(
			"div",
			{ className: "container-fluid" },
			React.createElement(
				"div",
				{ className: "jumbotron" },
				React.createElement(
					"h1",
					{ className: "page-header" },
					"Welcome to Carl!"
				)
			),
			React.createElement(
				"div",
				null,
				React.createElement(
					"p",
					null,
					"These are a few of my favorite things!"
				),
				React.createElement(
					"div",
					null,
					favoriteThings
				)
			)
		);
	}
});

React.render(React.createElement(App, null), document.body);
