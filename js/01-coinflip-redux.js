//The “Coin Flip” Game Redux
let coinFlip;
numEnter = parseInt(prompt("Enter a number"));
for (let i = 0; i < numEnter; i++) {
  coinFlip = Math.round(Math.random());
  if (coinFlip == 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
}