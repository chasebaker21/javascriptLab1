let name = "Chase Baker";
let age = 25;
let birthday = "February 3";
let detroitGC = false;
let lifeEvents = [
  "I was born in Grand Rapids, Michigan.",
  "I went to Grand Rapids Community College",
  "I went to Europe in 11th grade of high school.",
  "I'm a student in the front-end boot camp."
];

if (detroitGC === true) {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Detroit, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday +
      "."
  );
} else {
  console.log(
    "My name is " +
      name +
      " and I am student at Grand Circus in Grand Rapids, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday +
      "."
  );
}

let i = 0

for(let i=0; i < lifeEvents.length; i++) {
    console.log(lifeEvents += lifeEvents[i])
    break;
}
let counter = 0;

while(true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber !== 5) {
        console.log(randomNumber + " !== 5");
        counter++;
        

    } else {
      console.log("5 === 5. it took " + counter + " iterations to randomly generate the number 5.")
      counter++;
      break;
    }
}

