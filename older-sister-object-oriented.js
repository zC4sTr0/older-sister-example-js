function Family_member(name, age, height, birthday) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.birthday = birthday;
}

function getOlderBertiSister(array_berti_sisters) {
  var index_older_sister = 0; //inder of older sister found
  var temp_older_age_found_yet = 0; //to store the older age found yet

  for (var i = 0; i <= array_berti_sisters.length - 1; i++) {
    if (array_berti_sisters[i].age > temp_older_age_found_yet) {
      //if current sister in loop is older than the temp_older_age_found_yet
      index_older_sister = i; //store index of older sister in our array
      temp_older_age_found_yet = array_berti_sisters[i].age; //store older age found yet
    }
  }
  return array_berti_sisters[index_older_sister];
}

let array_berti_sisters = [];
let luiza = new Family_member("luiza", 20, "1.65cm", "12/10/2002");
let carla = new Family_member("carla", 23, "1.75cm", "12/10/1999");
let maria = new Family_member("maria", 27, "1.67cm", "12/10/1995");
array_berti_sisters.push(luiza, carla, maria);

var older_berti_sister = getOlderBertiSister(array_berti_sisters);
console.log("Printing the older berti sister info: \n");
console.log(older_berti_sister);