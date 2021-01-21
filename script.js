const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText MarkUp Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "HyperPerson Transfer To Prison",
        b: "HyperTest Tension Person",
        c: "Hey Transfer Protocol",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of JS?",
        a: "Joke Sheets",
        b: "Just Sleep",
        c: "JavaScript",
        d: "JointScript",
        ans: "ans3"
    },
    {
        question: "Q2: What is the full form of FTP?",
        a: "File Transfer Protocol",
        b: "Forward Transfer Pages",
        c: "Fast Texting Pages",
        d: "Fast Transfer Protocol",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let count = 0; //question count
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[count];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
         if(curAnsElem.checked) {
            answer = curAnsElem.id;
         }         
    });
    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer === quizDB[count].ans){
        score++;
    };

    count++;

    deselectAll();

    if(count < quizDB.length) {
        loadQuestion();
    }else {
        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }


});
