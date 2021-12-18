import React, { useState } from 'react';
import SearchForm from './SearchForm';
import StockViewer from './StockViewer';
import PreviousView from './PreviousView';

import { getStockPrice, getPreviousData } from './Api';

import './App.css';

function App() {
	const [stockSymbol, setStockSymbol] = useState('');
	const [stockData, setStockData] = useState({});
	const [prevReports, setPrevReports] = useState([]);

	return (
		<div className="App">
			<h2>Stock Search Form</h2>
			<SearchForm
				setStockSymbol={setStockSymbol}
				getStockPrice={getStockPrice}
				setStockData={setStockData}
				setPrevReports={setPrevReports}
			/>
			<StockViewer
				stockSymbol={stockSymbol}
				stockData={stockData}
				getPreviousData={getPreviousData}
				setPrevReports={setPrevReports}
			/>
			<PreviousView
                prevReports={prevReports}
				stockData={stockData}/>
		</div>
	);
}

export default App;
