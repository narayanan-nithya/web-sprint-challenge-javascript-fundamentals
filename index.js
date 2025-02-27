//🚀🚀🚀  Topic #1 Closures 🚀🚀🚀//
/* 🚀🚀🚀🤓 Task 1: 🤓🚀🚀🚀 
Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 
/*Answer: In this example, the nestedFunction is function scoped.It exists within myFunction. When nestedFunction is invoked , it is reaching into myFunction to look for variable internal's value and when it finds it is console logging it's value.*/



/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number 
    2. Use a counter to return the summation of that number. 
    
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. Note, you may use a for loop for this function if you wish */

function summation(number) {
  /*Your Code Here*/
  const summationvalue = (number * (number + 1))/2 ;

  return summationvalue;
  }
 console.log(summation(4));

// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];
  
  /* 🦁🦁🦁 Request 1: .forEach() 🦁🦁🦁
  The zoos want to display both the scientific name and the animal name in front of the habitats. 
  Use animalNames to populate and return the displayNames array with only the animal name and scientific name of each animal. 
  displayNames will be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
  */

  function animalNames(array){
    /*Your Code Here*/
   const displayNames = []; // creating an empty array. 
   array.forEach(function(item) {
      return displayNames.push(`name: ${item['animal_name']}, scientific: ${item['scientific_name']}`);//iterating through every array item.
      
    });
    return displayNames; //returns the new array. 
  }
  console.log(animalNames(zooAnimals));

  /* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
  The zoo needs a list of all their animal's names converted to lower case. 
  Using lowerCaseNames use .map() to create a new array of strings with the animal's names in lowercase and return the new array. 
  For example: ['jackal, asiatic', .....]
  */

  function lowerCaseNames(data){
    /*Your Code Here*/
    const newAnimalNames = data.map(function(item){ // iterating through the array and converting the data into lowercase. 
      return item.animal_name.toLowerCase();
    });
    return newAnimalNames; //returns the new array 
  }
  console.log(lowerCaseNames(zooAnimals));
  
  /* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
  The zoo is concerned about animals with a lower population count. 
  Using lowPopulationAnimals use .filter() to create a new array of objects which contains only the animals with a population of less than 5.
  */

  function lowPopulationAnimals(array){
    /*Your Code Here*/
    const lowAnimalPopl = array.filter(function(item){
      return item.population < 5; //filtering to process population less than 5
    });
    return lowAnimalPopl; //returning variable
  }
  console.log(lowPopulationAnimals(zooAnimals));

  /* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
  The zoo needs to know their total animal population across the United States. 
  Using USApop find the total population from the zoos array using the .reduce() method. 
  Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count.
  */

  function USApop(array){
    /*Your Code Here*/
    const totalpopulation = array.reduce(function(acc, item){
      return acc + item['population'];
    }, 0); //initializing with value 0 and reduce function taking in the running total/current item is processing in the array
    return totalpopulation;
  }
  console.log(USApop(zooAnimals));
  
  // 🦁🦁🦁 Callbacks 🦁🦁🦁  
  /* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
    * Use the higher-order function consume with 3 parameters: a, b and cb
    * The first two parameters can take any argument (we can pass any value as an argument)
    * The last parameter accepts a callback
    * The consume function should return the invocation of cb, passing a and b into cb as arguments
  */

  function consume(a, b, cb){ //taking in params and callback function
    /*Your Code Here */
    return cb(a, b);
  }
  function lastcb(a, b){
    return `${a} and ${b}`
  }
 console.log(consume('2', '3',lastcb));
  
  /* 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁 */
 // 🦁🦁🦁 Use add to return the sum of two numbers 🦁🦁🦁
  
function add(num1 , num2 , addCb){
    /*Your Code Here*/
    return addCb = (num1 + num2);
  }
// 🦁🦁🦁 Use multiply to return the product of two numbers 🦁🦁🦁
  
function multiply(value1 , value2, multiplyCb){
   /*Your Code Here */
   return multiplyCb = (value1 * value2);
  }


 // 🦁🦁🦁 Use greeting to accept a first and last name and return "Hello {first-name} {last-name}, nice to meet you!" 🦁🦁🦁
  
function greeting(string1, string2, greetingCb){
  /*Your Code Here */
   return greetingCb = `Hello ${string1} ${string2}, nice to meet you!`;
  }
  
  
  // 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
  // ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
  console.log(consume(2, 2, add)); // 4
  console.log(consume(10, 16, multiply)); // 160
  console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //
//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴
/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use the constructor function named CuboidMaker to accept properties for length, width, and height which can be initialized as an object
*/
function CuboidMaker(attr){ // initializing objects
  /*Your Code Here */
  this.length = attr.length; 
  this.width = attr.width;
  this.height = attr.height;
}


/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height   */
CuboidMaker.prototype.volume = function(){ //function for volume method.

  return this.length * this.width * this.height;
};




/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  Formula for cuboid surface area of a cube: 
  2 * (length * width + length * height + width * height)  */
CuboidMaker.prototype.surfaceArea =function(){ //function for surface area method. 
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};




/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
  Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */

  const cuboid = new CuboidMaker({ //binding the object
    length: 4,
    width: 5,
    height: 5,
  });




// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
 

// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄
class CuboidMakerTwo{
  constructor (attr){ //initializing objects using constructor 
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume(){ //volume method.
    return this.length * this.width * this.height;
  }
  surfaceArea(){ //surface area method.
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
const cuboidTwo = new CuboidMakerTwo({ //binding the object
      length: 4,
      width: 5,
      height: 5,
});

//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130





  


  /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
  function foo(){
    console.log('its working');
    return 'bar';
  }
  foo();
  module.exports = {
    foo,
    summation,
    animalNames,
    lowerCaseNames,
    lowPopulationAnimals,
    USApop,
    consume, 
    add,
    multiply,
    greeting,
    CuboidMaker,
    CuboidMakerTwo
  }
