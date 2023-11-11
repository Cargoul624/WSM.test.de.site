document.addEventListener("DOMContentLoaded", function() {
    var name = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
  
    var resultDiv = document.getElementById("result");

    var h2Name = document.createElement("h2");
    var h3Name = document.createElement("h3");
    h2Name.textContent = "Nom :";
    h3Name.textContent = name;
    resultDiv.appendChild(h2Name);
    resultDiv.appendChild(h3Name);
  
    var h2Email = document.createElement("h2");
    var h3Email = document.createElement("h3");
    h2Email.textContent = "E-mail :";
    h3Email.textContent = email;
    resultDiv.appendChild(h2Email);
    resultDiv.appendChild(h3Email);
  
    var h2Phone = document.createElement("h2");
    var h3Phone = document.createElement("h3");
    h2Phone.textContent = "Numéro de téléphone :";
    h3Phone.textContent = phone;
    resultDiv.appendChild(h2Phone);
    resultDiv.appendChild(h3Phone);
  });



document.addEventListener("DOMContentLoaded", function() {
    var name2 = localStorage.getItem("name2");
    var email2 = localStorage.getItem("email2");
    var phone2 = localStorage.getItem("phone2");
  
    var resultDiv = document.getElementById("result2");

    var h2Name = document.createElement("h2");
    var h3Name = document.createElement("h3");
    h2Name.textContent = "Nom :";
    h3Name.textContent = name2;
    resultDiv.appendChild(h2Name);
    resultDiv.appendChild(h3Name);
  
    var h2Email = document.createElement("h2");
    var h3Email = document.createElement("h3");
    h2Email.textContent = "E-mail :";
    h3Email.textContent = email2;
    resultDiv.appendChild(h2Email);
    resultDiv.appendChild(h3Email);
  
    var h2Phone = document.createElement("h2");
    var h3Phone = document.createElement("h3");
    h2Phone.textContent = "Numéro de téléphone :";
    h3Phone.textContent = phone2;
    resultDiv.appendChild(h2Phone);
    resultDiv.appendChild(h3Phone);
  });