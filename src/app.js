import './style.css';
import displayForm from './components/form';
import { getScore, addScore } from './components/scores';
import liElement from './components/listElements';
import form from './components/form';


const displayData = () => {
  const data = getScore();
  const sl = document.querySelector('.score-result');
  sl.innerHTML = '';
  data.forEach((score) => {
    const li = liElement(score);
    sl.append(li);
  });
};

const submitScore = (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const obj = { name, score};
  
  addScore(obj);
  displayData();
  form.reset();
}

const app = () => {
  displayData();
  form(submitScore);
}

app();