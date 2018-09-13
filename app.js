// var slides = [
//   {
//     image:'business-server.jpeg',
//     caption:'_hardware and software solutions for any need__',
//   },
//   {
//     image:'computer-stats.jpg',
//     caption:'_let us help optimize your technology__',
//   },
//   {
//     image:'computer-teamwork.jpg',
//     caption:'_collaboration is key to our success__',
//   }
// ]
//
// var slide_template =
//   '<div>
//     <img :src="image" alt="technology">
//     <p>{{caption}}</p>
//   </div>';
//
//   Vue.component('slide_images',{
//     props:['image','caption'],
//     template: slide_template
//   });
//
// var temp = new Vue({
//   el: '#slideshow',
//   data: {
//     message: 'hello vue!',
//   }
// });

Vue.component('to-top',{
  template:'<p a href="#intro">back to top</p>'
})

new Vue({
  el:'#main',
  data:{
  }
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'hi'
  }
});

/*
new Vue({
  el: '#slideshow',
  data: {
    items: [1,2,3],

  }
});

[business-server.jpeg, computer-stats.jpg, computer-teamwork.jpg]
// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})*/
