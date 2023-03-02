//Odd or Even?
let statusUse;

for (i = 0; i <= 15; i++) {
  statusUse = i % 2 == 0 ? "even" : "odd"; //Single statement suites
  document.write(` ${i} is ${statusUse} <br>`);
}