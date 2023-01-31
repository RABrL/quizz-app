import Question from '../models/Question.js'

export const newQuestions = await fetch('./data/data.json')
  .then(res => res.json())
  .then(data => {
    const { questions } = data
    return questions.map(question => {
      const { id, text, choices, answer } = question
      return new Question(id, text, choices, answer)
    })
  })
