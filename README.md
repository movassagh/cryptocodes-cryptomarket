# cryptocodes-cryptomarket

`@cryptocodes-cryptomarket` package provides cryptocurrency prices based on different markets

Available markets are USDT, USDC, BTC, ETH, BNB



## Results
Result will be array of following object:

```js
{ symbol: 'ETHBTC', price: '0.07673200' }
```

## Sample Results

[
{ symbol: 'ETHBTC', price: '0.07673200' },\
 { symbol: 'LTCBTC', price: '0.00265000' },\
 { symbol: 'BNBBTC', price: '0.01386600' },\
 { symbol: 'NEOBTC', price: '0.00045800' },\
 { symbol: 'QTUMETH', price: '0.00211900' },\
 { symbol: 'EOSETH', price: '0.00108200' },\
 { symbol: 'SNTETH', price: '0.00001754' },\
 { symbol: 'BNTETH', price: '0.00029800' },\
 { symbol: 'BCCBTC', price: '0.07908100' },\
 { symbol: 'GASBTC', price: '0.00011970' }
]

<br/>

## Install

```js
npm install @cryptocodes/cryptomarket
```

<br/>

## Usage

```js
import market from @cryptocodes/cryptomarket
```
OR
```js
const market = require("@cryptocodes/cryptomarket")
```

<br/>

## getMarket
`getMarket` gets array of crypto prices in specified Market.\
 This function returns `Promise`

</br>

Gets List of crypto prices in `All` markets

```js
const allPrices = await market.getMarket();
```
OR
```js
market
  .getMarket()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

</br></br>
Gets List of crypto prices in `USDT` market

```js
const allPrices = market.getMarket("USDT");
```
OR
```js
market
  .getMarket("USDT")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

</br></br>
Gets List of crypto prices in `BTC` market

```js
const allPrices = market.getMarket("BTC");
```
OR
```js
market
  .getMarket("BTC")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</br>

> Replace the market argument in `market.getMarket` with the one you need

</br>

## getCoin

`getCoin` gets price of input Coin in specified Market.\
This function returns `Promise`

</br>

Price of Coin `LTC` in Market `USDT`

```js
const allPrices = market.getCoin("LTC", "USDT");
```
OR
```js
market
  .getCoin("LTC", "USDT")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

</br>

Sample result for getCoin
```js
{ symbol: 'LTCUSDT', price: '56.22000000' }
```

<br/>

## Issues

As this data is being fetch from Binance exchange at the moment, there may be a problem of connection in some countries.\
In this case, uing proxy or VPN would be a soulotion 
