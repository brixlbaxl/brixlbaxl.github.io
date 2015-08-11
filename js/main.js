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
				"li",
				null,
				thing
			);
		});

		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "jumbotron" },
					React.createElement(
						"h1",
						{ className: "page-header" },
						"Welcome to Carl!"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "row invisible" },
				React.createElement(
					"h2",
					{ className: "page-header" },
					"These are a few of my favorite things!"
				),
				React.createElement(
					"ul",
					null,
					favoriteThings
				)
			)
		);
	}
});

React.render(React.createElement(App, null), document.body);
