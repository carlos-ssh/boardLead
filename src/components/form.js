const displayForm = (submitScore) => {
  const form = document.getElementById('form-container');
  const inputName = document.createElement('input');
  const inputScore = document.createElement('input');
  const btn = document.createElement('button');

  inputName.id = 'name';
  inputName.type = 'text';
  inputName.required = true;
  inputName.placeholder = 'Add your Name';

  inputScore.id = 'score';
  inputScore.type = 'number';
  inputScore.required = true;
  inputScore.placeholder = 'Add your Score';

  btn.innerHTML = 'Submit';
  btn.id = 'btn-submit';
  btn.classList.add('btn');
  btn.onclick = submitScore;

  form.append(inputName);
  form.append(inputScore);
  form.append(btn);
};

export default displayForm;