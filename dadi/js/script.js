// alert ('tu madre');
let userScore = Math.floor(Math.random() * 6) + 1;
console.log(userScore);
let pcScore = Math.floor(Math.random() * 6) +1 ;
console.log(pcScore);
if (userScore > pcScore) {
 console.log('Hai vinto barbone');
}
else if (userScore < pcScore ) {
    console.log('Hai perso Stark');
}else 
console.log('Pari e patta');