/*
// 1--9-3
console.group("message  one","message two","message three");

// 1--9-4
console.group("Group 1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two");
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message one");
console.log("Message two");

// 1--9-5
console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);

// 1--9-6
alert("Please skip this?")
close();
console.log("Iam In Console");
document.write("Iam In Page");

// challenge 17
let theTitle = "Elzero",
    theDescription = "Elzero Web School",
    theDate = "25/10";
let div = `<div class="class">
                <h3>${theTitle}</h3>
                <p>${theDescription}</p>
                <span>${theDate}</span>
            </div>`;
document.write(div.repeat(4));

// 10--17-1
let numberOne = 10,
    numberTwo = 20;
console.log(numberOne +""+ numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne +""+ numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String
console.log(numberOne+"\n"+numberTwo);

  Normal Concatenate
  20
  10

console.log(`${numberOne}
${numberTwo}`);

  Template Literals Way
  20
  10

// 10--17-2
/*
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
 */
/*
// 10--17-3
console.log("`i'm In\n\\\\\nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");
/*
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``


// 10--17-4
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_

// Challenge One #23
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(a,b,c);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(a,b,c);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
console.log(a,b,c);

   // 1
  [++a] pre increment  a = 11               11
  [+]   addition arithmetic Operation       +
  [+b]  unary plus operation                20
  [b++] post increment  b = 21
  [+]   plus argument                       +
  [+c]  unary plus operation                80
  [c++] post increment   c = 81
  [-]   subtraction arithmetic Operation    -
  [+a]  unary plus operation                11
  [a++] post increment a = 12
  a = 12, b=21, c=81
  arithmetic One                            = 100

  // 2
  [++a] pre increment  a = 13               13
  [+]   addition arithmetic Operation       +
  [-b]  unary negation operation            -21
  [+]   plus argument                       +
  [+c]  unary plus operation                81
  [c++] post increment   c = 82
  [-]   subtraction arithmetic Operation    -
  [-a]  unary negation operation            -13
  [a++] post increment a = 14
  [+]   plus argument                       +
  [+a]  unary plus operation                14

  a = 14, b=21, c=82
  arithmetic Two                            = 100

  // 3
  [--c] pre decrement  c = 81               81
  [+]   addition arithmetic Operation       +
  [+b]  unary plus operation                21
  [+]   plus argument                       +
  [--a] pre decrement a = 13                13
  [*]   multiplication arithmetic Operation *
  [+b]  unary plus operation                21
  [b++] post increment b = 22
  [-]   subtraction arithmetic Operation    -
  [+b]  unary plus operation                22
  [*]   multiplication arithmetic Operation *
  [a]                                       13
  [+]   plus argument                       +
  [--a] pre decrement a = 12                12
  [-]   subtraction arithmetic Operation    -
  [+true] unary plus operation true = 1     1
  a = 12, b=22, c=81
  arithmetic Three                            = 100


// Challenge Two #23
let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + +e++ + ++f + +g +e); // 173

// number challenge
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a,b,c,d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.floor(b) / Math.ceil(d))); // 67 => Number

// 23--26-1
console.log(100000); // 100000
console.log(1_00_000); // 100000
console.log(1e5); // 100000
console.log(10**5); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(5e4 + 5e4); // 100000
console.log(Math.sqrt(1e10)); // 100000
console.log(1_00 * 1_000); // 100000
console.log(1_0 * 1e4); // 100000

// 23--26-2
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Math.ceil(Math.log10(Number.MAX_SAFE_INTEGER))); // 16
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
let flt = 10.4;
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(Math.random()*4)); // 0 || 1 || 2 || 3 || 4


// challenge of string #30
let a = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); // Zero
// 8 H
console.log(a.charAt(a.length-4).toUpperCase().repeat(8)); // HHHHHHHH
// Return Array
console.log(a.split(" ",1)); // ["Elzero"]
// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0,6)} ${a.substr(a.length-6)}`); // Elzero School
// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase() + a.slice(1,a.length-1).toUpperCase() + a.charAt(a.length -1).toLowerCase()); // eLZERO WEB SCHOOl

// 27--30-1
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e.
console.log(userName.split("l",1).toString().toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.substring(1,0).toLowerCase().repeat(3)); // eee

// 27--30-2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().includes(letterZ.toLowerCase())); // True
console.log(word.toLowerCase().startsWith(letterE.toLowerCase())); // True
console.log(word.toLowerCase().endsWith(letterO.toLowerCase())); // True


// if condition challenge one
let a = 40;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}
a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") : console.log("Unknown");



// if and switch challenge one
let job = "worker";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}
console.log(salary);
switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
        break;
}
console.log(salary);
// if and switch challenge Two
let holidays = 0;
let money = 0;

switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);
}

let moneyTotal =
    holidays === 0
    ? money = 5000
    : holidays === 1 ||  holidays === 2
    ? money = 3000
    : holidays === 3
    ? money = 2000
    : holidays === 4
    ? money = 1000
    : money = 0  ;
console.log(`My Money is ${moneyTotal}`);




// Write Previous Condition With Ternary If Syntax
let st = "Elzero Web School";
// W Position May Change
if (st[st.indexOf("w")] === "w") {
    console.log("Good");
}
console.log(st[st.indexOf("w")]);

if (st !== "string") {
    console.log("Good");
}
if (st === "number") {
    console.log("Good");
}
if ("????" === "ElzeroElzero") {
    console.log("Good");
}


// Array challenge #47

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

// console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice( ++zero, counter).reverse()); // ["Elham", "Mazero"]

// console.log(my[--counter].slice(zero, counter) + my[++zero].slice(counter)); // "Elzero"

// console.log(my[my.length - 1].slice(- ++zero) + my[counter].slice(--zero,++zero)); // "rO"

// 40--47-1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 2
console.log(myFriends.slice(num-num,num)); // ["Ahmed", "Elham", "Osama"];
// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// 40--47-2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]
// 40--47-3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
// Write One Single Line Of Code
console.log(finalArr.concat(arrOne,arrTwo).reverse().sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
// 40--47-4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[words.length -1][0].slice(website.length).toUpperCase()); // ZERO
// 40--47-5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
// Write 3 Solutions
haystack.includes(needle) ? console.log("found") : console.log("not found");
haystack.indexOf(needle) !== -1 ? console.log("found") : console.log("not found");
haystack.lastIndexOf(needle) !== -1 ? console.log("found") : console.log("not found");
// 40--47-6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
// Your Code Here
console.log(allArrs.concat(arr1.pop(),arr2.pop(),arr2.pop()).sort().join("").toLowerCase()); // fxy


// Loop Challenge #56
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have X Admins</div>`);
for (let i = 0; i < myAdmins.length; i++){
    if (myAdmins[i] === "Stop"){
        myAdmins.length = i ;
    }
}
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr>`)
for (let j = 0; j < myAdmins.length; j++){
    document.write(`<div>
The Admin For Team ${j + 1} Is ${myAdmins[j]}
<h3>Team Members: </h3>`);
    let num = 0;
    for (let k = 0; k < myEmployees.length; k++){
        if (myAdmins[j][0] === myEmployees[k][0]){
            ++num
            document.write(`<p>- ${num} ${myEmployees[k]}</p>`);
        }
    }
    document.write(`<hr>`)
    document.write(`</div>`);
}


// 48--56-1
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += 10){
    if (i === exclude) continue;
    console.log(i)
}
// 48--56-2
let start = 10;
let end = 0;
let stop = 3;
for (let i = start; i > end; i--){
    if (i === stop){
        continue;
    }else {
        if (i < 10){
            console.log(+("0"+i))
        }else{
            console.log(i);
        }
    }
}

// 48--56-3
let start = 1;
let end = 6;
let breaker = 2;
for (let i = start; i <= end; i++){
    console.log(i);
    for (let k = start+1; k < end; k += breaker){
        console.log("--"+k);
    }
}

// 48--56-4
let index = 10;
let jump = 2;
let end = 0;
let i = index;
for (;;) {
    if (i <= end || i === jump)break;
    console.log(i);
    i -= jump;
}

// 48--56-8
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
for (let i = counter; i < friends.length; i++){
    if (friends[i][index] !== "A" && typeof friends[i] !== "number"){
        console.log(`${++counter} => ${friends[i]}`)
    }
}

let name,
    age,
    hire;
function theFunc(a, b, c){
    if(typeof a === "string"){
        name = a;
        if(typeof b === "number"){
            age = b;
            hire = c;
        }else{
            age = c;
            hire = b;
        }
    }else if(typeof a === "number"){
        age = a;
        if(typeof b === "string"){
            name = b;
            hire = c;
        }else{
            name = c;
            hire = b;
        }
    }else{
        hire = a;
        if(typeof b === "string"){
            name = b;
            age = c;
        }else{
            name = c;
            age = b;
        }
    }
    if (hire){
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`)
    }else console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);

}

// Needed Output
theFunc("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
theFunc(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
theFunc(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
theFunc(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


function showDetails(...concate) {
    let name, age, availability, sentance;

    for (i = 0; i < concate.length; i++) {
        typeof concate[i] === "string" ? (name = concate[i])
            : typeof concate[i] === "number" ? (age = concate[i])
                : typeof concate[i] === "boolean" ? (availability = concate[i]) : "Unknown";
        availability === true ? (sentance = "You Are Available For Hire")
            : (sentance = "You Are Not Available For Hire")
    }

    console.log(`Hello ${name}, Your Age Is ${age}, ${sentance}`)
}

showDetails("Osama", 38, true);
showDetails(38, false, "Osama");
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);

// nFormatter function copied from stack over flow to make the numbers make sense
function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
function calcSalary(no, ty = "s", tm="year", ...dt){
    let salary = {s:21.61, d:15.70,u:18.52,p:1},
        typeSlogan = {s:"£",d:"$",u:"€",p:"LE"},
        slogn,
        ysal,
        msal,
        wsal,
        dsal,
        hsal,
        minsal,
        secsal,
        name,
        image,
        factor;
    for (let i = 0; i < dt.length ; i++){
        dt[i].slice(0,4) === "http" ? image = dt[i] : image = "";name = dt[i];
    }
    factor = salary[ty];
    slogn = typeSlogan[ty];
    if (tm  === "year"){
        ysal = factor*no;
    }else if (tm === "month"){
        ysal = factor*no*12;
    }else if (tm === "week"){
        ysal = factor * no * 52;
    }else if (tm === "day"){
        ysal = factor*no*365;
    }else if (tm === "hour"){
        ysal = factor*no*365*24;
    }else if (tm === "minute"){
        ysal = factor*no*365*24*60;
    }else if (tm === "second"){
        ysal = factor*no*365*24*60*60;
    }else ysal = factor*no;
    msal = ysal/12;
    wsal = ysal/52;
    dsal = ysal/365;
    hsal = ysal/(365*24);
    minsal = ysal/(365*24*60);
    secsal = ysal/(365*24*60*60);
    console.log("Player Name : "+name,"\nSalary : "+nFormatter(no,0)+slogn+"  per "+tm,"\nبس الاول صلي علي النبي في قلبك \n Per Egyptian Pound :\n yearly : "+nFormatter(ysal,0)," \n MOnthly : "+nFormatter(msal,0)," \n weekly : "+nFormatter(wsal,1)," \n Daily : "+nFormatter(dsal,1)," \n Hourly : "+nFormatter(hsal,0)," \n minitly : "+nFormatter(minsal,1)," \n secondly : "+nFormatter(secsal,0));
}
calcSalary(510000,"s","week","Cristiano Ronaldo");
calcSalary(40_000_000,"u","year","Lionel Messi");


// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...names) {
//     // Parameter ?
//     return `String [${names.join("], [")}] => Done !`;
// };
let names = (...names) => `String [${names.join("], [")}] => Done !`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !


// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + +nums;
let calc = function (one, two, ...nums) {
 return  one + two + +nums;
}
console.log(calc(10, 20, 50)); // 80


// 66--70-1
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        return "Hello "+zName.split(" ",2)[0]+" "+zName.split(" ",2)[1][0].toUpperCase()+".";

        // Write Your Code Here
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        return ", Your Age Is "+parseInt(zAge);
        // Write Your Code Here
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        return ", You Live In "+zCountry.slice(0,2).toUpperCase();
        // Write Your Code Here
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
        return namePattern(zName) + ageWithMessage(zAge) + countryTwoLetters(zCountry);
        // Write Your Code Here
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


// 66--70-2
// function itsMe() {
//     return `Iam A Normal Function`;
// }
let itsMe = _ => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function
// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


// 66--70-3
Currying in Javascript with examples
// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//         };
//     };
// }
let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// 66--70-4
function specialMix(...data) {
    let tot = 0,
        isFound = false;
    for (let i in data) {
        if (!isNaN(parseInt(data[i]))) {
            tot += parseInt(data[i]);
            isFound = true
        }
    }
    if (isFound === true) return tot
    else return  "All Is Strings";
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


 */
/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain



let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter(function (a) {
    return isNaN(parseInt(a));
});

console.log(solution); // Elzero Web School

let user = {
    name: "Osama",
    age: 38,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
        ksa: "Riyadh",
        egypt: {
            one: "Cairo",
            two: "Giza",
        },
    },
    checkAv: function () {
        if(this.available === true) {
            return `Free For Work`;
        } else {
            return `Not Free`;
        }
    },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());

// 78--85-1
// Create Your Object Here
let member = {
    name: "Elzeo",
    age: 38,
    country: "Egypt",
    fullDetails: function (){return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`},
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// 78--85-2
// Method One
// Create Your Object Here
let objMethodOne = {property: "Method One"}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({property: "Method Two"})
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({property: "Method Three"})
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({},{property: "Method Four"})
console.log(objMethodFour.property); // "Method Four"

// 78--85-3
let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a: a},threeNums,twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6


// 78--85-4
// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};

// Code One => How To Get Object Length ?
let objectLength = "???????";

for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ???????`);
    console.log(`The Publisher Is ???????`);
    console.log(`The Price Is ???????`);

    // Check If Nested Object Has Property (bestThree)
    if (???????) {
        console.log("- Game Has Releases");
        console.log(`First => ???????`);
        console.log(`Second => ???????`);
        console.log(`Third => ???????`);
    }
    console.log("#".repeat(20));
}

// Ouput

"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"

 */
/*
for (let i = 1; i<+100 ;i++){
// make the main elements
    let myMainDiv =document.createElement("div");
    let myMainh3 =document.createElement("div");
    let myMainp =document.createElement("div");
    let breaking = document.createElement("hr")
// make the main text nodes
    let textDiv = document.createTextNode(`My Main ${i} Product`);
    let texth3 = document.createTextNode(`Product Name ${i}`);
    let textp = document.createTextNode(`Description Of Product ${i}: this is the project`);
    // set the class attribute and assign its value
    myMainDiv.setAttribute("class","product");
    myMainDiv.style="padding: 20px;\n" +
        "\twidth: 200px;\n" +
        "\tdisplay: flex;\n" +
        "\tflex-direction: column;\n" +
        "\talign-items: center;\n" +
        "\ttext-align: center;\n" +
        "\tborder-radius: .5rem;\n" +
        "\tborder-bottom: 2px solid var(--main-color);\n" +
        "\t/*box-shadow: 0 2px 7px rgb(14 55 54 / 20%);\n" +
        "\tbox-shadow: 0 10px 40px -14px rgba(0,0,0,0.25);\n" +
        "\ttransition: .5s;";
    myMainh3.style="font-size: 1rem;\n" +
        "\tfont-weight: 600;\n" +
        "\tmargin: 0.7rem 0 0.4rem;";
    myMainp.style="color: blue;\n" +
        "\tfont-size: 24px;\n" +
        "\tpadding-top: 2rem;";
// adding them to the view menu
    myMainDiv.appendChild(textDiv);
    myMainh3.appendChild(texth3);
    myMainp.appendChild(textp);
// adding them to the main div
    myMainDiv.appendChild(myMainh3);
    myMainDiv.appendChild(myMainp);
    document.body.appendChild(myMainDiv);
    // document.body.appendChild(breaking);
    document.body.style="display: grid;\n" +
        "\tgrid-template-columns: repeat(auto-fit,minmax(200px, auto));\n" +
        "\tjustify-content: center;\n" +
        "\tgap: 1rem;\n" +
        "\tmargin-top: 2rem;";
}
*/
/* get the element by various methods.
document.getElementById('elzero');
document.getElementsByTagName('div');
document.getElementsByClassName('element');
document.querySelector('#elzero');
document.querySelector('.element');
document.querySelector('div');
document.querySelector('[name="js"]');
document.querySelectorAll('#elzero');
document.querySelectorAll('.element');
document.querySelectorAll('div');
document.querySelectorAll('[name="js"]');
console.log(document.body.firstElementChild);
console.log(document.body.firstChild.nextSibling);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
*/
/*
// make auto alt and src update
let myImages = document.querySelectorAll('img');
console.log(myImages)
for (const myImagesKey of myImages) {
    myImagesKey.setAttribute('src','https://elzero.org/wp-content/themes/elzero/imgs/logo.png');
    myImagesKey.setAttribute('alt','Elzero Logo');
    myImagesKey.style="background-color: black;"
}
*/
/*
// change the currency equivalent values in dollar and pound
let myInput = document.querySelector('[name="dollar"]');
let myOut = document.querySelector('.result');
console.log(myInput);
console.log(myOut);
myInput.oninput = function (){
    if (isNaN(myInput.value)){
        myOut.textContent = ` {0} USD Dollar = {0} Egyptian Pound`
    }
    else {
        myOut.textContent = ` {${myInput.value} USD Dollar = {${(myInput.value*15.6).toFixed(2)} Egyptian Pound`
    }
}
*/

/*
// Swap the values of the title and content through two elements
let myOne = document.querySelector('.one');
let myTwo = document.querySelector('.two');
let myOneTitle = myOne.title;
let myOneContent = myOne.textContent;
myOne.title = myTwo.title;
myOne.textContent = myTwo.textContent;
myTwo.title = myOneTitle;
myTwo.textContent = myOneContent;
console.log(myOne);
console.log(myTwo);
 */

/*
// Check if the image has alt attribute so say old or not said the new
let myImages = document.querySelectorAll('img');
for (const myImage of myImages) {
    if (myImage.hasAttribute('alt')){
        myImage.setAttribute('alt','Old')
    }else {
        myImage.setAttribute('alt','Elzero New')
    }
}
console.log(myImages);
 */
/*
// Make a form to generate the elements that user need and show them to the user page

document.querySelector(
    '[name="create"]'
).onclick = function (){
    let result = document.querySelector('.results');
    let num = document.querySelector('[name="elements"]').value;
    let textContent = document.querySelector('[name="texts"]').value;
    let type = document.querySelector('[name="type"]').value.toLowerCase();
    console.log(result);
    console.log(num);
    console.log(textContent);
    console.log(type);
    result.textContent = "";
    if (num !== 0 && !isNaN(num) && textContent !== "" && type !== "" ){
        for (let i = 1; i<= num; i++){
            // make the main element
            let myMain =document.createElement(type);
            myMain.textContent = textContent;
            myMain.style.width = '200px';
            myMain.style.height = '20px';
            myMain.style.borderRadius = '5px';
            myMain.style.color = 'white';
            myMain.style.textAlign = 'center';
            myMain.style.padding = '5px';
            myMain.style.margin = '20px';
            myMain.style.backgroundColor = 'red';
            result.appendChild(myMain);
            console.log(result);
        }
    }
    result.style="display: grid;\n" +
        "\tgrid-template-columns: repeat(auto-fit,minmax(200px, auto));\n" +
        "\tjustify-content: center;\n" +
        "\tgap: 1rem;\n" +
        "\tmargin-top: 2rem;";
};
document.forms[0].onsubmit = function (e) {
    e.preventDefault();
}
 */
// let myFields = document.querySelectorAll('[type = "number"]');
/*
let myanser = prompt('Please enter the numbers range you want to print','Example: 5-20');
console.log(myanser);
let mynumbers = myanser.split('-',2);
mynumbers.reverse();
for (let i = +parseInt(mynumbers[0]) ; i<= parseInt(mynumbers[1]) ; i++){
    console.log(i)
}


 */
let mybutton = document.querySelector('.btn');
let myMain = document.querySelector('.main');

mybutton.onclick = function (){
    myMain.style.display = 'none';
}

let mycounter = document.querySelector('.counter');
setInterval(function (){
    if (mycounter.innerHTML === '0'){
        // alert('your counter finished');
        clearInterval(1);
    }else {
        mycounter.innerHTML -= 1;
    }
},1000);

let lisC = document.querySelectorAll('.colors li');
let lisF = document.querySelectorAll('.fonts li');
let lisS = document.querySelectorAll('.sizes li');


let showarea = document.querySelector('.show');
if (window.localStorage.getItem('color')){
    // if there is a color
    // 1) change div background color
    showarea.style.backgroundColor = window.localStorage.getItem('color');
    // 2) Remove active class from li
    lisC.forEach((li)=>{
        li.classList.remove('active')
    });
    // 3) Add active class to current color
    document.querySelector(`[data-color='${window.localStorage.getItem('color')}']`).classList.add('active');
}

lisC.forEach((li)=>{
    li.addEventListener('click',evt => {
        // Remove active class from li
        lisC.forEach((li)=>{
            li.classList.remove('active')
        });
        // add active class to li
        evt.currentTarget.classList.add('active');
        // add color to local storage
        window.localStorage.setItem('color',evt.currentTarget.dataset.color);
        // change div background color
        showarea.style.backgroundColor = window.localStorage.getItem('color');
    })
})
if (window.localStorage.getItem('font')){
    // if there is a color
    // 1) change div background color
    showarea.style.fontFamily = window.localStorage.getItem('font');
    // 2) Remove active class from li
    lisF.forEach((li)=>{
        li.classList.remove('active')
    });
    // 3) Add active class to current color
    document.querySelector(`[data-font='${window.localStorage.getItem('font')}']`).classList.add('active');
}
lisF.forEach((li)=>{
    li.addEventListener('click',evt => {
        // Remove active class from li
        lisF.forEach((li)=>{
            li.classList.remove('active')
        });
        // add active class to li
        evt.currentTarget.classList.add('active');
        // add color to local storage
        window.localStorage.setItem('font',evt.currentTarget.dataset.font);
        // change div background color
        showarea.style.fontFamily = window.localStorage.getItem('font');
    })
})
if (window.localStorage.getItem('size')){
    // if there is a color
    // 1) change div background color
    showarea.style.fontSize = window.localStorage.getItem('size');
    // 2) Remove active class from li
    lisS.forEach((li)=>{
        li.classList.remove('active')
    });
    // 3) Add active class to current color
    document.querySelector(`[data-size='${window.localStorage.getItem('size')}']`).classList.add('active');
}

lisS.forEach((li)=>{
    li.addEventListener('click',evt => {
        // Remove active class from li
        lisS.forEach((li)=>{
            li.classList.remove('active')
        });
        // add active class to li
        evt.currentTarget.classList.add('active');
        // add color to local storage
        window.localStorage.setItem('size',evt.currentTarget.dataset.size);
        // change div background color
        showarea.style.fontSize =window.localStorage.getItem('size')+`px`;
    })
})
