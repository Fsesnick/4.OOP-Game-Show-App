/* FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js -  create a Phrase class to handle the creation of phrases*/

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }
    
/**
 * Display phrase on game board
 */
addPhraseToDisplay(){

   const ul = document.querySelector('#phrase ul'); // Select ul element

   for(let i=0; i<this.phrase.length; i++){
       const li = document.createElement('li'); // create a li elemnt for each letter
       ul.appendChild(li);
       
        let res = phrase.phrase.substring(i,i+1); 
        console.log(res);

        li.innerHTML = res;

        if (res === ' ') {
             li.classList.add('space');
        } else {
            li.classList.add('hide', 'letter', res);
        }

   }    
  
};

}
const phrase = new Phrase('New phrase');
phrase.addPhraseToDisplay();