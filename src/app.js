import './style.css';
import LiElement from './components/listElements';
import { getScores, addScores } from './components/scores';
import form from './components/form';

const displayData = () => {
  const sl = document.getElementById('score-result');
  const response = getScores();
  let data = [];
  const liLoading = LiElement({ user: 'Getting data from API', score: '' });
  sl.append(liLoading);

  response
    .then((response) => {
      // handle success
      data = [...response.data.result];
      sl.innerHTML = '';
      data.forEach((score) => {
        const li = LiElement(score);
        sl.append(li);
      });
    })
    .catch((error) => {
      const liLoading = LiElement({
        user: "Couldn't get data from API :(",
        score: '',
      });
      console.log(error);
      sl.append(liLoading);
    });
};

const submitScore = (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const game = { user, score };

  const response = addScores(game);
  response.then((resp) => {
    console.log(resp);
  });
  displayData();
};

const hanldeRefresh = () => {
  displayData();
};

const startApp = () => {
  displayData();
  form(submitScore);
  // Event haldler for refresh
  const btnRefresh = document.getElementById('refresh');
  btnRefresh.onclick = hanldeRefresh;
};

startApp();