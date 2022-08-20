import fruits from './foods';
import {choice, remove} from './helpers';

const selection = choice(fruits)
console.log(`I'd like one ${selection}, please.`);
console.log(`Here you go: ${selection}`);
console.log("Delicious!  May I have another?");

remove(fruits, selection);

console.log(`I'm sorry, we're all out of ${selection}.  We have ${fruits.length()} other fruits left.`)
