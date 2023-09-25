
function openPage(pageName,elmnt,color) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var x;
    for (x = 0; x < dropdowns.length; x++) {
      var openDropdown = dropdowns[x];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function senDcode() {
  var checkmail = document.getElementById('tel-mail');
  var checkValue = checkmail.value;

  if(!checkValue){
    alert("Please enter your E-mail or Phone");
  }
  else {
    alert("Your code is 22606");
  }
}

//make sure the blank must have data
function checkValue() {
      var checkmail = document.getElementById('tel-mail');
      var checkValue = checkmail.value;

      var checkCode = document.getElementById('verifycode');
      var checkValueOfCode = checkCode.value

      var checkVerifyCode = document.getElementById('verifycode2');
      var checkVerifyCode2 = checkVerifyCode.value;

  
      if(!checkValue) {
        alert("Incorrect E-mail or Phone");
        return false;
      }
      else if(checkValueOfCode != 22606){
        alert("Incorrect Code");
        return false;
      }
      else if(checkVerifyCode2 != 33470){
        alert("Incorrect verification code");
        return false;
      }else{
        window.location.href = "reset.html";
      }
}

//show it successfully submit
function submit(){
  
  alert("Password Changed Successfully");
 
}
