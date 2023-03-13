const { createApp } = Vue

  createApp({

    data() {

      return {

        message: "Hello Vue!",
        nome: "Sandro",
        cognome: "Cappello",
        titolo: "Titolo",
        studenti: ["Luca", "Gabriel", "Anna", "Marco"]

      }

    }

/*  methods: {

        changeMessage: function() {

            this.message = "New message";
        }
        
    },

    // Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

*/




  }).mount('#app')