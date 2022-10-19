const sister_names = ["luiza", "maria", "carla", "gabriela"];
const sister_ages = [20, 25, 27, 23];

function getOlderSister() {
  var index_older_sister = 0; //inder of older sister found
  var temp_older_age_found_yet = 0; //to store the older age found yet
  for (var i = 0; i < sister_ages.length - 1; i++) {
    if (sister_ages[i] > temp_older_age_found_yet) {
      //if current sister in loop is older than the temp_older_age_found_yet
      index_older_sister = i; //store index of older sister in our array
      temp_older_age_found_yet = sister_ages[i]; //store older age found yet
    }
  }
  console.log("the older sister is " + sister_names[index_older_sister]);
}

getOlderSister();
