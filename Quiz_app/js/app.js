


const questionNumber = document.querySelector(".question-number"),
      questionText = document.querySelector(".question-text"),
      optionContainer = document.querySelector(".option-container");

let questionCounter = 0,
    currentQuestion,
    availableQuestions = [],
    availableOptions = [];

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
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    // Get the index of "questionIndex" from the availableQuestions array
    const index1 = availableQuestions.indexOf(questionIndex);
    // Remove the questionIndex from the availableQuestions array
    availableQuestions.splice(index1, 1);

    // Set functions
    // get the length of options
    const optionLen = currentQuestion.options.length;
    for(let i = 0; i<optionLen; i++){
        availableOptions.push(i);
    }

    optionContainer.innerHTML = "";
    let animationDelay = 0.15;

    // create options in html
    for(let i=0; i<optionLen; i++){
        // Random question
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
            //  get the position of 'optionIndex' from the availableOptions 
        const index2 = availableOptions.indexOf(optionIndex);
            //  remove the 'optionIndex' from the availableOptions, so that the option does not repeat 
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    }

    questionCounter++;
}
// get the result of current attempt question
function getResult(element){
    const id = parseInt(element.id);
    // get answer by comparing the id of the clicked option
    if(id === currentQuestion.answer){
        // set the green color to the correct option
        element.classList.add("correct")
    }
    else{
        // set the green color to the correct option
        element.classList.add("wrong") 
        
        // if the answer is incorrect the show option by adding green color the correct
        const optionLen = optionContainer.children.length;
        for(let i=0; i<optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    unclickableOptions()
}
// make all options unclickable once th user select an option(RESTRICT THE USER TO CHANGE OPTION AGAIN)
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++){
        optionContainer.children[i].classList.add("already-answered")
    }
}

function next(){
    if(questionCounter === quiz.length){
        console.log("Quiz over");
    }
    else{
        getNewQuestion();
    }
}

window.onload = function(){
    // First we will set all questions in setAvailableQuestions array
    setAvailableQuestions();
    // Second we will call getNewQuestion() function
    getNewQuestion();
}
