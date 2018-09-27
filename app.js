
var slides = ['https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/business-server.jpeg',
'https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/imac.jpg',
'https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/computer-teamwork.jpg'
];


new Vue({
  el: '#slideshow',
  data: {
    images: slides,
    currentSlide: 0,
   }
  //
  // mounted: function (){
  //   this.startShow();
  // },
  //
  // methods:{
  //   startShow: function (){
  //     this.timer = setInterval(this.next, 3000);
  //   },
  //   stopShow: function(){
  //     clearTimeout(this.timer);
  //     this.timer = null;
  //   },
  //   next: function(){
  //     this.currentNumber += 1
  //   },
  //   prev: function(){
  //     this.currentNumber -= 1
  //   }
  // }, //end methods
  //
  // computed: { //calculate slide
  //   currentImage: function(){
  //     return this.images[Math.abs(this.currentNumber) % this.slides.length];
  //   }
  // }
});

Vue.component('to-top',{ //for back to top buttons
  template:'<p><a href="#">back to top</a></p>'
});

new Vue({//for loading component
  el:'#main',
  data:{  }
});
