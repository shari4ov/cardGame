let cardNum = document.getElementById('cardNum');
let sumCard = document.getElementById('sumCard');
let messageEl = document.getElementById('messageEl');
let userName = document.getElementById('userName');
let cards=[];
let sum=0;
let message= '';
let isAlive =false;
let blackJack = false;
let user = prompt("Enter your name: ");


userName.textContent=user;
function resetGame(){
       cards=[];
       sum=0;
}

function getRandomCard(){
       let randomNum = Math.floor(Math.random()*13)+1;
       if(randomNum>10) return 10;
       else if (randomNum===1) return 11;
       else return randomNum;
};


function startGame(){
       isAlive=true;
       let firstCard = getRandomCard();
       let secondCard = getRandomCard();
       cards.push(firstCard,secondCard);
       sum = cards[0] + cards[1];
       renderCard();
      

}
function renderCard() {
       cardNum.textContent='';
       for(let i =0;i<cards.length;i++){
              cardNum.textContent+=cards[i] +" ";
       }
       sumCard.textContent=''+sum;
       if(sum<=20) { 
              message= "Do you want to draw a new card?";
       }
       else if(sum===21){
              message = "You've got Blackjack!";
              blackJack =true;
              console.log("WIN");
              resetGame();    
       }
       else {
              message = "You're out of the game!";
              isAlive=false;
              resetGame();
       }
       messageEl.textContent=message;
};
function newCard(){
       if(isAlive && !blackJack){
              let newNum = getRandomCard();
              sum+=newNum;
              cards.push(newNum);
              renderCard();
       }
};
