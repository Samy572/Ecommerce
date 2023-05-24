import React from 'react';

const Sales = () => {
	return (
		<div className="sales">
			<div className="title">
				<h1>Ecobeats</h1>
			</div>

			<div className="container-img-sales">
				<img src="/banner-img.png" />
			</div>

			<p>
			vibrate to the rhythm of nature  <br /> with EcoBeats.
			</p>
			<div className="container-btn-sales">
				<button>READ MORE</button>
				<button className="shop-now">SHOP NOW</button>
			</div>
		</div>
	);
};

export default Sales;
