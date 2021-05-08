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
      // console.log(this.phrase);
        let res = this.phrase.substring(i,i+1); 
        console.log(res);

        li.innerHTML = res;

        if (res === ' ') {
             li.classList.add('space');
        } else {
            li.classList.add('hide', 'letter', res);
        }

   }    
  
};
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(letter) {
    this.letter = letter; 
    //console.log(this.phrase.includes(letter));
   return this.phrase.includes(letter);
};

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
    if(this.checkLetter(letter)){
        let matchedLetters = document.querySelectorAll(`.${letter}`);

        for(let i = 0; i < matchedLetters.length; i++){
        matchedLetters[i].classList.remove('hide');
        matchedLetters[i].classList.add('show');
        }
     }
};

}



/*const phrase = new Phrase('New phrase');
phrase.addPhraseToDisplay();*/