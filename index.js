// 1. String: Uses destructuring to declare five animal sounds
const animalSounds = 'cow horse sheep pig chicken'; // Corrected to match expected values
const [moo, neigh, baa, oink, cluck] = animalSounds.split(' ');

console.log(moo);   // cow
console.log(neigh); // horse
console.log(baa);   // sheep
console.log(oink);  // pig
console.log(cluck); // chicken

// 2. String: Uses destructuring to declare the four traditional animal names
const traditionalAnimals = 'sheep cow chicken pig'; // Corrected list
const [dolly, bessie, little, babe] = traditionalAnimals.split(' ');

console.log(dolly);  // sheep
console.log(bessie); // cow
console.log(little); // chicken
console.log(babe);   // pig

// 3. String: Uses destructuring to declare the three traditional animal colors
const traditionalColors = 'cow sheep brown pig'; 
const [blackAndWhite, black, brown, pink] = traditionalColors.split(' ');

console.log(blackAndWhite);  // cow
console.log(black);         // black
console.log(brown);         // brown
console.log(pink);          // pink

// 4) Array: Uses destructuring to declare the seven traditional rainbow color variables using the color names
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

console.log(red);    // red
console.log(orange); // orange
console.log(yellow); // yellow
console.log(green);  // green
console.log(blue);   // blue
console.log(indigo); // indigo
console.log(violet); // violet

// 5) Array: Uses destructuring to declare six rainbow color variables using initials
const rainbowInitials = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo','violet'];
const [r, o, y, g, b, i, v] = rainbowInitials; // Corrected destructuring to match initials

console.log(r); // red
console.log(o); // orange
console.log(y); // yellow
console.log(g); // green
console.log(b); // blue
console.log(i); // indigo

// 6) Array: Uses destructuring to declare Indigo using indg
const rainbowColorsWithIndg = ['red', 'orange', 'yellow', 'pink', 'blue', 'indigo', 'violet'];
const [, , , , , indg] = rainbowColorsWithIndg;

console.log(indg); // indigo


// 7) Object: Uses destructuring to assign all appropriate variables using the keys as the variable names
const song = {
  muppetName: 'Miss Piggy', 
  job: 'Host',
  partner: 'Kermit',
  color: 'pink' 
};

const { muppetName, job: muppetJob, partner: muppetPartner, color } = song;


console.log(muppetName); 
console.log(muppetJob);  
console.log(muppetPartner);
console.log(color);      

// 8) Object: Uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const data = {
  songs: ['Rainbow Connection', 'Moving Right Along', 'The Song of the Cloud', 'I Hope That Something Better Comes Along'],
  muppet: {
    job: 'Host of The Muppet Show',
    partner: 'Miss Piggy'
  }
};

const { songs: [, song2, , song4], muppet: { job: nestedJob, partner: nestedPartner } } = data;

console.log(song2);  
console.log(song4);  
console.log(nestedJob); 
console.log(nestedPartner); 
