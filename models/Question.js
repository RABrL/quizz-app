export default class Question {
  /**
   *
   * @param {string} text this is the text of the question
   * @param {string[]} choices this are the choices of the question
   * @param {string} answer this the correct answer of the question
   * @param {number} id this is the number of actual question
   */

  constructor (id, text, choices, answer) {
    this.id = id
    this.text = text
    this.choices = choices
    this.answer = answer
  }

  /**
   *
   * @param {string} choice this is the choice selected for player
   * @returns return true if the choice is correct
   */
  correctAnswer (choice) {
    return choice === this.answer
  }
}
