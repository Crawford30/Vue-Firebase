const app = Vue.createApp({
    //To react to event,,, we pass functions, methods, data  and component template here

  //  template: '<h2>our template</h2>'



  //creates a function and returns an object in that function so that it can be accessible from our template
  data(){
      return{

        title: 'The Final Empire',
        author: 'Joel Crawford'

      }
  }

});

// from the app we get acess to the method mount that tells which app to mount to the DOM
app.mount('#app')

