/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

getChossen(myFriends[chosen-1]);
function getChossen({title: n, age: a, available: av, skills:[,c]}){
    console.log(n);
    console.log(a);
    if (av){
        console.log(`Available`);
    }else {
        console.log(`Not Available`);
    }
    console.log(c);
}
