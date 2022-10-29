let wholeApp = document.querySelector('.wholeThing');
let form = document.querySelector('form')
let sub = document.querySelector('.enter');
let reset = document.querySelector('.hide');
let toptxt = document.querySelector('.name');
let attempts = document.getElementsByClassName('noInput');
const answer = Math.ceil(Math.random() * 100);
let attempt = 0;

console.log(answer);

// first function is to produce the hint for the player
hintButton.addEventListener('click', (ev) => {
    ev.preventDefault();
      let randNum = Math.ceil(Math.random() * 100);
      let randNumTwo = Math.ceil(Math.random() * 100);
      let oneToThree = Math.floor(Math.random() * 3);
      let arrRand = [];

    if(oneToThree === 0){
        arrRand = [answer, randNumTwo, randNum]; 
    } else if(oneToThree === 1){
        arrRand = [randNum, answer, randNumTwo];
    } else {
        arrRand = [randNumTwo, randNum, answer];
    }
    hints.innerText = `The answer is either ${arrRand[0]}, ${arrRand[1]}, or ${arrRand[2]}!`;
      hintButton.classList.toggle('hide');
  });  
  
// used a page refresh to restart game.
function refreshPage() {
    window.location.reload();
  };

// Main function for this game.
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
// Turn the value of txtBox into a number and use 0 to indicate invalid guesses.
  let turnToNumber = ~~txtBox.value;

  if (turnToNumber === 0 || turnToNumber > 100){
      hints.innerText = `Let's try something between 1 and 100 next time!`;
        txtBox.value = '';
          return attempt;
// when guess is correct   
  } else if(turnToNumber === answer){
      hints.innerText = `Congrats, you got it correct! the number was ${answer}.`;
      reset.classList.toggle('enter');
      reset.classList.toggle('hide');
      sub.classList.toggle('hide');
      sub.classList.toggle('enter');
      txtBox.classList.toggle('disable');
      txtBox.classList.toggle('animate');
      hintButton.classList.toggle('hidden');  
      wholeApp.style.backgroundColor = 'green';
      toptxt.style.color = 'black';
      txtBox.style.backgroundColor = 'yellow';
      txtBox.style.color = 'Black';
      txtBox.style.borderColor = '#3CB371'
      txtBox.blur();
      hints.style.color = 'Black';
      return attempt; 
  } else {
// If guess is wrong, also incramite attempt by one to keep track of failed attempts.
      attempts[0].classList.toggle('attempted');
      attempts[0].classList.toggle('noInput');
      let newAttempt = document.getElementsByClassName('attempted');
      newAttempt[attempt].innerText = `${txtBox.value}`;
      attempt++;
      txtBox.value = '';
      let diff = answer - turnToNumber;
      hotOrCold(diff)
        }

        let attCheck = document.getElementsByClassName('attempted');
// Player is out of attempts, game over.
        if(attCheck.length === 5){
          hints.innerText = `Better luck next time, the correct anwer was ${answer}.`;
          reset.classList.toggle('enter');
          reset.classList.toggle('hide');
          sub.classList.toggle('hide');
          sub.classList.toggle('enter');
          txtBox.classList.toggle('disable');
          txtBox.classList.toggle('animate');
          hintButton.classList.toggle('hidden');
          wholeApp.style.backgroundColor = 'Grey';
          txtBox.style.backgroundColor = 'white';
          txtBox.style.borderColor = 'Black';
          toptxt.style.color = 'Ivory';
          hints.style.color = 'Ivory';
          txtBox.blur();
          txtBox.value = `):`;
          return attempt;
        };
    });

    // Find if player needs to go higher or lower
  const hotOrCold = (diff) => {
        if(diff <= -1) {  
          if(diff > -10){
            hints.innerText = `You're right there! just a little lower!`;  
            wholeApp.style.backgroundColor = '#FFD700';
            toptxt.style.color = '#5F9EA0';
            hints.style.color = '#5F9EA0';
            sub.style.backgroundColor = '#5F9EA0';
            sub.style.color = 'Cornsilk';
            txtBox.style.backgroundColor = '#2E8B57';
            txtBox.style.borderColor = '#5F9EA0';
            
           } else if(diff >= -20){
               hints.innerText = `Lukewarm! go lower.`
               wholeApp.style.backgroundColor = 'DodgerBlue';
               toptxt.style.color = 'Black';
               hints.style.color = 'Black';
               sub.style.backgroundColor = 'DarkBlue';
               sub.style.color = '#3CB371';
               txtBox.style.borderColor = 'DarkBlue';
               txtBox.style.backgroundColor = '#AFEEEE';
               txtBox.style.color = 'Black'
          } else {
              hints.innerText = `Ice cold! try going lower.`;
              wholeApp.style.backgroundColor = 'Indigo';
              toptxt.style.color = 'AntiqueWhite';
              hints.style.color = 'AntiqueWhite';
              sub.style.backgroundColor = 'DarkBlue';
              sub.style.color = 'DeepSkyBlue';
              txtBox.style.borderColor = '#C71585';
              txtBox.style.backgroundColor = '#7B68EE';
            };

          } else if(diff >= 1) {
              if(diff < 10){
                hints.innerText = `You're right there! just a little higher!`;
                wholeApp.style.backgroundColor = '#FFD700';
                toptxt.style.color = '#5F9EA0';
                hints.style.color = '#5F9EA0';
                sub.style.backgroundColor = '#5F9EA0';
                sub.style.color = 'Cornsilk';
                txtBox.style.backgroundColor = '#2E8B57';
                txtBox.style.borderColor = '#5F9EA0';
            } else if(diff <= 20){
                hints.innerText = `Lukewarm! go higher.`;
                wholeApp.style.backgroundColor = 'DodgerBlue';
                toptxt.style.color = 'Black';
                hints.style.color = 'Black';
                sub.style.backgroundColor = 'DarkBlue';
                sub.style.color = '	#3CB371';
                txtBox.style.borderColor = 'DarkBlue';
                txtBox.style.backgroundColor = '#AFEEEE';
                txtBox.style.color = 'Black'
            } else if (diff < 101){
                hints.innerText = 'Ice cold! try going higher.';
                wholeApp.style.backgroundColor = 'Indigo';
                toptxt.style.color = 'AntiqueWhite';
                hints.style.color = 'AntiqueWhite';
                sub.style.backgroundColor = 'DarkBlue';
                sub.style.color = 'DeepSkyBlue';
                txtBox.style.borderColor = '#C71585';
                txtBox.style.backgroundColor = '#7B68EE';
              };
            }
          };      
   

