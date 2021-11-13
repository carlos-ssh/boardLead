import './style.css';
import displayForm from './components/form';
import { getScore, addScore } from './components/scores';
import liElement from './components/listElements';
import form from './components/form';


const displayData = () => {
  const response = getScore();
  const sl = document.querySelector('.score-result');
  const data = [];
  const liLoading = liElement('loading...');
  sl.append(liLoading);

  response
  .then((response) => {
    data = [...response.data.result];
    data.forEach((score) => {
      const li = liElement(score);
      sl.append(li);
      console.log(score);
    });
  })
  .catch((err) => {
    const liLoading = liElement({
      user: 'No Response from api',
      score: 'No Response from api'
    });
    
    sl.append(liLoading);
  });
};

const submitScore = (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const game = { user, score};

  const response = addScore(game);
  response.then((resp) => {
    console.log(resp);
    const li = liElement(resp.data.result);
    const sl = document.querySelector('.score-result');
    sl.append(li);
  });

  displayData();
}

const handleRefresh = () => {
  displayData();
}

const app = () => {
  displayData();
  form(submitScore);

  const refresh = document.querySelector('.refresh');
  refresh.addEventListener('click', handleRefresh);
};

app();