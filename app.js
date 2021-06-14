const app = Vue.createApp({
    //To react to event,,, we pass functions, methods, data  and component template here

  //  template: '<h2>our template</h2>'



  //creates a function and returns an object in that function so that it can be accessible from our template
  data(){
      return{

        showBooks: true,
        title: 'The Final Empire',
        author: 'Joel Crawford',
        age: 45

      }
  },
  methods: {
      changeTitle(){
        this.title = "Change the book title"
        //   console.log("You clicked me!!")

      },
      toggleShowBooks(){
        this.showBooks =  !this.showBooks

    }


  }

});

// from the app we get acess to the method mount that tells which app to mount to the DOM
app.mount('#app')

