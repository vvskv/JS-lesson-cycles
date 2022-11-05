let age = null;
const gender = "wOman";

// age = parseInt(age);
age = +age;

if (!isNaN(age)) {
  if (age > 18) {
    console.log("You are really old");
  } else if (age < 18) {
    console.log("You are the child");
  } else if (age === 18) {
    console.log("You are 18 years old. Congratulations!");
  } else {
    console.log("Write your age");
  }
} else {
  console.log("Write correct data");
}

if (gender.toLocaleLowerCase() === "man") {
  console.log("On the left");
}
if (gender.toLocaleLowerCase() === "woman") {
  console.log("On the right");
}
console.log("----------------");
const isAdmin = true;
const typeUserString = isAdmin ? "Admin" : "User";
console.log(`Welcome: ${typeUserString}`);
console.log("----------------");
const typeUSer = "admin"; //user, guest, bot
switch (typeUSer) {
    case "admin":
        console.log("You are the admin");
        break;
    case "user": 
        console.log("You are the user");
        break;
    case "guest":
        console.log("You are the guest");
        break;
    case "bot":
        console.log("you are the bot");
        break;
    default:
        break;
}
console.log("--------------");
let i = 0;
const lastElement = 10;
let message = "";
while (i < lastElement) {
    i++;
    message += `${i}${i!=lastElement ? "," : ""}`;
}
console.log(message);
console.log("---------------");
let message2 = "";
for(let i=0; i<10; i++) {
    if(i%2 == 0) {
        message2+= "," + i;
    }
}
console.log(message2);