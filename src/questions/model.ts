export const getTestById = async (id: number) => {
  return {
    id,
    name: 'test',
    answers: [{
      id: 1,
      name: 'answer 1',
      isCorrect: true
    }],
    isPassed: true
  }
}
