let quiztimer = document.getElementById("timer")
let highscoreInitials =document.getElementById("highscore-initials")
let yourScore =document.getElementById("score")
let startpage =document.getElementById("startpage")
let quizElement = document.getElementById("quiz")

let score = 0;
let timer = 20;
let quizQuestion =document.getElementById("question")
let a =document.getElementById("a")
let b =document.getElementById("b")
let c =document.getElementById("c")
let d =document.getElementById("d")


class question {
    constructor(question, Answer1, Answer2, Answer3, Answer4, correct) {
        this.question = question;
        this.Answer1 = Answer1;
        this.Answer2 = Answer2;
        this.Answer3 = Answer3;
        this.Answer4 = Answer4;
        this.correct = correct;
    }
}
const question1 = new question("What do you use to set a variable?", "var === value", " var name = value", "var name == value", "name = value", 2);
const question2 = new question("How do you write an if else statement?", "if(value === 5){ console.log(True);}else{ console.log(false);}", "if value === 5, console.log(true) else, console.log(false)", "if (value === 5) console.log(true) else console.log(false)", "if (value === 5); console.log(true) else: console.log(false)", 1);

let currentQuestion = question1

function display(question){
    quizQuestion.innerHTML = question.question;
    a.innerHTML = question.Answer1;
    b.innerHTML = question.Answer2;
    c.innerHTML = question.Answer3;
    d.innerHTML = question.Answer4;
    return question.correct
}

function goScreen(){
    clearInterval(timerInterval);
    quizElement.style.display= "none";
    yourScore.innerHTML= score;
    gameover.style.display = "initial";
}
  
function checkAnswer(ans){
    if(currentQuestion == question2){
        if(display(currentQuestion) == ans){
            score += 10;
        }
        else{
            timer -= 10;
        }
        goScreen()

    }
    else{
        if(display(currentQuestion) == ans){
            score += 10;
        }
        else{
            timer -= 10
        }
        display(question2)
        currentQuestion = question2
    }
}



//timer
timerInterval = setInterval(function() {
    timer--;
    quiztimer.textContent = timer;

    if(timer === 0) {
      clearInterval(timerInterval);
      quizElement.style.display= "none";
      yourScore.innerHTML= score;
      gameover.style.display = "initial";
    }
  }, 1000);

function startQuiz(){
    startpage.style.display= "none";
    quizElement.style.display = "initial"
    display(question1);
}