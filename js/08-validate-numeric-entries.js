//Validate Numeric Entries in Lab 6 (Extra Credit 5 points)
//Global var
let futureValue;
let investment;
let rate;
let year;

//collect the values
investment = parseFloat(prompt("Enter investment amount as xxxx.xx"));
rate = parseFloat(prompt("Enter interest rate as xx.x"));
year = parseFloat(prompt("Enter the number of years you plan on investing"));

// calculate the future value
futureValue = investment;

for (let i = 0; i < year; i++) {
  if (
    !isNaN(investment) &&
    !isNaN(rate) &&
    rate >= 0 &&
    rate <= 6 &&
    !isNaN(year) &&
    year >= 1 &&
    year <= 30
  ) {
    futureValue = futureValue + (futureValue * rate) / 100;
  } else {
    document.write("invalid enteris");
  }
}
// Display result
document.write(`investment amount: $${investment.toFixed(2)}<br>`);
document.write(`interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Year: ${year}<br>`);
document.write(`future value: $${futureValue.toFixed(2)}<br>`);
