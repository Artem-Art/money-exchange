// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let numOfCoins = {};
	const numOfH = Math.floor(currency/50);
	const remOfDivH=currency%50;
	const numOfQ = Math.floor(remOfDivH/25);
	const remOfDivQ = remOfDivH%25;
	const numOfD = Math.floor(remOfDivQ/10);
	const remOfDivD = remOfDivQ%10;
	const numOfN = Math.floor(remOfDivD/5);
	const numOfP = remOfDivD%5;
if (currency<=0) return {};
if(currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
if (numOfH>=1) numOfCoins.H = numOfH;
if (numOfQ>=1) numOfCoins.Q = numOfQ;
if (numOfD>=1) numOfCoins.D = numOfD;
if (numOfN>=1) numOfCoins.N = numOfN;
if (numOfP>=1) numOfCoins.P = numOfP;
return numOfCoins;
}
