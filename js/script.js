const { createApp } = Vue

  createApp({

    data() {

      return {

        message: "Hello Luca!",
        name: "",
        lastName: "",
        title: "Piccoli test di Vue Js",
        titleClass: "",
        students: ["Luca", "Gabriel", "Anna", "Marco"],
        imageUrl: "" ,

      }

    },

    methods: {

        changeTitle: function() {

            this.title = this.name;
        }
        
    }

    // Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


  }).mount('#app')