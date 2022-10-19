function Berti_member(name, age, height, birthday) { //object to store data of an ordinary berti family member, we are using a function to start a new berti_member object
  this.name = name; //initialize name variable in our object using function parameters
  this.age = age; //initialize age variable in our object using function parameters
  this.height = height; //initialize height variable in our object using function parameters
  this.birthday = birthday; //initialize birthday variable in our object using function parameters
}

function getOlderBertiSister(array_berti_sisters) { //function which gets an array of berti_member objects and returns the one with older age
  var index_older_sister = 0; //index of older sister found
  var temp_older_age_found_yet = 0; //to store the older age found yet

  for (var i = 0; i <= array_berti_sisters.length - 1; i++) {
    if (array_berti_sisters[i].age > temp_older_age_found_yet) {
      //if current sister in loop is older than the temp_older_age_found_yet
      index_older_sister = i; //store index of older sister in our array
      temp_older_age_found_yet = array_berti_sisters[i].age; //store older age found yet
    }
  }
  
  return array_berti_sisters[index_older_sister]; //return the object of the created Berti_member with older age
}

let array_berti_sisters = []; //empty array to store berti sisters
let luiza = new Berti_member("luiza", 20, "1.65cm", "12/10/2002"); //create luiza family member
let carla = new Berti_member("carla", 23, "1.75cm", "25/04/1999"); //create carla family member
let maria = new Berti_member("maria", 27, "1.67cm", "03/12/1995"); //create maria family member
array_berti_sisters.push(luiza, carla, maria); //add all sisters variables to array_berti_sisters array

var older_berti_sister = getOlderBertiSister(array_berti_sisters); //get the older berti sister object
console.log("Printing the older berti sister info: \n");
console.log(older_berti_sister); //print the object
