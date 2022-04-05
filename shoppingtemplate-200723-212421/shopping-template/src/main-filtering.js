function load(){
  return fetch('data/data.json')
  .then(response => response.json())
  .then(json => json.items);
}

function createElement(item){
  const img = document.createElement('img');
  img.setAttribute('class', 'thumbnail');
  img.setAttribute('src', item.image);

  const span = document.createElement('span');
  span.setAttribute('class', 'description');
  span.innerText = `${item.gender}, ${item.size} size`;

  const li = document.createElement('li');
  li.setAttribute('class', 'item');
  li.setAttribute('data-type', item.type);
  li.setAttribute('data-color', item.color);
  li.append(img);
  li.append(span);
  return li;
}

function onEvent(event, items){
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;

  if (key == null || value == null) {
    return;
  }
  clickEvent(items, key, value);
}

function clickEvent(items, key, value){
  items.forEach(item => {
    if (item.dataset[key] === value) { // items의 데이터를 가져온다 items의 type 또는 컬러 == [key] == dataset.value    
      console.log(item.dataset[key]);
      console.log(value);
      item.classList.remove('invisible');
    }
    else {
      item.classList.add('invisible');
    }
  });
}

load().then(items => {
  const elements = items.map(createElement);
  const container = document.querySelector('.items');
  container.append(...elements);
  const buttons = document.querySelector('.buttons');
  buttons.addEventListener('click', event => onEvent(event, elements));
});
