"use strict";
// Remember, we're gonna use strict mode in all //scripts now!

//actually section 5 of the course
//developer skills and editor set up.
//lectures 53 to 60 are theoretical and so code //free.
//mostly theoretical stuff but the coding challenge is beneath.

// below is lecture 61, 'Debugging with the console and breakpoints.'
//this one does have pratical coding.

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    debugger;
    value: Number(prompt("Degrees celsius:")),
  };
  console.table(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
