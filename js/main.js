//Descrizione:
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Vue Code here
const { createApp } = Vue;

createApp ({
    data() {
        return {
            text : 'Hello Word!!!',
            immagine: 'https://cdn-media-1.freecodecamp.org/images/0*xkJgg-6HskYrQ3N7.jpeg',
            altImmagine : 'Evan You',
            buttonContent : 'Click to Show you something...',
            mieClassi : 'hidden'
        }
    }
}).mount('#app');
//Bonus:
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.