// Sample questions with answers categorized by difficulty
const questions = {
    easy: [
        {   question: "Solve for x: 2x + 5 = 11 (No Spaces in your answer)",
            answer: "3",
            explanation: "because:<br> 2x + 5 = 11 <br> 2x + 5 - 5 = 11 - 5 <br> 2x = 6 <br> 2x/2 = 6/2 <br> x = 3."
        },
 
 
        { question: "Factor x^2 - 9 (No Spaces in your answer) ",
            answer: "(x+3)(x-3)",
            explanation: "because <br> of the rule: (a^2 - b^2) = <br> (a+b)(a-b) <br> the square root of x^2 = x <br> the square root of 9 = 3 <br> therefore, our answer is: (x+3)(x-3)!"
          },
 
 
        { question: "Solve the system of equations by substitution: y = x + 2, y = 2x - 1 (No Spaces in your answer)",
            answer: "(3,5)",
            explanation:"because <br> y = x + 2 <br> y = 2x - 1 <br> x + 2 = 2x - 1 <br> x - x + 2 = 2x - x - 1 <br> 2 = x - 1 <br> 2 + 1 = x - 1 + 1 <br> x = 3 <br> plug in x into y = x + 2 or y = 2x - 1 <br> y = 3 + 2 <br> y = 5 <br> Our point is (x,y) therefore, our answer is (3,5)",
         },
 
 
    ],
    medium: [
        { question: "Analyze the end behavior of a polynomial function: f(x) = -x^3 + 2x^2 - 5x + 1 as x approaches positive infinity (Type your choice below) <br> (1) y --> -∞ <br> (2) y --> 0 <br> (3) y --> ∞ <br> (4) y --> -1 ",
            answer: "1",
            explanation: "The highest degree of our polynomial is odd so the end behaviors don't point the same way <br> (You may graph it) our leading coeffcient is negative <br> so as x apporaches positive infinity (x --> ∞) <br> y apporaches negative inifinity (y --> -∞). ",
        },
 
 
        { question: "Analyze the end behavior of a polynomial function: f(x) = -x^3 + 2x^2 - 5x + 1 as x approaches negative infinity (Type your choice below) <br> (1) y --> -∞ <br> (2) y --> 0 <br> (3) y --> ∞ <br> (4) y --> -1 ",
            answer: "3",
            explanation: "The highest degree of our polynomial is odd so the end behaviors don't point the same way <br> (You may graph it) our leading coeffcient is negative <br> so as x apporaches negative infinity (x --> ∞) <br> y apporaches positive inifinity (y --> ∞). ",
        },

        {question: "What is the vertex of the parabola y = (x-1)^2 - 9? <br> A) (-1,-9) <br> B) (1,-9) <br> C) (-9,-1)  <br> D) (-9,1)",
            answer: "B",
        },
    ],


    hard: [
        { question: "Find the correct relation for specail right traingle 30 60 90: <br> (1) 30 is x, 60 is x√3, 90 is 2x <br> (2) 30 is x√3, 60 is x, 90 is 3x <br> (3) 30 is 2x, 60 is x√3, 90 is x <br> (4) 30 is 1, 60 is x√3, 90 is 2x ", 
            answer: "1",
            explanation: "Memorizing the specail right triangle would be useful as it allows you to quickly calculate missing side lengths in geometric problems without needing to use the Pythagorean theorem every time.",
         },

        { question: "Find the correct relation for specail right traingle 45 45 90: <br> (1) 45 is x, 45 is 2x, 90 is 2x <br> (2) 45 is x, 45 is x, 90 is x√2 <br> (3) 45 is 2x, 45 is x√3, 90 is 2x√2 <br> (4) 45 is x, 45 is x√3, 90 is x√2 ",  
            answer: "2",
            explanation: "Memorizing the specail right triangle would be useful as it allows you to quickly calculate missing side lengths in geometric problems without needing to use the Pythagorean theorem every time. <br> If the degrees are the same the corresponding length should also be the same. 45 degrees should always correspond to x length.",
         },
    ],

    quiz: [
        {question: "If f(x) = 3x^2 -2 and g(x) = -4x + 2, what is the value of (f+g)(-1)? <br> A) -7 <br> B) -1 <br> C) 1 <br> D) 7",
            answer: "B",
            explanation: "",
        },

        {question: "What is the inverse of f(x) = x + 1? <br> A) - x - 1 <br> B) x - 1 <br> C) -1 / 1 - x  <br> D) 1 / 1 + x",
            answer: "B",
            explanation: "",
        },

  
        {question: "Profits, P, are equal to sales, S, minus expenses, E. If expenses are equal to travel, T, plus materials, M, which system of equations models this situation? <br> A) P = S - E, E = T + M  <br> B) P = S + E, E = T + M <br> C) P = S - E, E = T - M  <br> D) P = S + E, E = T - M",
            answer: "A",
            explanation: "",
        },


        {question: "Meredith invests $50,000 in her new business. It costs the company $10 to produce each unit, which is sold for $15. Let C represent the cost and R represent the revenue for x units. Which statement is true about the graphs of the equations C = 50,000 + 10x and R = 15x? <br> A) Both slopes are positive <br> B) Both slopes are negative <br> C) One slope is positive, and the other is zero   <br> D) One slope is negative, and the other is positive",
            answer: "A",
            explanation: "",
        },


        {question: "What is the vertex of the parabola y = (x-1)^2 - 9? <br> A) (-1,-9) <br> B) (1,-9) <br> C) (-9,-1)  <br> D) (-9,1)",
            answer: "B",
            explanation: "",
        },

    ]
 };
 

let currentQuestion;
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    // document.getElementById('quiz-container').style.display = 'block';
    // document.getElementById('start-quiz').style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById('feedback').innerHTML = ''; // Clear feedback
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById('next-button').style.display = 'none'; // Hide next button
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h2>Quiz Over! Your score: ${score}/${questions.length}</h2>`;
    resultElement.style.display = 'block';
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback');

    if (selectedOption === question.answer) {
        score++;
        feedbackElement.innerHTML = `Correct! ${question.explanation}`;
    } else {
        feedbackElement.innerHTML = `Incorrect. The correct answer is: ${question.answer}. ${question.explanation}`;
    }

    document.getElementById('next-button').style.display = 'block';
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear options after answering
}

// Function to get a random question based on difficulty
function getQuestion() {
    const difficulty = document.getElementById('difficulty').value;
    const questionList = questions[difficulty];
    const questionElement = document.getElementById('question');
    const answerSection = document.getElementById('answer-section');
    const feedbackElement = document.getElementById('feedback');

    if (questionList && questionList.length > 0) {
        const randomIndex = Math.floor(Math.random() * questionList.length);
        currentQuestion = questionList[randomIndex];
        questionElement.innerHTML = currentQuestion.question;
        answerSection.style.display = 'block';  // Show answer section
        feedbackElement.textContent = '';      // Clear previous feedback
    } else {
        questionElement.textContent = "No questions available.";
    }
}

// Function to check the user's answer
function checkAnswer(){
    const userAnswer = document.getElementById('user-answer').value.trim();
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        feedbackElement.innerHTML = `<div>Correct!</div><div>${currentQuestion.explanation}</div>`;
        questions.splice(index, 1); // Remove question at the specified index
    } 
    else {
        feedbackElement.innerHTML = `Incorrect. The correct answer is: ${currentQuestion.answer}.<br>${currentQuestion.explanation}`; 
    }
    
}

// Add event listener to buttons
document.getElementById('get-question').addEventListener('click', getQuestion);
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
