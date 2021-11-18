function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector('.close');
const prenom = document.getElementById('prenom');
const prenomError = document.getElementById('prenom-error-msg');
const nom = document.getElementById('nom');
const nomError = document.getElementById('nom-error-msg');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error-msg');
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const birthdateFormat = /^\d{2}-\d{2}-\d{4}$/;
const birthdate = document.getElementById('birthdate');
const birthdateError = document.getElementById('birthdate-error-msg');
const quantity = document.getElementById('quantity');
const quantityError = document.getElementById('quantity-error-msg');
const loc = document.querySelectorAll('input[name="location"]');
const locError = document.getElementById('loc-error-msg');
let locCheck = false;
const rgpd = document.getElementById('rgpd');
const rgpdError = document.getElementById('rgpd-error-msg');
let rgpdCheck = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// stop to close modal in submit modalBtn
document.getElementById('myForm').addEventListener('submit', function(e) {
e.preventDefault();
  if (prenom.value.length >= 2) {
    prenomError.innerHTML="";
    prenom.style.border = "2px solid green";
  } else {
    prenomError.innerHTML="Veuillez mettre 2 caractères minimun";
    prenom.style.border = "2px solid red";
  }

  if (nom.value.length >= 2) {
    nomError.innerHTML="";
    nom.style.border = "2px solid green";
  } else {
    nomError.innerHTML="Veuillez entrer 2 caractères au minimun !";
    nom.style.border = "2px solid red";
    
  }

  if (email.value.match(emailFormat)) {
    email.style.border="2px solid green";
    emailError.innerHTML="";
  } else {
    emailError.innerHTML="Veuillez entrer une adresse mail valide !";
    email.style.border = "2px solid red";
    console.log('email invalid');
  }

  if (birthdate.value.length > 0) {
    birthdate.style.border="2px solid green";
    birthdateError.innerHTML="";
  } else {
    birthdateError.innerHTML="Veuillez une date au format suivant jj/mm/aaaa";
    birthdate.style.border ="2px solid red";
  }
  
  if (quantity.value.length >= 1 && quantity.value >= 0 && quantity.value <= 99) {
    quantity.style.border="2px solid green";
    quantityError.innerHTML="";
  } else {
    quantityError.innerHTML="Veuillez entrer un nombre entre 0 et 99 !";
    quantity.style.border ="2px solid red";
  }
  
  for (let i = 0; i < loc.length; i++) {
  locCheck = (loc[i].checked || locCheck) ;
  }
  if (locCheck) {
    locError.innerHTML="";
  } else {
    locError.innerHTML="Vous devez choisir une option.";
  }
  
  for (let i = 0; i < rgpd.length; i++) {
    locCheck = (rgpd[i].checked || rgpdCheck) ;
    }
    if (locCheck) {
      rgpdError.innerHTML="";
    } else {
      rgpdError.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions.";
    }
});
// Validate Form 


function validate() {

};



// close modal
close.addEventListener('click', () => {
  modalbg.style.display = "none";
});
