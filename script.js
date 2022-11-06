const input = document.querySelector('input');
const button = document.querySelector('.btnAdd');
const challButton = document.querySelector('.btnChallenge');
const list = document.querySelector('ul');
const noTask = document.querySelector('.noTasks');
const dateH3 = document.getElementById('date');
const challenges = ['Hacer 10 sentadillas', 'Caminar 2km', 'Hacer 20 lagartijas', 'Correr 500m', 'Tomar 2 litros de agua'];
const date = new Date();

dateH3.innerHTML = date.toLocaleDateString();


function selectRandomText() {
    let text = challenges[Math.floor((Math.random() * challenges.length))];
    return text;
}

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btnDel';

    deleteBtn.addEventListener('click', (event) => {
        const item = event.target.parentElement;
        list.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            noTask.style.display = 'block';
        }
    });
    return deleteBtn;
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    const text = input.value;

    if (text !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        list.appendChild(li);

        input.value = '';
        noTask.style.display = 'none';
    }

});

challButton.addEventListener('click', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    const p = document.createElement('p');
    const randomText = selectRandomText();
    p.textContent = randomText;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    list.appendChild(li);
    challButton.style.display = 'none';
    noTask.style.display = 'none';
});

