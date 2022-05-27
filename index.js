// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent="❤❤chandan pandit";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent=20;
// document.querySelector(".score").textContent=10;

// document.querySelector(".guess").value=23;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random()*20+1);
console.log(secretNumber);
var score=20,highscore=0;
document.querySelector(".check").addEventListener('click',function(){
    const guess =Number(document.querySelector(".guess").value);
    
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector(".message").textContent=" No number 😊❤❤"
    }else if(guess===secretNumber){
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector(".message").textContent="🎉🌹💋💋💋🎉🎉🎉🌹🌹 correct number mere jan";
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector('body').style.backgroundColor="orange";
        document.querySelector('.number').style.width="30rem";
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }else if(score>0){
        if(guess> secretNumber){
            score--;
            document.querySelector('.score').textContent=score;
            document.querySelector(".message").textContent="Number is too high";
        }else if(guess < secretNumber){
            score--;
            document.querySelector('.score').textContent=score;
            document.querySelector(".message").textContent="Number is too low";
        }
    }else {
        score=0;
        document.querySelector('.message').textContent="😊😊😊 You lost the game";
        document.querySelector('.score').textContent=score;
    }
});

document.querySelector('.again').addEventListener('click',function(){
    
    score=20;
    var num= Number(Math.trunc(Math.random()*20+1));
    secretNumber=num;
    document.querySelector(".score").textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor="black";
})