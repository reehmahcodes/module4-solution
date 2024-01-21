// Assume namesArray is your array of names
const namesArray = ['John', 'Jane', 'Mark', 'Steve'];

// Loop over the array
for (let i = 0; i < namesArray.length; i++) {
  // Get the current name
  const currentName = namesArray[i];

  // Check the condition and print the greeting
  if (currentName.charAt(0).toLowerCase() === 'j') {
    console.log('Goodbye ' + currentName);
  } else {
    console.log('Hello ' + currentName);
  }
}

