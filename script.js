
const questions = [
    {
        question : "Who invented Java Programming ?",

        answers : [
        
                { text : "Guido van Rossum", correct : false},
                { text : "James Gosling", correct : true},
                { text : "Dennis Ritchie", correct : false},
                { text : "Bjarne Stroustrup", correct : false}
        ]
    },

    {
        question : "Which one of the following is not a Java feature ?",

        answers : [
            { text : "Object-oriented" ,correct: false },
            { text : "Use of pointers", correct : true},
            { text : "Portable", correct : false},
            { text : "Dynamic and Extensible", correct : false}
            
        ]
    },

    {
        question : "Which component is used to compile, debug and execute the java programs ?",

        answers : [
            { text : "JRE", correct : false},
            { text : "JIT", correct : false},
            { text : "JDK", correct : true},
            { text : "JVM", correct : false}
        ]
    },

    {
        question : "What is the extension of compiler java classes ?",

        answers : [
            { text : ".txt", correct : false},
            { text : ".js", correct : false},
            { text : ".class", correct : true},
            { text : ".java", correct : false}
        ]
    },

    {
        question :  "Which of the following is a superclass of every class in Java ?",

        answers : [
            { text : "String", correct : false},
            { text : "Abstract", correct : false},
            { text : "ArrayList", correct : false},
            { text : "Object", correct : true}
        ]
    },

    {
        question : " Which of these packages contains the exception Stack Overflow in Java ?",

        answers : [
            { text : "java.lang", correct : true},
            { text : "java.system", correct : false},
            { text : "java.io", correct : false},
            { text : "java.util", correct : false}
        ]
    },

    {
        question : "Which side provides system independent server side implementation ?",

        answers : [
            { text : "Server", correct : false},
            { text : "ServerReader", correct : false},
            { text : "Socket", correct : false},
            { text : "ServerSocket", correct : true}
        ]
    }
]

// add variables for all 3 elements that are question, answer and next button to get valeues

const questionElement = document.getElementById("question");

const answerButton = document.getElementById("answer-button");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState(); // to reset prev question and answers

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");// create button for each answer
        button.innerHTML = answer.text; // adds the text of each answer to button
        button.classList.add("btn"); // this button is connected to .btn class in html and the same style is applied to it 
        answerButton.appendChild(button); // display button inside the div answer-button
        
        if(answer.correct){ // if answer is correct from the list then the button we created , we will update its correct attribute value 
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    } )
}

function resetState(){
    nextButton.style.display = "none";

    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild); // remove all the previous answers otherwise previous ques's ans buttons will still be there.

    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // disable to select other answers when user choose one answer and display next button
    // if incorrect show the correct answer
    // for each button it will check dataset if its true then it will add class name correct
    // if incorrect then it will show correct answer
    // we cannotselect other option
    //next button is enabled

    // the below code is for the unchosen buttons if one of them is true and selected is false before 
    //then it will become green by adding class correct.
    //and choosing button is disabled and then next button is enabled
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

startQuiz();
