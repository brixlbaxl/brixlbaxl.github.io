"use strict";

var SweetVideo = React.createClass({
	displayName: "SweetVideo",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "embed-responsive embed-responsive-16by9" },
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
			{ className: "container" },
			React.createElement(SweetVideo, null)
		);
	}
});

React.render(React.createElement(App, null), document.body);
