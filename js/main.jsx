var SweetVideo = React.createClass({

	render: function() {
		return (
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item"
				src={''.concat('https://www.youtube.com/embed/7Lta2UBcnjU',
								'?autoplay=1',
								'&controls=0',
								'&start=20',
								'&end=112',
								'&modestbranding=1',
								'&rel=0',
								'&showinfo=0',
								'&iv_load_policy=3')} 
				></iframe>
			</div>
			);
	}
});

var App = React.createClass({
	

	render: function() {

		return (
			<div className="container" >
				<SweetVideo />
			</div>
			);
	}
});



React.render(
	<App />,
	document.body
	);