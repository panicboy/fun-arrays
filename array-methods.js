var dataset = require('./dataset.json');

var myDataset = dataset.bankBalances;
/*
  create an array with accounts from bankBalances that are
  greater than 100000.00
  assign the resulting array to `hundredThousandairs`
*/
console.log('myDataset[0] before hundredThousandairs: ', myDataset[0]);
function hundredGrand(element, index, array) {
    return element.amount > 100000;
}


var hundredThousandairs = myDataset.filter(hundredGrand);

console.log('myDataset[0] after hundredThousandairs: ', myDataset[0]);
console.log('hundredThousandairs[0]: ', hundredThousandairs[0]);

/*
  set a new key for each object in bankBalances named `rounded`
  the value of this key will be the `amount` rounded to the nearest dollar
  example
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting array to `roundedDollar`
*/
console.log('myDataset[0] before roundedDollar: ', myDataset[0]);
function roundToDollar(element, index, array) {
    let myAmount = element.amount;
    let myState = element.state;
    let myRounded = Math.round(element.amount);
    return {amount: myAmount, state: myState, rounded: myRounded};
}
var roundedDollar = myDataset.map(roundToDollar);
console.log('roundedDollar[0]: ', roundedDollar[0], ' myDataset[0]: ', myDataset[0]);

/*
  set a the `amount` value for each object in bankBalances
  to the value of `amount` rounded to the nearest 10 cents
  example
    {
      "amount": 134758.4,
      "state": "HI"
    }
  assign the resulting array to `roundedDime`
*/

function roundToDime(element, index, array) {
    let myState = element.state;
    let myRoundedAmount = Math.round(element.amount * 10)/10;
    return {amount: myRoundedAmount, state: myState};
}

var roundedDime = myDataset.map(roundToDime);
// console.log(roundedDime[0]);

// set sumOfBankBalances to the sum of all amounts in bankBalances
var sumOfBankBalances = null;

/*
  set sumOfInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  in each of the following states
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
var sumOfInterests = null;

/*
  set sumOfHighInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  where the amount of the sum of interests in that state is
    greater than 50,000
  in every state except
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
var sumOfHighInterests = null;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table
    where the key is the two letter state abbreviation
    and the value is the sum of all amounts from that state
      the value must be rounded to the nearest cent
 */
var stateSums = null;

/*
  set lowerSumStates to an array containing
  only the two letter state abbreviation of each state
  where the sum of amounts in the state is
    less than 1,000,000
 */
var lowerSumStates = null;

/*
  set higherStateSums to be the sum of
    all amounts of every state
    where the sum of amounts in the state is
      greater than 1,000,000
 */
var higherStateSums = null;

/*
  set areStatesInHigherStateSum to be true if
    all of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var areStatesInHigherStateSum = null;

/*
  set anyStatesInHigherStateSum to be true if
    any of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  roundedDollar : roundedDollar,
  roundedDime : roundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};