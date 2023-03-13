const { createApp } = Vue

  createApp({

    data() {

      return {

        message: "Hello Luca!",
        name: "",
        lastName: "Cappello",
        title: "Piccoli test di Vue Js",
        titleClass: "colors",
        students: ["Luca", "Gabriel", "Anna", "Marco"],
        imageUrl: "" ,

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