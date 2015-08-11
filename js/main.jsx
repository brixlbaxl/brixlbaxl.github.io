var App = React.createClass({
	
	getInitialState: function() {
		return {
			favoriteThings: [
				"zooping the doop",
				"wood burning",
				"drinking tea",
				"hanging with good pals"
			]		
		};
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
			</div>
			);
	}
});



React.render(
	<App />,
	document.body
	);