Vue.component('to-top',{ //for back to top buttons
  template:'<p><a href="#">back to top</a></p>'
});

// new Vue({//for loading component
//   el:'#main',
//   data:{  }
// });

// var slides = ['https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/business-server.jpeg',
// 'https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/imac.jpg',
// 'https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/computer-teamwork.jpg'
// ];


new Vue({
    el: 'image-slider',
    data: {
        images: ['https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/business-server.jpeg',
                'https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/imac.jpg',
                'https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/computer-teamwork.jpg'],
        currentNumber: 0,
        timer: null
    },

    mounted: function () {
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            console.log("rotation started");
            this.timer = setInterval(this.next, 5000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            console.log("next");
            this.currentNumber += 1
        },
        prev: function() {
            console.log("prev");
            this.currentNumber -= 1
        }
    },

    computed: {
    	currentImage: function() {
      	return this.images[Math.abs(this.currentNumber) % this.images.length];
      }
    }
});


// new Vue({
//   el: 'slideshow',
//   data: {
//     images: ['https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/business-server.jpeg',
//     'https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/imac.jpg',
//     'https://raw.githubusercontent.com/jtjoe/pragma-tech/master/images/computer-teamwork.jpg'
//     ],
//     currentSlide: 0,
//    }
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
//});

// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
