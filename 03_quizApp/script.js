let question = [
    {
    question:"What is the capital of pakistan?",
    option:['islamabad','lahore','islamabaad','shahpur'],
    correctAnswer:'islamabad',
    timeLeft:60,
    marks:2
},
    {
    question:"What is the capital of punjab",
    option:['islamabad','lahore','Karachi','islampur'],
    correctAnswer:'lahore',
    timeLeft:60,
    marks:2
},
    {
    question:"What is the capital of sindh?",
    option:['islamabad','lahore','queta','karachi'],
    correctAnswer:'karachi',
    timeLeft:60,
    marks:2
},
    {
    question:"React native is used for:",
    option:['mob app dev','web dev','software dev','none'],
    correctAnswer:'mob app dev',
    timeLeft:60,
    marks:2
},
    {
    question:"React is used in:",
    option:['backend','frontend','fullstack','none of above'],
    correctAnswer:'frontend',
    timeLeft:60,
    marks:2
},
    {
    question:"three programming languages:",
    option:['HTML,CSS,JS','JS,Python,CSS','JAVA,C+,HTML','Python,JS,JAVA'],
    correctAnswer:'Python,JS,JAVA',
    timeLeft:60,
    marks:2
},
    {
    question:"tailwind is a:",
    option:['UI library','UI interface','backend frameork','backend library'],
    correctAnswer:'UI library',
    timeLeft:60,
    marks:2
},
    {
    question:"HTML is a:",
    option:['programming language','communication language','native language','markup language'],
    correctAnswer:'markup language',
    timeLeft:60,
    marks:2
},
    {
    question:"Typescript is:",
    option:['JS library','JS framework','superset of JS','none of above'],
    correctAnswer:'superset of JS',
    timeLeft:60,
    marks:2
},
    {
    question:"Which Programming Language is used in MERN Stack?",
    option:['Rust','Javascript','python','Java'],
    correctAnswer:'Javascript',
    timeLeft:60,
    marks:2
},
]
let student_marks = 0
let parent = document.getElementById('parent') 
let box = document.getElementById('box')
// let input = document.getElementById('input')
let questions = document.getElementById('questions')
let displayOptions = document.getElementById('options')
let currIndex = 0 
let currQuestionNo = document.getElementById('currQuestionNo')
let totalQuestionNo = document.getElementById('totalQuestionNo')
let displayTimer = document.getElementById('displayTimer')
let timer = question[currIndex].timeLeft


let checkAnswer = (a,b,c) => {
  if(a === b){
    student_marks += c
  }
  console.log(student_marks)
  nextQuestion()
}    
// console.log(total_questions   
let renderQuestions = () => {

 currQuestionNo.innerHTML = currIndex +1
 totalQuestionNo.innerHTML = question.length
 let current_question = question[currIndex]
 console.log(current_question)
 questions.innerHTML = current_question.question
 displayOptions.innerHTML = ''
 for(let i =0; i<current_question.option.length; i++){
   let option = current_question.option[i]
   displayOptions.innerHTML += `<button class='cursor-pointer font-semibold' onclick="checkAnswer('${current_question.correctAnswer}','${option}',${current_question.marks})">${option}</button>`

 }
 console.log(student_marks)
}

renderQuestions()

let nextQuestion = () => {
  if(currIndex +1 === question.length){
    alert('Quiz completed your marks are'+ ' ' +student_marks)
  }
  else{
      currIndex++
      renderQuestions()
      timer = question[currIndex].timeLeft
      displayTimer.innerHTML = timer
  }
}

let previousQuestion = () => {
  currIndex --
  renderQuestions()
}
let checkTimer = () => {
    const currentQuestion = questions[currIndex]
    if(timer ===0){
        nextQuestion()
        timer = currentQuestion.timeLeft
    }else{
        timer --
    }
    displayTimer.innerHTML = 'Timer:'+timer
}

setInterval(checkTimer,1000)

