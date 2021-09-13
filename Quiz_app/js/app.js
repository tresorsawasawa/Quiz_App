


const questionNumber = document.querySelector(".question-number"),
      questionText = document.querySelector(".question-text"),
      optionContainer = document.querySelector(".option-container");

let questionCounter = 0,
    currentQuestion,
    availableQuestions = [];

    // Push the question into availableQuestions array
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i < totalQuestion; i++){
        availableQuestions.push(quiz[i]);
    }
    console.log(availableQuestions)
}

window.onload = function(){
    setAvailableQuestions()
}

// console.log(quiz[4])