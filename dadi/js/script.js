// alert ('tu madre');
let userScore = Math.floor(Math.random() * 6) + 1;
console.log(userScore);
let pcScore = Math.floor(Math.random() * 6) +1 ;
console.log(pcScore);
const container = document.getElementById('container');

for (let index = 0; index < 3; index++) {
    const element = document.createElement('div');
    element.classList.add('box-dado');
    container.append(element);   
}

const userScoreBox = document.querySelector('#container div');
const pcScoreBox = document.querySelector('#container div:nth-child(2)');
userScoreBox.innerHTML = userScore;
pcScoreBox.innerHTML = pcScore;

if (userScore > pcScore) {
    console.log('Hai vinto barbone'); 
    const result = document.querySelector('#container div:nth-child(3)');
    result.innerHTML = 'Hai vinto';
}

else if (userScore < pcScore ) {
    console.log('Hai perso Stark');
    const result = document.querySelector('#container div:nth-child(3)');
    result.innerHTML = 'Hai perso';
}

else {
    console.log('Pari e patta');
    const result = document.querySelector('#container div:nth-child(3)');
    result.innerHTML = 'Pareggio';
}
