const API_KEY = '0QDFDLN6RJQ3XJ2Y';
const ENDPOINT = 'https://www.alphavantage.co/query?function=';

export const getStockPrice = (symbol = '') => {
    const stockData = {};
    return fetch(`${ENDPOINT}GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`).then(response => {
        return response.json();
    }).then(data => {
        if (data['Error Message']) {
            throw new Error(`There was an error fulfilling your request. Be sure you've entered a valid symbol`);
        }
        let {'01. symbol': symbol, '05. price': price, '07. latest trading day': date} = data['Global Quote'];
        return Object.assign(stockData, {symbol, price, date});
    }).catch(err => {
        return `${err}`;
    });
};

export const getPreviousData = (symbol = '') => {
    const stockData = {};
    return fetch("".concat(ENDPOINT, "TIME_SERIES_DAILY&symbol=").concat(symbol, "&apikey=").concat(API_KEY)).then(function (response) {
        return response.json();
    }).then(function (data) {
        // log and export all data
        if (data['Error Message']) {
            throw new Error("There was an error fulfilling your request. Be sure you've entered a valid symbol");
        } // send only the most recent 5 days of data


        stockData.history = Object.entries(data['Time Series (Daily)']).slice(0, 5).map(function (day) {
            let _day$ = day[1],
                open = _day$['1. open'],
                high = _day$['2. high'],
                low = _day$['3. low'],
                close = _day$['4. close'];
            return {
                open: open,
                high: high,
                low: low,
                close: close,
                date: day[0]
            };
        });
        return stockData;
    })["catch"](function (err) {
        return "".concat(err);
    });
}