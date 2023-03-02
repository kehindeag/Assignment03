//Marco! Polo!

let statusUse;

for (i = 1; i <= 100; i++) {
  // statusUse = i % 2 == 0 ? "even" : "odd"; //Single statement suites
  if (i % 5 == 0 && i % 3 != 0) {
    document.write(`${i} is Polo! <br>`);
  } else if (i % 3 == 0 && i % 5 != 0) {
    document.write(`${i} is Marco! <br>`);
  } else if (i % 5 == 0 && i % 3 == 0) {
    document.write(`${i} is Marco! Polo! <br>`);
  }
  //document.write(` ${i} is ${statusUse} <br>`);
}