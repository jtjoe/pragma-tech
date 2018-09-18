// var slides = ['https://github.com/jtjoe/pragma-tech/blob/master/images/business-server.jpeg',
// 'https://github.com/jtjoe/pragma-tech/blob/master/images/imac.jpg',
// 'https://github.com/jtjoe/pragma-tech/blob/master/images/computer-teamwork.jpg'
// ];

/*
 % slides.length
{
  image:'https://github.com/jtjoe/pragma-tech/blob/master/images/business-server.jpeg',
  caption:'We offer hardware and software guidance for any need',
},
{
  image:'https://github.com/jtjoe/pragma-tech/blob/master/images/imac.jpg',
  caption:'Let us help optimize the use of technology in your business',
},
{
  image:'https://github.com/jtjoe/pragma-tech/blob/master/images/computer-teamwork.jpg',
  caption:'Collaboration is key to our success',
},
{
  image:'https://github.com/jtjoe/pragma-tech/blob/master/images/discussion.jpg',
  caption: 'insert another description'
}

Vue.component('slideimages',{
  props:['slide'],
  template: '<div class='view'>
      <transition-group class='carousel' tag="div">
        <div v-for="slide in slides" class='slide' :key="slide.image">
          <p>{{slide.caption}}</p>
        </div>
      </transition-group>
      <div class='controls'>
        <button class='carousel-controls__button' @click="previous">prev</button>
        <button class='carousel-controls__button' @click="next">next</button>
      </div>
    </div>
 '
});

new Vue({
  el: 'slideshow',
  data: {
    images:  ['https://github.com/jtjoe/pragma-tech/blob/master/images/business-server.jpeg',
    'https://github.com/jtjoe/pragma-tech/blob/master/images/imac.jpg',
    'https://github.com/jtjoe/pragma-tech/blob/master/images/computer-teamwork.jpg'
    ],
    currentSlide: 0,
    timer: null
  },
  mounted: function (){
    this.startShow();
  },

  methods:{
    startShow: function (){
      this.timer = setInterval(this.next, 3000);
    },
    stopShow: function(){
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function(){
      this.currentSlide += 1
    }
  }
});

*/


Vue.component('to-top',{ //for back to top buttons
  template:'<p><a href="#">back to top</a></p>'
});

new Vue({
  el:'#main',
  data:{
    message: 'hello'
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
