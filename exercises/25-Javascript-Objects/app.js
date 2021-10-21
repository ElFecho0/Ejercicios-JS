var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 33], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var person3 = {
  name: "Jimmy",
  lastname: "Doe",
  age: 13,
  gender: "male",
  lucky_numbers: [ 1,2,3,4],
  significant_other: null
};

var family = {
    lastname: "Doe",
    members: [person, person2, person3]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  //To-Do: loop and add; consider nested loops
  
  var familia= family.members
    for(let i =0; i<familia.length; i++){
        //console.log(familia[i].lucky_numbers)
        let lucky = familia[i].lucky_numbers;

        for (let j = 0; j < lucky.length; j++) {
          sumOfAllLuckyNumbers = lucky[j] + sumOfAllLuckyNumbers;
        }
    }
  

  /*
  for (let a = 0; a < familia.length; a++) {
    for (let a = 0; a < lucky_numbers.length; a++) {
      sumOfAllLuckyNumbers += familia[a].lucky_numbers[a];
    }
  }
  */
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 