var SiteSlides = React.createClass({

	render: function(){
		return (
			<div >

				<div className="slide">
					<SweetVideo />
				</div>

				<div className="slide red">
					<center className="middle bigText whiteText">
						Hey
					</center>
				</div>

				<div className="slide orange">
					<center className="middle bigText whiteText">
						Hey
					</center>
				</div>

				<div className="slide yellow">
					<center className="middle bigText whiteText">
						Hey
					</center>
				</div>

				<div className="slide green">
					<center className="middle bigText whiteText">
						Hey
					</center>
				</div>

				<div className="slide blue">
					<center className="middle bigText whiteText">
						Needle
					</center>
				</div>

				<div className="slide indigo">
					<center className="middle bigText whiteText">
						Hey
					</center>
				</div>

				<div className="slide violet">
					<center className="middle bigText whiteText">
						Hey
					</center>
				</div>

				<div className="slide black">
					<center className="middle bigText whiteText">
					Thanks for stopping by! 
					</center>
					<small>- Carl</small>
				</div>

			</div>
			);
	}
});

var SweetVideo = React.createClass({

	render: function() {
		return (
			<div className="slide embed-responsive embed-responsive-16by9">
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
			<div  >
				<SiteSlides />
			</div>
			);
	}
});



React.render(
	<App />,
	document.body
	);