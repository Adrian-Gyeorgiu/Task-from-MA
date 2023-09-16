const moneyInPockets = 25;
const myAge = 19;

const price = 20;
const ageStart = 18; 

const moneyEnough = `${moneyInPockets}` >= `${price}`;
const ageLimit = `${myAge}` >= `${ageStart}`;

const canBuy = moneyEnough && ageLimit ;

console.log(canBuy);