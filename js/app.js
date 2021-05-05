/* FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//const phrase = new Phrase();
const game = new Game();

/** 
 * Listens for click on `btn__reset` and calls startGame() on game object
 */
 document.getElementById('btn__reset').addEventListener('click', function(){
    console.log('HERE');
});
/** 
 * Listens for click on qwerty buttons 
 */
document.getElementById('qwerty').addEventListener('click', function(){
    console.log('HERE');
});

const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`);
