let input = document.getElementById("phone");
let output = document.getElementById("answer");

function handleSubmit() {
  //writing it this way so that i can use this code in freecodecamp project page
  output.innerHTML = validateNumber(input.value.trim());
}

function validateNumber(number) {
  let regex = /[!-'*-,./:-~]/gi;
  let regexNumbers = /[0-9]/gi;
  let symbols = number.match(regex);
  let extractedNumber = number.match(regexNumbers);
  let numbers = number.split("");

  console.log(symbols);
  console.log(extractedNumber);
  console.log(numbers);

  if (
    symbols === null &&
    (extractedNumber.length === 10 ||
      (extractedNumber.length === 11 && numbers[0] == 1))
  ) {
    //validate as true
    return true;
  } else {
    // validate as false
    return false;
  }
}

// PAIN
//rewrite using regex to validate opening and closing () as well as number of numbers before or after - ?
// use original input "number"
// write function to whole everything in the if
