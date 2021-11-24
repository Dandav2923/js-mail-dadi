// alert ('tu madre');
// dichiarazione variabili
let userScore = Math.floor(Math.random() * 6) + 1;
console.log(userScore);
let pcScore = Math.floor(Math.random() * 6) +1 ;
console.log(pcScore);
const container = document.getElementById('container');
const userScoreBox = document.querySelector('#container div');
const pcScoreBox = document.querySelector('#container div:nth-child(2)');
userScoreBox.innerHTML = userScore;
pcScoreBox.innerHTML = pcScore;
// /dichiarazione variabili

// creazione box dove mettere gli elementi
for (let index = 0; index < 3; index++) {
    const element = document.createElement('div');
    element.classList.add('box-dado');
    container.append(element);   
}
// /creazione box dove mettere gli elementi

// condizione per verificare il vincitore tra giocatore e pc 
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
// /condizione per verificare il vincitore tra giocatore e pc