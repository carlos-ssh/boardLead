const form = (submitScore) => {
  const form = document.getElementById('form-container');
  const txtName = document.createElement('input');
  const txtScore = document.createElement('input');
  const btn = document.createElement('button');

  txtName.id = 'name';
  txtName.placeholder = 'Your name';
  txtScore.id = 'score';
  txtScore.placeholder = 'Your Score';

  btn.innerHTML = 'Submit';
  btn.id = 'btn-submit';
  btn.classList.add('btn-submit');
  btn.onclick = submitScore;

  form.append(txtName);
  form.append(txtScore);
  form.append(btn);
};

export default form;