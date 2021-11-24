const userMail = prompt('Give me your e-mail');
const mailArray = ['luca@mario.it', 'luca@gmail.it', 'luca@yahoo.it', 'luca@tiscali.it', 'luca@live.it', 'luca@hotmail.it', 'luca@fulvio.it', 'luca@francesco.it',];
let boolean = false;

for (let index = 0; index < mailArray.length; index++) {
   if (mailArray[index] == userMail) {
    boolean = true;
   }    
}
if (boolean == true) {
    console.log(boolean);

}
else 
console.log('non sei nella lista');