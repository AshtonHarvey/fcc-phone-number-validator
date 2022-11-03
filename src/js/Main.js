let input = document.getElementById("phone");
let output = document.getElementById("answer");

function handleSubmit() {
  //writing it this way so that i can use this code in freecodecamp project page
  output.innerHTML = validateNumber(input.value.trim());
}

function validateNumber(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  console.log(regex.test(str));
  return regex.test(str);
}

//learned from hints. researched to understand because my idea was wayyyyyy off 😞
// start of input
// look for 1 or space. space is optional
// first check is optional
// look for 3 digits with or without Parentheses
// look for space or hyphen but is optional
// look for next 3 digits without parentheses
// look for space or hyphen but optional
// look for 4 digits at the end
