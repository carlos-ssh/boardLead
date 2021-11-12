const displayForm = () => {
  const form = document.getElementById('form-container');
  const inputName = document.getElementById(input);
  const inputScore = document.getElementById(input);
  const btn = document.createElement('button');

  inputName.id = 'name';
  inputName.type = 'text';
  inputName.placeholder = 'Add your Name';

  inputScore.id = 'score';
  inputScore.type = 'number';
  inputScore.placeholder = 'Add your Score';

  btn.innerHTML = 'Submit';
  btn.classList.add('btn');
  btn.id = 'submit';
  btn.addEventListener('click', () => {
    const name = inputName.value;
    const score = inputScore.value;
    const newPlayer = new Player(name, score);
    newPlayer.addPlayer();
    newPlayer.sortPlayers();
    newPlayer.displayPlayers();
  });

  form.append(inputName);
  form.append(inputScore);
  form.append(btn);
};

export default displayForm;