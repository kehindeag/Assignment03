let numEnter = parseInt(prompt("Enter a number"));
let incrementalNum = parseInt(prompt("Enter your incremental"));
for (let i = numEnter; i >= 0; i -= incrementalNum) {
  document.write(`${i} <br>`);
}