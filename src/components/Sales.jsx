import React from 'react';

const Sales = () => {
	return (
		<div className="sales">
			<h1 className='title'>Ecobeats</h1>
			<div className="container-img-sales">
				<img src="/banner-img.png" />
			</div>
			<div className="describe">
				{' '}
				<p>
					vibrate to the rhythm of nature <br /> with EcoBeats.
				</p>
			</div>

			<div className="container-btn-sales">
				<button>READ MORE</button>
				<button className="shop-now">SHOP NOW</button>
			</div>
		</div>
	);
};

export default Sales;
