//Descrizione:
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Vue Code here
const { createApp } = Vue;

createApp ({
    data() {
        // My proprieties and values
        return {
            text : 'Hello Word!!!',
            paragraphText : 'Hi everyone, this is my first vue exercise',
            immagine: 'https://cdn-media-1.freecodecamp.org/images/0*xkJgg-6HskYrQ3N7.jpeg',
            altImmagine : 'Evan You',
            buttonContent : 'Click to Show you more...',
            //class name
            miaClasse : 'hidden',
            altraClasse : 'active',
            classeColor : 'white'
        }
    },
    methods: {
        //function(if hidden item is hidden after click button will be active (and change buttons text))
        changeDisplay() {
            if(this.miaClasse === 'hidden'){
                this.miaClasse = 'active'
                this.buttonContent = 'Click to close'
            } else {
                this.miaClasse = 'hidden';
                this.buttonContent = 'Click to Show you more...'
            };
        }
    }
}).mount('#app');
//Bonus:
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.