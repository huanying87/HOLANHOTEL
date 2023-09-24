
  /*auto slide for room 1 */

let autoslidenum=0;
  autoslideshow();

  function autoslideshow(){

    let i;
    let autoslide=document.getElementsByClassName("roomslide");

    for(i=0;i<autoslide.length;i++){

       autoslide[i].style.display="none";
    }

    autoslidenum++

    if(autoslidenum > autoslide.length){

        autoslidenum=1;
    }
  autoslide[autoslidenum-1].style.display="block";
   setTimeout(autoslideshow,4000);
  }


 
  /*auto slide for room 2 */

let autoslidenum2=0;
autoslideshow2();

function autoslideshow2(){

  let i;
  let autoslide=document.getElementsByClassName("roomslide2");

  for(i=0;i<autoslide.length;i++){

     autoslide[i].style.display="none";
  }

  autoslidenum2++

  if(autoslidenum2 > autoslide.length){

      autoslidenum2=1;
  }
autoslide[autoslidenum2-1].style.display="block";
 setTimeout(autoslideshow2,2000);
}

   /*auto slide for room 3 */

let autoslidenum3=0;
autoslideshow3();

function autoslideshow3(){

  let i;
  let autoslide=document.getElementsByClassName("roomslide3");

  for(i=0;i<autoslide.length;i++){

     autoslide[i].style.display="none";
  }

  autoslidenum3++

  if(autoslidenum3 > autoslide.length){

      autoslidenum3=1;
  }
autoslide[autoslidenum3-1].style.display="block";
 setTimeout(autoslideshow3,4000);
}


  /*Manual slide for special room */
  let slidenum4 = 1;
  showSlides4(slidenum4);
  
  function plusslides4(n) {
    showSlides4(slidenum4 += n);
  }
  
  function currentSlide4(n) {
    showSlides4(slidenum4 = n);
  }
  
  function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("specialroom");

    if (n > slides.length) 
    {slidenum4 = 1}    
    if (n < 1) 
    {slidenum4 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
   
    slides[slidenum4-1].style.display = "block";  
  
  }

    /*auto slide for special */

let autoslidenum4=0;
autoslideshow4();

function autoslideshow4(){

  let i;
  let autoslide=document.getElementsByClassName("specialroom");

  for(i=0;i<autoslide.length;i++){

     autoslide[i].style.display="none";
  }

  autoslidenum4++

  if(autoslidenum4 > autoslide.length){

      autoslidenum4=1;
  }
autoslide[autoslidenum4-1].style.display="block";
 setTimeout(autoslideshow4,4000);
}

