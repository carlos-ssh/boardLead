const scores = [
  {
    id: 1,
    name: 'Вася',
    score: 10,
  },
  {
    id: 2,
    name: 'Петя',
    score: 20,
  },
  {
    id: 3,
    name: 'Маша',
    score: 30,
  },
  {
    id: 4,
    name: 'Даша',
    score: 40,
  }
];

const getScore = () => scores;
const addScore = (score) => scores.push(score);

export { getScore, addScore };