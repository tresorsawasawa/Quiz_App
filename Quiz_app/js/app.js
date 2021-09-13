


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
}
// Set question number and question options
function getNewQuestion(){
    // Set question number 
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of "+ quiz.length;
    // Set  question options
    // Get Random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    
}

window.onload = function(){
    // First we will set all questions in setAvailableQuestions array
    setAvailableQuestions();
    // Second we will call getNewQuestion() function
    getNewQuestion();
}

// console.log(quiz[4])