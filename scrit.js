const words = ['non', 'banana', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

const wordsWithN = words.filter(word => word.includes('n'));
const wordsWithoutN = words.filter(word => !word.includes('n'));

console.log(wordsWithN, "'n' harfi ishtirok etgan so'zlar");
console.log(wordsWithoutN, "'n' harfi ishtirok etmagan so'zlar");
