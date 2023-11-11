document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
  
    window.location.href = "http://127.0.0.1:5500/Mon%20compte/Porfil,%20Inventaire/index.html";
  });
 
  
  document.getElementById("myForm2").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name2 = document.getElementById("name2").value;
    var email2 = document.getElementById("email2").value;
    var phone2 = document.getElementById("phone2").value;
  
    localStorage.setItem("name2", name2);
    localStorage.setItem("email2", email2);
    localStorage.setItem("phone2", phone2);
  
    window.location.href = "http://127.0.0.1:5500/Mon%20compte/Porfil,%20Inventaire/index.html";
  });