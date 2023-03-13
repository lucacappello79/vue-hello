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
        //imageUrl: "img/gabrielCyberPunk.png" ,
        imageUrl: "" ,

      }

    },

    methods: {

        changeTitle: function() {

            if (this.name && this.lastName) {

                this.title = "Cambiato da " + this.name + " " + this.lastName;

              } else {

                alert("Inserisci Nome e Cognome");

            }

        },

        showImg: function() {

            this.imageUrl = "img/gabrielCyberPunk.png";
        }
        
    }

  }).mount('#app')