import React from 'react';

const StockViewer = (props) => {
	const getPreviousData = () => {
		props.getPreviousData(props.stockSymbol).then((data) => {
		    props.setPrevReports(data);
        });
	};

	return (
		<React.Fragment>
			<h2>Stock Viewer</h2>
			<React.Fragment>
				<div>Symbol: {props.stockData.symbol}</div>
				<div>
					Price: {props.stockData.price ? `$${props.stockData.price}` : ''}
				</div>
				<button onClick={getPreviousData}>Previous 5 days</button>
			</React.Fragment>
			{Object.keys(props.stockData).length &&
			Object.values(props.stockData).every((v) => v === undefined) &&
			props.stockSymbol ? (
				<div>
					<br/>
					Result couldn't be loaded
					<br />
					Error: There was an error fulfilling your request. Be sure you've
					entered a valid symbol
				</div>
			) : null}
		</React.Fragment>
	);
};
export default StockViewer;
