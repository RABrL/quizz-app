// @ts-check
import Question from './Question.js'

export default class Quizz {
  questionIndex = 0
  score = 0

  /**
   *
   * @param {Question[]} questions array of Questions objects
   */
  constructor (questions) {
    this.questions = questions
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestion () {
    return this.questions[this.questionIndex]
  }

  /**
   *
   * @param {string} answer the answer chosen by the player
   */

  guess (answer) {
    if (this.getQuestion().correctAnswer(answer)) {
      this.score++
    }
    this.questionIndex++
  }

  /**
   *
   * @returns {boolean} Return true or false
   */

  isEnded () {
    return this.questions.length === this.questionIndex
  }
}
