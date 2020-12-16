const backdropElement = document.getElementById('backdrop');
const modalLinkElements = document.querySelectorAll('.info-modal');
let infoModal;

function toggleBackdrop() {
  backdropElement.classList.toggle('visible');
}

function presentInfoModal(event) {
  const text = event.target.dataset.text;
  toggleBackdrop();
  infoModal = document.createElement('div');
  infoModal.classList.add('modal');
  infoModal.innerHTML = `
    <h2>More Details</h2>
    <p>${text}</p>
  `;
  const closeButton = document.createElement('button');
  closeButton.addEventListener('click', hideInfoModal);
  closeButton.textContent = 'Okay';
  infoModal.appendChild(closeButton);
  document.body.appendChild(infoModal);
}

function hideInfoModal() {
  toggleBackdrop();
  document.body.removeChild(infoModal);
}

for (const linkElement of modalLinkElements) {
  linkElement.addEventListener('click', presentInfoModal);
}


const voices = ['soprano', 'alto', 'tenor', 'bass'];
let human = {
    legs: 2,
    arms: 2,
    'spinal cord': 1,
    voice: voices[Math.floor(Math.random() * voices.length)]
};
human.voice;
human['spinal cord'];


human['temper'] = 'cold, nordic';

if (!human.temper.length) console.log("This human has no temper");

const myStudents = [
    {   firstName : 'Zeus',
        grade     : 86},
    {   firstName : 'Artemis',
        grade     : 97},
    {   firstName : 'Hera',
        grade     : 72},
    {   firstName : 'Apollo',
        grade     : 90}
];
function getAvgScore() {
    let total = 0;
    for (let i = 0; i <= myStudents.length-1; i++) total += myStudents[i].grade;
    console.log(`Average grade is ${total}/${myStudents.length} = ` + total/myStudents.length);
}
getAvgScore();





