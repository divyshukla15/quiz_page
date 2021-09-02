const quizDB=[
    {
        question:"Q1. What is the full-form of OOP?",
        a: "Object-Oriented Programming ",
        b:"Objective-Organising Programming",
        c:"Object-Organising Programming",
        d:"Objective-Oriented Programming",
        ans: "ans1"
    },
    {
        question:"Q2. Which Cricketer has scored the most runs at the World Cup ?",
        a: "Rohit Sharma",
        b:"Sachin Tendulkar",
        c:"Dhoni",
        d:"Virat Kohli",
        ans: "ans2"
    }, {
        question:"Q3. What is the full-form of CSS?",
        a: "Cascading Spread Sheets",
        b:"Concatination Style Sheets",
        c:"Cascading Style Sheets",
        d:"Convince Style Sync",
        ans: "ans3"
    },{
        question:"Q4. When did India got Independence ?",
        a: "August 15, 1949",
        b:"January 26, 1947",
        c:"August 15, 1947",
        d:"Januay 26, 1949",
        ans: "ans3"
    },{
        question:"Q5. Who is the father of personal computer? ",
        a: "Allen Turing",
        b:"Latin",
        c:"Charles Babbage",
        d:"Edward Robert",
        ans: "ans4"
    },{
        question:"Q6. Neeraj Chopra won gold medal in which sport?",
        a: "Football",
        b:"Chess",
        c:"Javelin Throw",
        d:"Tennis",
        ans: "ans3"
    },{
        question:"Q7. Which is the Biggest Continent by Population?",
        a: "Asia",
        b:"Africa",
        c:"Antarctica",
        d:"Europe",
        ans: "ans1"
    },{
        question:"Q8. Taj-Mahal is located in which city?",
        a: "Ghaziabad",
        b:"Agra",
        c:"Mathura",
        d:"Jaipur",
        ans: "ans2"
    },

    {
        question:"Q9. What is the full-form of HTML ?",
        a: "HyperTurn Markup Language",
        b:"HyperText Markup Logic",
        c:"HyperText Machine Language",
        d:" HyperText Markup Language",
        ans: "ans4"
    },
    {
        question:"Q10. In which city Hawa Mahal is located?",
        a: " Jaipur",
        b:"Raipur",
        c:"Sonbhadra",
        d:"Ujjain",
        ans: "ans1"
    }
]
const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers = document.querySelectorAll('.answer');
const showScore =document.querySelector('#showScore');
let questionCount =0;
let score=0;

const loadQuestion = () => {
    const questionList =quizDB[questionCount];
    question.innerText =questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();
const getCheckAnswer =() =>{
    let answer;
    answers.forEach((curAnsElem)=> {
        if(curAnsElem.checked){
            answer= curAnsElem.id;
        }
     
    });
    return answer;
};
const deselectAll=() => {
    answers.forEach((curAnsElem) =>curAnsElem.checked= false);
}
submit.addEventListener("click", ()=>{
    const checkedAnswer =getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer ===quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
if(questionCount < quizDB.length){
    loadQuestion();

}
else{
    showScore.innerHTML=`
<h3> your score is ${score}/${quizDB.length}</h3>   
<button class="btn" onclick="location.reload()">Play Again </button> `

showScore.classList.remove('scoreArea');
}

});
