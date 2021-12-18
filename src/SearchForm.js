import React, { useState } from 'react';

const SearchForm = (props) => {
	const [stockSymbol, setStockSymbol] = useState('');

	const onChangeHandler = (event) => {
		setStockSymbol(event.target.value);
	};

    const onSubmitHandler = (event) => {
        props.setStockSymbol(stockSymbol);
        props.getStockPrice(stockSymbol).then((data) => {
			props.setStockData(data);
        });
        props.setPrevReports({});
        event.preventDefault();
    }

	return (
		<React.Fragment>
			<form className="frm symbol" onSubmit={onSubmitHandler}>
				<label htmlFor="symbol">Ticker Symbol</label>
				<input
					type="text"
					id="symbol"
					name="symbol"
					onChange={onChangeHandler}
					value={stockSymbol}
				/>
				<button type="submit">View</button>
			</form>
		</React.Fragment>
	);
};

export default SearchForm;
