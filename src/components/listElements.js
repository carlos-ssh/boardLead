const liElement = (data) => {
  const li = document.createElement('li');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  p1.textContent = `Name: ${data.name}`;
  p2.textContent = `Score: ${data.score}`;
  li.append(p1);
  li.append(p2);

  return li;
}

export default liElement;