var App = React.createClass({
	
	getInitialState: function() {
		return {
			favoriteThings: [
				"zooping the doop",
				"wood burning",
				"drinking tea",
				"hanging with good pals"
			],
			carlHours: [
				"jeepers",
				"carl",
				"root beer",
				"craigslist",
				"study",
				"DENNY CRANE"
			]	
		};
	},

	getRandomHour: function() {
		var len = this.state.carlHours.length;
		var randomIndex = Math.floor(Math.random()*len);
		return this.state.carlHours[randomIndex];
	},


	render: function() {
		
		var favoriteThings = this.state.favoriteThings.map(function(thing) {
			return (
					<li>{thing}</li>
				);
		});

		return (
			<div className="row" >
				<div className="row">
					<div className="jumbotron">
						<h1 className="page-header">
							Welcome to Carl!
						</h1>
					</div>
				</div>
				<div className="row invisible" >
					<h2 className="page-header">
					These are a few of my favorite things!
					</h2>
					<ul>
						{favoriteThings}
					</ul>
				</div>
				<div>
					<h2>
					The current time in Carl Land is <b>{this.getRandomHour()}</b> o&#29;clock!
					</h2>
				</div>
			</div>
			);
	}
});



React.render(
	<App />,
	document.body
	);