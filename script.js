/*creating javascript file*/
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
/*high score button should give a list of previous date needs work*/
const highscoreButton = document.getElementById('highscore-btn')

/*function below will shuffle between the question when the quiz is restarted*/
let shuffledQuestions, currentQuestionIndex

/*this will allow the quiz to start and randomize all the questions as well as the answers within them*/
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }

  /*adding next question functions*/

  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }

  /*adding function to remove the display hide from css and showing the question content*/

  function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }

  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

/*adding the questions below*/
const questions = [
    {
      question: 'What does HTML stand for?',
      answers: [
        { text: 'Hyper Text Markup Language', correct: true },
        { text: 'Human Text Made to Learn', correct: false },
        { text: 'Hidden Task Marking Language', correct: false },
        { text: 'Halo Testing Makeup Language', correct: false }
      ]
    },
    {
      question: 'Which of the following is the correct syntax for paragraphs within the text body?',
      answers: [
        { text: '(P)', correct: false },
        { text: '<p>', correct: true },
        { text: '{p}', correct: false },
        { text: '[p]', correct: false }
      ]
    },
    {
      question: 'Which tag is the root of a page?',
      answers: [
        { text: '<root>', correct: false },
        { text: '<html>', correct: true },
        { text: '<body>', correct: false },
        { text: '<h1>', correct: false }
      ]
    },
    {
      question: 'Fill in the blanks to align the paragraph to the center of the page: <p_?_="_?_">Welcome</p>',
      answers: [
        { text: 'center, center', correct: false },
        { text: 'align, center', correct: true },
        { text: 'alignment, center', correct: false },
        { text: 'move, center', correct: false }
      ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
          { text: 'Character Styling Syntax', correct: false },
          { text: 'Cascading Style Sheets', correct: true },
          { text: 'Creating Style Sheet', correct: false },
          { text: 'Casual Syntax Style', correct: false }
        ]
    },
    {
        question: 'How would you target a class in CSS?',
        answers: [
          { text: 'Adding a "=" at the begining.', correct: false },
          { text: 'Adding a "." at the begining.', correct: true },
          { text: 'Adding a "#" at the begining.', correct: false },
          { text: 'Adding a "$" at the begining.', correct: false }
        ]
      },
      {
        question: 'What is used in Git to prep the changes you have made up to GitHub?',
        answers: [
          { text: 'git save changes', correct: false },
          /*check the answer below to make sure there isnt any errors*/
          { text: 'git add .', correct: true },
          { text: 'git -m save', correct: false },
          { text: 'git + changes', correct: false }
        ]
      },
      {
        /*finish the questions below*/
        question: '',
        answers: [
          { text: 'center, center', correct: false },
          { text: 'align, center', correct: true },
          { text: 'alignment, center', correct: false },
          { text: 'move, center', correct: false }
        ]
      },
      {
        question: 'Fill in the blanks to align the paragraph to the center of the page: <p_?_="_?_">Welcome</p>',
        answers: [
          { text: 'center, center', correct: false },
          { text: 'align, center', correct: true },
          { text: 'alignment, center', correct: false },
          { text: 'move, center', correct: false }
        ]
      },
      {
        question: 'Fill in the blanks to align the paragraph to the center of the page: <p_?_="_?_">Welcome</p>',
        answers: [
          { text: 'center, center', correct: false },
          { text: 'align, center', correct: true },
          { text: 'alignment, center', correct: false },
          { text: 'move, center', correct: false }
        ]
      }
  ]