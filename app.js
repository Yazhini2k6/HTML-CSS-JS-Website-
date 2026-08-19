alert("Welcome to FashionVerse 2026! Luxury Fashion & Cosmetics Event");

console.log("Hlo!");
console.warn("itz a warning!");
console.error("itz an error!");
console.info("i am info's msg!");

var brand = "FashionVerse";
let year = 2026;
const theme = "Luxury";
console.log("Brand:", brand);
console.log("Year:", year);
console.log("Theme:", theme);

function scopeDemo() {
  if (true) {
    var x = "I am var inside if";
    let y = "I am let inside if";
    const z = "I am const inside if";
    console.log("Inside block:", x, y, z);
  }
  console.log("Outside block (var):", x);
}
scopeDemo();

console.log("Hoisting with var:", hoistVar);
var hoistVar = "Now I am defined";

try { console.log("Hoisting with let:", hoistLet); }
catch (err) { console.error(err.message); }
let hoistLet = "Defined later with let";

try { console.log("Hoisting with const:", hoistConst); }
catch (err) { console.error(err.message); }
const hoistConst = "Defined later with const";

let str = "Hello, I am a String";
let num = 42;
let bigIntVal = 123456789012345678901234567890n;
let boolVal = true;
let undefVal;
let nullVal = null;
let symVal = Symbol("unique");
console.log("String:", str);
console.log("Number:", num);
console.log("BigInt:", bigIntVal);
console.log("Boolean:", boolVal);
console.log("Undefined:", undefVal);
console.log("Null:", nullVal);
console.log("Symbol:", symVal);

let person1 = { name: "Pola" };
let person2 = person1;
person2.name = "Hasini";
console.log("Person1:", person1.name);
console.log("Person2:", person2.name);

let obj = { name: "Gunayazhini", age: 21 };
let arr = [10, 20, 30];
function greet() { return "Hello from FashionVerse function"; }
let date = new Date();
let regex = /abc/;
let map = new Map([["key1", "value1"]]);
let set = new Set([1, 2, 3]);
console.log("Object:", obj);
console.log("Array:", arr);
console.log("Function:", greet());
console.log("Date:", date);
console.log("RegExp:", regex.test("abcdef"));
console.log("Map:", map.get("key1"));
console.log("Set:", [...set]);

console.log("Arithmetic:", 5 + 2, 5 - 2, 5 * 2, 5 / 2, 5 % 2, 5 ** 2);
let x = 10;
x += 5; x -= 3;
console.log("Assignment:", x);
console.log("Comparison:", 5 == "5", 5 === "5", 5 != "5", 5 !== "5", 5 > 2, 5 < 2);
console.log("Logical:", true && false, true || false, !true);
console.log("Bitwise:", 5 & 1, 5 | 1, 5 ^ 1, ~5, 5 << 1, 5 >> 1, 5 >>> 1);

let age = 17;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Ternary:", canVote); 

let ageField = document.querySelector("input[type='number']");
if (ageField) {
  ageField.addEventListener("blur", () => {
    if (ageField.value >= 18) {
      console.log("Eligible to register");
    } else {
      console.log("Not eligible to register");
    }
  });
}
 
let heading = document.querySelector("h1");
if (heading) {
  console.log("Heading starts with 'FashionVerse':", heading.textContent.trim().startsWith("FashionVerse"));
  console.log("Heading ends with '2026':", heading.textContent.trim().endsWith("2026"));
  console.log("Replaced preview (not applied to page):", heading.textContent.replace("FashionVerse", "FV"));
}

let f = 1;
while (f <= 5) { console.log("Loop:", f); f++; }

let nums = [1, 2, 3, 4, 5];
console.log("Filter:", nums.filter(num => num % 2 == 0));
console.log("Find:", nums.find(num => num > 3));
console.log("Map:", nums.map(num => num * 2));
nums.forEach(num => console.log("ForEach:", num));

let arrOps = [1, 2, 3, 4, 5];
arrOps.push(6); console.log("Push:", arrOps);
let letters = ['a', 'b', 'c', 'd'];
letters.pop(); console.log("Pop:", letters);
let array = [5, 6, 7, 8, 9];
array.shift(); console.log("Shift:", array);
let alphabets = ['x', 'y', 'z'];
alphabets.unshift('w'); console.log("Unshift:", alphabets);
let numbers = [10, 20, 30, 40, 50];
numbers.splice(1, 3); console.log("Splice:", numbers);
let fruits = ['apple', 'banana', 'cherry', 'mango'];
console.log("Slice:", fruits.slice(1, 3));
console.log("Original fruits:", fruits);

const emailField = document.querySelector("input[type='email']");
console.log("Email field:", emailField);
const passwordField = document.querySelector("input[type='password']");
console.log("Password field:", passwordField);
const allInputs = document.querySelectorAll("input");
console.log("All inputs:", allInputs);

const demoPara = document.getElementById("demo");
if (demoPara) {
  console.log("innerHTML:", demoPara.innerHTML);
  console.log("textContent:", demoPara.textContent);
  console.log("innerText:", demoPara.innerText);
  demoPara.innerHTML = "<b>Changed with innerHTML</b>";
  demoPara.textContent = "Changed with textContent";
  demoPara.innerText = "Changed with innerText";
}

let sessions = [
  {time:"09:30 AM", session:"Registration & Welcome", speaker:"Event Team", venue:"Main Hall"},
  {time:"10:30 AM", session:"Latest Makeup Trends", speaker:"Priya Sharma", venue:"Hall A"},
  {time:"11:45 AM", session:"Skincare Essentials", speaker:"Ananya Kapoor", venue:"Hall B"},
  {time:"02:00 PM", session:"Fashion Styling Workshop", speaker:"Meera Nair", venue:"Hall C"},
  {time:"03:30 PM", session:"Beauty Influencer Session", speaker:"Riya Verma", venue:"Hall A"},
  {time:"04:30 PM", session:"Lucky Draw & Closing Ceremony", speaker:"Event Team", venue:"Main Hall"}
];
let scheduleTable = document.querySelector("table");
if (scheduleTable && scheduleTable.rows.length === 0) {
  sessions.forEach(s => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${s.time}</td><td>${s.session}</td><td>${s.speaker}</td><td>${s.venue}</td>`;
    scheduleTable.appendChild(row);
  });
}

console.log("Typeof:", typeof str, typeof num, typeof obj);
console.log("Instanceof:", arr instanceof Array, date instanceof Date);