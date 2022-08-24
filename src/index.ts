import binance from "./api/binance";

type MarketPriceType = { symbol: string; price: string };
type MarketType = "USDT" | "BTC" | "ETH" | "USDC" | "BNB";

// Gets the Cryptoes Prices based on input markets
export const getMarket = async (market: MarketType | null = null) => {
  return new Promise<MarketPriceType[]>((resolve, reject) => {
    binance
      .get("/api/v3/ticker/price")
      .then((response) => {
        let resMarkets: MarketPriceType[] = response.data;
        let result: MarketPriceType[];
        if (market) {
          result = resMarkets.filter((resMarket) =>
            resMarket.symbol.endsWith(market)
          );
        } else {
          result = response.data;
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getCoin = async (coin: string, market: MarketType) => {
  return new Promise((resolve, reject) => {
    binance
      .get(`/api/v1/ticker/price?symbol=${coin}${market}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};


