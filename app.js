import { newQuestions } from './data/questions.js'
import Quizz from './models/Quizz.js'
import UI from './models/UI.js'

/**
 *
 * @param {Quizz} quizz the main quizz object
 * @param {UI} ui ui object
 */

function renderQuiz (quizz, ui) {
  if (quizz.isEnded()) {
    ui.showScore(quizz.score)
  } else {
    ui.showQuestion(quizz.getQuestion().text)
    ui.showChoices(quizz.getQuestion().choices, (currentChoice) => {
      quizz.guess(currentChoice)
      renderQuiz(quizz, ui)
    })
    ui.showProgress(quizz.getQuestion().id, newQuestions.length)
  }
}

function main () {
  const quizz = new Quizz(newQuestions)
  const ui = new UI()
  renderQuiz(quizz, ui)
}

main()
