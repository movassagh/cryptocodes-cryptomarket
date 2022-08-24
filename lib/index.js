"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoin = exports.getMarket = void 0;
const binance_1 = __importDefault(require("./api/binance"));
// Gets the Cryptoes Prices based on input markets
const getMarket = (market = null) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        binance_1.default
            .get("/api/v3/ticker/price")
            .then((response) => {
            let resMarkets = response.data;
            let result;
            if (market) {
                result = resMarkets.filter((resMarket) => resMarket.symbol.endsWith(market));
            }
            else {
                result = response.data;
            }
            resolve(result);
        })
            .catch((error) => {
            reject(error);
        });
    });
});
exports.getMarket = getMarket;
const getCoin = (coin, market) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        binance_1.default
            .get(`/api/v1/ticker/price?symbol=${coin}${market}`)
            .then((response) => {
            resolve(response.data);
        })
            .catch((error) => {
            reject(error.response.data);
        });
    });
});
exports.getCoin = getCoin;
//# sourceMappingURL=index.js.map