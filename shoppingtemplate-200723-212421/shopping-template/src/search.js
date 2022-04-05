

function loadJson(){
    return fetch('data/items.json')
    .then((response) => response.json())
    .then(json => json.items) 
}

function onInput(event, items, inputBox){
    const target = event.target;
    const dataset =event.target.dataset;
    const key = dataset.key;
    const value =dataset.value;

    

    let inputBoxValue = inputBox.value;   

    startJson(items, target, inputBoxValue);
}

function startJson(items, target, inputBoxValue){

    if(items.target === inputBoxValue)    
{
    console.log("oh");
}    
    };

function createElement(items){
    const li = document.createElement('li');
    li.setAttribute('class', 'list');

    const span = document.createElement('span');
    span.setAttribute('class', 'li__span');
    span.innerText = `${items.title}, ${items.sub}`;
    li.append(span);
    return li;
}

loadJson()
.then(items =>{
    const elements = items.map(createElement);
    const container = document.querySelector('.lists');
    container.append(...elements);
    let inputBox = document.getElementById('searchBox__input-search');
    inputBox.addEventListener("input", event => onInput(event, elements, inputBox));
})
.catch(console.log)