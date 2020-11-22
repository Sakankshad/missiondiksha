filterSelection("class1") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column1");
  // var btnContainer = document.getElementById("myBtnContainer");
  // var btns = btnContainer.getElementsByClassName("btn");
  // w3RemoveClass(btns[0], "active");
  // this.className += " active";
  // console.log(this);
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    
  }
  // var btnContainer = document.getElementById("myBtnContainer");
  // var btns = btnContainer.getElementsByClassName("btn");
  // for (var i = 0; i < btns.length; i++) { 
  //   btns[i].addEventListener("click", function(){
  //     var current = document.getElementsByClassName("active");
  //     console.log(this);
  //     current[0].className = current[0].className.replace(" active", "");
  //     this.className += " active";
  //   });
  // }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
console.log(btns);

for (var i = 0; i < btns.length; i++) {


  btns[i].addEventListener("click", function(){

    var current = btnContainer.getElementsByClassName("active");


    current[0].setAttribute("class", "btn");


    this.setAttribute("class", "btn active");
   
  });

}

var contentWayPoint = function() {
    var i = 0;
    $('.ftco-animate').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
        
        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function(){

          $('body .ftco-animate.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if ( effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if ( effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            },  k * 50, 'easeInOutExpo' );
          });
          
        }, 100);
        
      }

    } , { offset: '95%' } );
  };
  contentWayPoint();