

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


    $("#ima01").click(function() {
      $('.conte1').toggleClass('transform-active');
      $('.lista').toggleClass('lista-active');
      $('#ma01').removeClass('ima');
      $('#ima01').addClass('clicked');
    });

    $("#ima02").click(function() {
      $('.conte2').toggleClass('transform-active2');
      $('.lista2').toggleClass('lista-active2');
      $('#ma02').removeClass('ima');
      $('#ima02').addClass('clicked');
    });

    $("#ima03").click(function() {
      $('.conte3').toggleClass('transform-active3');
      $('.lista3').toggleClass('lista-active3');
      $('#ma03').removeClass('ima');
      $('#ima03').addClass('clicked');
    });

    $("#ima04").click(function() {
      $('.conte4').toggleClass('transform-active4');
      $('.lista4').toggleClass('lista-active4');
      $('#ma04').removeClass('ima');
      $('#ima04').addClass('clicked');
    });


    $("#ima05").click(function() {
      $('.conte5').toggleClass('transform-active5');
      $('.lista5').toggleClass('lista-active5');
      $('#ma05').removeClass('ima');
      $('#ima05').addClass('clicked');
    });

    $("#ima06").click(function() {
      $('.conte6').toggleClass('transform-active6');
      $('.lista6').toggleClass('lista-active6');
      $('#ma06').removeClass('ima');
      $('#ima06').addClass('clicked');
    });


