const app = Vue.createApp({
    //To react to event,,, we pass functions, methods, data  and component template here

  //  template: '<h2>our template</h2>'



  //creates a function and returns an object in that function so that it can be accessible from our template
  data(){
      return{
          url: "www.google.com",

        showBooks: true,
       books: [
           { title: 'The Final Empire', author: 'Joel Crawford' , img: 'assets/1.jpg'},
           { title: 'The River Between', author: 'John Crawford' , img: 'assets/2.jpg'},
           { title: 'Big Nerd Ranch', author: 'JJ Crawford' , img: 'assets/3.jpg'},
       ]

      }
  },
  methods: {
      changeTitle(){
        this.title = "Change the book title"
        //   console.log("You clicked me!!")

      },
      toggleShowBooks(){
        this.showBooks =  !this.showBooks

    },

    handleEvent(e, data){
        console.log(e, e.type)
        if(data){
            console.log(data)

        }
    },

    handleMouseMove(e){

        //

        this.x = e.offsetX

        this.y = e.offsetY

    }


  }

});

// from the app we get acess to the method mount that tells which app to mount to the DOM
app.mount('#app')

