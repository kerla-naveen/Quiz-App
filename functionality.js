document.addEventListener('DOMContentLoaded',()=>{
    const startBtn=document.getElementById('startBtn');
    const backBtn=document.getElementById('backBtn');
    const nextBtn=document.getElementById('nextBtn');
    const restartBtn=document.getElementById('restartBtn');
   
   const startScreen=document.getElementById('start-screen');
   const questionContainer=document.getElementById('question-container');
   const question=document.getElementById('question');
   const options=document.getElementById('options');
   const resultContainer=document.getElementById('result-container');
   const scoreDisplay=document.getElementById('score-display');

   
   const quizQuestions = [
  {
    question: "What is the capital of India?",
    choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who wrote the Indian National Anthem?",
    choices: ["Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi", "Subhas Chandra Bose"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Which is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yen", "Won", "Dollar", "Ruble"],
    answer: "Yen"
  },
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    choices: ["Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Vallabhbhai Patel", "Mahatma Gandhi"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen"
  },
  {
    question: "Who invented the light bulb?",
    choices: ["Alexander Graham Bell", "Isaac Newton", "Thomas Edison", "Nikola Tesla"],
    answer: "Thomas Edison"
  },
  {
    question: "What is the national sport of India?",
    choices: ["Hockey", "Cricket", "Kabaddi", "Football"],
    answer: "Hockey"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    choices: ["India", "Japan", "China", "Thailand"],
    answer: "Japan"
  }
];
   let questionIndex=0;
   let score=0;
   startBtn.addEventListener('click',startQuiz);
  

   function startQuiz(){
      startScreen.classList.add('hidden');
      resultContainer.classList.add('hidden');
      questionContainer.classList.remove('hidden');
      showQuestion();
   }

   function showQuestion(){
       question.textContent=`${questionIndex+1}.${quizQuestions[questionIndex].question}`;
       const choices=quizQuestions[questionIndex].choices;

       options.innerHTML=''//clears the pervous options
       choices.forEach((choice)=>{
           const li=document.createElement('li');
           li.textContent=`${choice}`;
           options.appendChild(li);
       });

       const choiceNodes = Array.from(options.children)
       choiceNodes.forEach((choice)=>{// adding eventlistner
           choice.addEventListener('click',()=>{
               choiceNodes.forEach((node)=>node.classList.remove('selected'));
               choice.classList.add('selected');
           })
       });
       
   }
   
   nextBtn.addEventListener('click',()=>{
        const selected=options.querySelector('.selected')
        if(selected===null) return;
        if(selected.textContent===quizQuestions[questionIndex].answer){
          score++;
          console.log(score);
        }
        questionIndex++;
        if(questionIndex<quizQuestions.length) {
          showQuestion();
        }
        else {
           startScreen.classList.add('hidden');
           resultContainer.classList.remove('hidden');
           questionContainer.classList.add('hidden'); 
           showResult();
        }
   });
   function showResult(){
    scoreDisplay.innerHTML=`
    <h4>congrats! you scored ${score} out of ${quizQuestions.length}</h4>
     `
   }

   restartBtn.addEventListener('click',()=>{
       startScreen.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.add('hidden');
        score=0;
        questionIndex=0;
   });
});
