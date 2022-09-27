

/*
    function addClassToImage(element) {
        var innerImage = document.getElementById('ima01');
     
              innerImage.classList.add('clicked');
        }

    
   /* function addClassToImage2(element) {
        var innerImage = document.getElementById('ima02');
      if(innerImage) {
          if(innerImage.classList.contains('clicked')) {
        innerImage.classList.remove('clicked');
        }
        else {
              innerImage.classList.add('clicked');
        }
      }
    

    function addClassToImage3(element) {
        var innerImage = document.getElementById('ima03');
      if(innerImage) {
          if(innerImage.classList.contains('clicked')) {
        innerImage.classList.remove('clicked');
        }
        else {
              innerImage.classList.add('clicked');
        }
      }
    }

    function addClassToImage4(element) {
        var innerImage = document.getElementById('ima04');
      if(innerImage) {
          if(innerImage.classList.contains('clicked')) {
        innerImage.classList.remove('clicked');
        }
        else {
              innerImage.classList.add('clicked');
        }
      }
    }

    function addClassToImage5(element) {
        var innerImage = document.getElementById('ima05');
      if(innerImage) {
          if(innerImage.classList.contains('clicked')) {
        innerImage.classList.remove('clicked');
        }
        else {
              innerImage.classList.add('clicked');
        }
      }
    }

    function addClassToImage6(element) {
        var innerImage = document.getElementById('ima06');
      if(innerImage) {
          if(innerImage.classList.contains('clicked')) {
        innerImage.classList.remove('clicked');
        }
        else {
              innerImage.classList.add('clicked');
        }
      }
    }}*/


$("#ima01").click(function () {
  $('.conte1').toggleClass('transform-active');
  $('.lista').toggleClass('lista-active');
  $('#ma01').removeClass('ima');
  $('#ima01').addClass('clicked');

 
  if ($("#conte2").hasClass("transform-active2")) {
   $(".conte2").toggleClass("transform-active2");
    $(".lista2").toggleClass("lista-active2");
  }

  if ($("#conte3").hasClass("transform-active3")) {
    $(".conte3").toggleClass("transform-active3");
     $(".lista3").toggleClass("lista-active3");
   }

    if ($("#conte4").hasClass("transform-active4")) {
    $(".conte4").toggleClass("transform-active4");
     $(".lista4").toggleClass("lista-active4");
   }

   if ($("#conte5").hasClass("transform-active5")) {
    $(".conte5").toggleClass("transform-active5");
     $(".lista5").toggleClass("lista-active5");
   }

   if ($("#conte6").hasClass("transform-active6")) {
    $(".conte6").toggleClass("transform-active6");
     $(".lista6").toggleClass("lista-active6");
   }

   /*for (var i = 0; i < 6; i++) {
    continue;
    if ($("#conte2").hasClass("transform-active2")) {
      console.log("logrado");
      $(".conte2").toggleClass("transform-active2");
       $(".lista2").toggleClass("lista-active2");
      
     }
}*/


});


$("#ima02").click(function () {
  $('.conte2').toggleClass('transform-active2');
  $('.lista2').toggleClass('lista-active2');
  $('#ma02').removeClass('ima');
  $('#ima02').addClass('clicked');

  if ($("#conte1").hasClass("transform-active")) {
    $(".conte1").toggleClass("transform-active");
     $(".lista").toggleClass("lista-active");
   }
 
   if ($("#conte3").hasClass("transform-active3")) {
     $(".conte3").toggleClass("transform-active3");
      $(".lista3").toggleClass("lista-active3");
    }
 
     if ($("#conte4").hasClass("transform-active4")) {
     $(".conte4").toggleClass("transform-active4");
      $(".lista4").toggleClass("lista-active4");
    }
 
    if ($("#conte5").hasClass("transform-active5")) {
     $(".conte5").toggleClass("transform-active5");
      $(".lista5").toggleClass("lista-active5");
    }
 
    if ($("#conte6").hasClass("transform-active6")) {
     $(".conte6").toggleClass("transform-active6");
      $(".lista6").toggleClass("lista-active6");
    }
});

$("#ima03").click(function () {
  $('.conte3').toggleClass('transform-active3');
  $('.lista3').toggleClass('lista-active3');
  $('#ma03').removeClass('ima');
  $('#ima03').addClass('clicked');

  if ($("#conte2").hasClass("transform-active2")) {
    $(".conte2").toggleClass("transform-active2");
     $(".lista2").toggleClass("lista-active2");
   }
 
   if ($("#conte1").hasClass("transform-active")) {
     $(".conte1").toggleClass("transform-active");
      $(".lista").toggleClass("lista-active");
    }
 
     if ($("#conte4").hasClass("transform-active4")) {
     $(".conte4").toggleClass("transform-active4");
      $(".lista4").toggleClass("lista-active4");
    }
 
    if ($("#conte5").hasClass("transform-active5")) {
     $(".conte5").toggleClass("transform-active5");
      $(".lista5").toggleClass("lista-active5");
    }
 
    if ($("#conte6").hasClass("transform-active6")) {
     $(".conte6").toggleClass("transform-active6");
      $(".lista6").toggleClass("lista-active6");
    }
});

$("#ima04").click(function () {
  $('.conte4').toggleClass('transform-active4');
  $('.lista4').toggleClass('lista-active4');
  $('#ma04').removeClass('ima');
  $('#ima04').addClass('clicked');

  if ($("#conte2").hasClass("transform-active2")) {
    $(".conte2").toggleClass("transform-active2");
     $(".lista2").toggleClass("lista-active2");
   }
 
   if ($("#conte3").hasClass("transform-active3")) {
     $(".conte3").toggleClass("transform-active3");
      $(".lista3").toggleClass("lista-active3");
    }
 
     if ($("#conte1").hasClass("transform-active")) {
     $(".conte1").toggleClass("transform-active");
      $(".lista").toggleClass("lista-active");
    }
 
    if ($("#conte5").hasClass("transform-active5")) {
     $(".conte5").toggleClass("transform-active5");
      $(".lista5").toggleClass("lista-active5");
    }
 
    if ($("#conte6").hasClass("transform-active6")) {
     $(".conte6").toggleClass("transform-active6");
      $(".lista6").toggleClass("lista-active6");
    }
});


$("#ima05").click(function () {
  $('.conte5').toggleClass('transform-active5');
  $('.lista5').toggleClass('lista-active5');
  $('#ma05').removeClass('ima');
  $('#ima05').addClass('clicked');

  if ($("#conte2").hasClass("transform-active2")) {
    $(".conte2").toggleClass("transform-active2");
     $(".lista2").toggleClass("lista-active2");
   }
 
   if ($("#conte3").hasClass("transform-active3")) {
     $(".conte3").toggleClass("transform-active3");
      $(".lista3").toggleClass("lista-active3");
    }
 
     if ($("#conte4").hasClass("transform-active4")) {
     $(".conte4").toggleClass("transform-active4");
      $(".lista4").toggleClass("lista-active4");
    }
 
    if ($("#conte1").hasClass("transform-active")) {
     $(".conte1").toggleClass("transform-active");
      $(".lista").toggleClass("lista-active");
    }
 
    if ($("#conte6").hasClass("transform-active6")) {
     $(".conte6").toggleClass("transform-active6");
      $(".lista6").toggleClass("lista-active6");
    }
});

$("#ima06").click(function () {
  $('.conte6').toggleClass('transform-active6');
  $('.lista6').toggleClass('lista-active6');
  $('#ma06').removeClass('ima');
  $('#ima06').addClass('clicked');

  if ($("#conte2").hasClass("transform-active2")) {
    $(".conte2").toggleClass("transform-active2");
     $(".lista2").toggleClass("lista-active2");
   }
 
   if ($("#conte3").hasClass("transform-active3")) {
     $(".conte3").toggleClass("transform-active3");
      $(".lista3").toggleClass("lista-active3");
    }
 
     if ($("#conte4").hasClass("transform-active4")) {
     $(".conte4").toggleClass("transform-active4");
      $(".lista4").toggleClass("lista-active4");
    }
 
    if ($("#conte5").hasClass("transform-active5")) {
     $(".conte5").toggleClass("transform-active5");
      $(".lista5").toggleClass("lista-active5");
    }
 
    if ($("#conte1").hasClass("transform-active")) {
     $(".conte1").toggleClass("transform-active");
      $(".lista").toggleClass("lista-active");
    }
});

