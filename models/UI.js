export default class UI {
  constructor () {}

  /**
   *
   * @param {string} text Question to render
   */
  showQuestion (text) {
    const questionTitle = document.getElementById('question')
    questionTitle.innerText = text
  }

  /**
   *
   * @param {string[]} choices All choices for the actual question
   * @param {function} callback function to execute if a button is clicked
   */
  showChoices (choices, callback) {
    const containerChoices = document.getElementById('choices')
    this.cleanElement(containerChoices)
    choices.forEach(choice => {
      const button = document.createElement('button')
      button.setAttribute('class', 'button')
      button.innerText = choice
      button.addEventListener('click', () => callback(choice))

      containerChoices.appendChild(button)
    })
  }

  /**
   *
   * @param {object} container the element container for the buttons
   */

  cleanElement (container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }
  }

  /**
   *
   * @param {number} score the final score
   */

  showScore (score) {
    const quizzEndHTML = `
      <h1>Result</h1>
      <h2>Your score: ${score}</h2>
    `
    const element = document.getElementById('quizz')
    element.innerHTML = quizzEndHTML
  }

  /**
   *
   * @param {number} currentIndex the current index of the quizz
   * @param {number} total the total number of questions
   */

  showProgress (currentIndex, total) {
    const element = document.getElementById('progress')

    element.innerText = `Question ${currentIndex} of ${total}`
  }
}
