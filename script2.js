const QuizData = [
  {
    question: "Q1. What does HTML stand for?",
    a: "Hyperlinks and Text Markup Language",
    b: "Hyper Text Markup Language",
    c: "Home Tool Markup Language",
    d: "Hey Text Markup Language",
    ans: "ans2"
  },
  {
    question: "Q2. How can you open a link in a new browser window?",
    a: "Blank",
    b: "Targete",
    c: "Same",
    d: "Open",
    ans: "ans4"
  },
  {
    question: "Q3. What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sleep",
    c: "cartoon Style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1"
  },
  {
    question: "Q4. HTML was first proposed in ___?",
    a: "1980",
    b: "1990",
    c: "1995",
    d: "1996",
    ans: "ans2"
  },
  {
    question: "Q5. What is the correct JavaScript syntax to write “Hello World”?",
    a: "System.out.println(“Hello World”)",
    b: "println (“Hello World”)",
    c: "document.write(“Hello World”)",
    d: "response.write(“Hello World”)",
    ans: "ans3"
  },
];

const answers = document.querySelectorAll(".answer");
const question = document.querySelector(".question");
const opt1 = document.querySelector("#opt1");
const opt2 = document.querySelector("#opt2");
const opt3 = document.querySelector("#opt3");
const opt4 = document.querySelector("#opt4");
const submit = document.querySelector("#submit");

let count = 0;
let scores = 0;
const loadQuestion = () => {
  const questList = QuizData[count];
  question.innerText = questList.question;
  opt1.innerText = questList.a;
  opt2.innerText = questList.b;
  opt3.innerText = questList.c;
  opt4.innerText = questList.d;
}

loadQuestion();

const getAnsCheck = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselecAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
  const checkedAnswer = getAnsCheck();
  if (checkedAnswer == QuizData[count].ans) {
    scores++;
  };
  count++;
  deselecAll();

  if (count < QuizData.length) {
    loadQuestion();
  }
    else {   
    quiz.innerHTML = ` 
    <img src="goodjob.gif">
      <h1>You Scored ${scores}/${QuizData.length}</h1>
        <button class = "btn" onclick = "location.reload()">Reload Quiz</button>
      
      `;   
  
   }
});
  