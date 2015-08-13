"use strict";

var App = React.createClass({
	displayName: "App",

	getInitialState: function getInitialState() {
		return {
			favoriteThings: ["zooping the doop", "wood burning", "drinking tea", "hanging with good pals"],
			carlHours: ["jeepers", "carl", "root beer", "craigslist", "study", "denny crane"]
		};
	},

	getRandomHour: function getRandomHour() {
		var len = this.state.carlHours.length;
		var randomIndex = Math.floor(Math.random() * len);
		return this.state.carlHours[randomIndex];
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
			{ className: "container" },
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
					),
					React.createElement(
						"h3",
						null,
						"(work in progress... please don't judge me)"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement("iframe", { width: "250", height: "400",
					src: "https://www.youtube.com/embed/7Lta2UBcnjU?autoplay=1&controls=0&start=19&end=110&loop=1&playlist=7Lta2UBcnjU",
					frameborder: "0", allowfullscreen: true })
			),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"h2",
					{ className: "page-header" },
					"The current time in Carl Land is"
				),
				React.createElement(
					"div",
					null,
					React.createElement(
						"big",
						{ className: "img-circle text-uppercase" },
						this.getRandomHour()
					)
				),
				React.createElement(
					"h2",
					{ className: "page-header" },
					"o'clock!"
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
