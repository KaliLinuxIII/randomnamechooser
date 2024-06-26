/**@type {HTMLInputElement} */
const nameInputElement = document.getElementById('name-input-element');
/**@type {HTMLParagraphElement} */
const nameDisplay = document.getElementById('name-display');
/**@type {HTMLButtonElement} */
const addBtn = document.getElementById('add-btn');
/**@type {HTMLButtonElement} */
const randomNameChooserBtn = document.getElementById('random-name-chooser-btn');

const names = [];

function addNames() {
  const nameInput = nameInputElement.value;
  names.push(nameInput);
  nameInputElement.value = '';
};

function chooseName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  nameDisplay.textContent = randomName;
};

addBtn.addEventListener('click', addNames);
randomNameChooserBtn.addEventListener('click', chooseName);

document.addEventListener('keypress', (e) => {
  if (e.key == 'enter') {
    addNames();
  };
});