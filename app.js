const app = Vue.createApp({
    //To react to event,,, we pass functions, methods, data  and component template here

  //  template: '<h2>our template</h2>'



  //creates a function and returns an object in that function so that it can be accessible from our template
  data(){
      return{

        showBooks: true,
        title: 'The Final Empire',
        author: 'Joel Crawford',
        age: 45,
        x: 0,
        y: 0

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

