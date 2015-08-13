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
				"denny crane"
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
			<div className="container" >
				<div className="row">
					<div className="jumbotron">
						<h1 className="page-header">
							Welcome to Carl!
						</h1>
						<h3>
						(work in progress... please don&#39;t judge me)
						</h3>
					</div>
				</div>
				<div className="row">
					<iframe width="854" height="480" 
					src="https://www.youtube.com/embed/7Lta2UBcnjU" 
					frameborder="0" allowfullscreen></iframe>
				</div>

				<div className="row">
					<h2 className="page-header">
					The current time in Carl Land is
					</h2>
					<div>
						<big className="img-circle text-uppercase">
						{this.getRandomHour()}
						</big>
					</div> 
					<h2 className="page-header">
					o&#39;clock!
					</h2>
				</div>

				<div className="row invisible" >
					<h2 className="page-header">
					These are a few of my favorite things!
					</h2>
					<ul>
						{favoriteThings}
					</ul>
				</div>

			</div>
			);
	}
});



React.render(
	<App />,
	document.body
	);