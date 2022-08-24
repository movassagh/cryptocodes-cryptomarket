declare type MarketPriceType = {
    symbol: string;
    price: string;
};
declare type MarketType = "USDT" | "BTC" | "ETH" | "USDC" | "BNB";
export declare const getMarket: (market?: MarketType | null) => Promise<MarketPriceType[]>;
export declare const getCoin: (coin: string, market: MarketType) => Promise<unknown>;
export {};
