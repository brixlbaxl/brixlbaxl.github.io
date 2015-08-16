"use strict";

var SiteSlides = React.createClass({
	displayName: "SiteSlides",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ className: "slide" },
				React.createElement(SweetVideo, null)
			),
			React.createElement("div", { className: "slide red" }),
			React.createElement("div", { className: "slide orange" }),
			React.createElement("div", { className: "slide yellow" }),
			React.createElement("div", { className: "slide green" }),
			React.createElement("div", { className: "slide blue" }),
			React.createElement("div", { className: "slide indigo" }),
			React.createElement("div", { className: "slide violet" }),
			React.createElement(
				"div",
				{ className: "slide black" },
				React.createElement(
					"center",
					{ className: "middle bigText whiteText" },
					"Thanks for stopping by!"
				),
				React.createElement(
					"small",
					null,
					"- Carl"
				)
			)
		);
	}
});

var SweetVideo = React.createClass({
	displayName: "SweetVideo",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "slide embed-responsive embed-responsive-16by9" },
			React.createElement("iframe", { className: "embed-responsive-item",
				src: ''.concat('https://www.youtube.com/embed/7Lta2UBcnjU', '?autoplay=1', '&controls=0', '&start=20', '&end=112', '&modestbranding=1', '&rel=0', '&showinfo=0', '&iv_load_policy=3')
			})
		);
	}
});

var App = React.createClass({
	displayName: "App",

	render: function render() {

		return React.createElement(
			"div",
			null,
			React.createElement(SiteSlides, null)
		);
	}
});

React.render(React.createElement(App, null), document.body);
