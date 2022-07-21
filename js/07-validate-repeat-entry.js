//Validate Repeat Entry in Lab 5 (Extra Credit 5 points)

//Global var
let miles;
let gallons;
let mpg;
let again = "y";

//Process the user feedback

do {
  miles = parseFloat(prompt("Enter miles driven"));
  gallons = parseFloat(prompt("How many gallons does your tank hold?"));

  if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
    mpg = miles / gallons;
    alert(`Your car gets ${mpg.toFixed(2)} miles per gallon`);
  } else {
    alert("One of both of your entries are invalid");
  }
  again = prompt("Repeat entries? (y/n)");
  if (again !== "y" && again !== "n") {
    again = prompt("Repeat entries? (y/n)");
  } else {
    continue;
  }
} while (again === "y");
console.log("bye for now");
