import React from 'react';

const PreviousView = (props) => {
	const data = (props.prevReports || {}).history || [];
	return (
		<div className="">
			{data.length ? (
				<React.Fragment>
					<div className="records-container">
						{data.map((d, key) => {
							return (
								<div key={key} className="sub-records">
									Date: {d.date}
									<br />
									Open: {d.open}
									<br />
									High: {d.high}
									<br />
									Low: {d.low}
									<br />
									Close: {d.close}
									<br />
								</div>
							);
						})}
					</div>
					<>
						<h3>Previous View</h3>
						<div className="previous-total-container">
							<b>TSLA</b> <br />
							{props.stockData.price}
							<br />
							{props.stockData.date}
						</div>
					</>
				</React.Fragment>
			) : null}
		</div>
	);
};

export default PreviousView;
