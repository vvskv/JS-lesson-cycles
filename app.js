let age = null;
const gender = 'wOman';

// age = parseInt(age);
age = +age;

if (! isNaN(age)) {
    if(age > 18) {
        console.log("You are really old");
    } else if (age < 18){
        console.log('You are the child');
    } else if (age === 18){
        console.log('You are 18 years old. Congratulations!')
    } else {
        console.log('Write your age');
    }
} else {
    console.log('Write correct data');
}


if (gender.toLocaleLowerCase() === 'man') {
    console.log('On the left');
}
if (gender.toLocaleLowerCase() === 'woman') {
    console.log('On the right');
}
console.log("----------------");
const isAdmin = true;
const typeUserString = isAdmin ? 'Admin' : 'User';
console.log(`Welcome: ${typeUserString}`);
