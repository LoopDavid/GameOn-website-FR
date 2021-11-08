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
const birthdateError = document.getElementById('birthdate-msg-error');
const quantity = document.getElementById('quantity');
const quantityError = document.getElementById('quantity-error-msg');
const loc = document.getElementById('loc').checked;
const locError = document.getElementById('loc-error-msg');
// const loc1 = document.getElementById('location1');
// const loc2 = document.getElementById('location2');
// const loc3 = document.getElementById('location3');
// const loc4 = document.getElementById('location4');
// const loc5 = document.getElementById('location5');
// const loc6 = document.getElementById('location6');
const locFormat = /^[0-9]$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// stop to close modal in submit modalBtn
document.getElementById('myForm').addEventListener('submit', function(e) {
e.preventDefault();
if (prenom.value.length <= 2) {
  prenomError.innerHTML="Veuillez mettre 3 caractères minimun";
  prenom.style.border = "2px solid red";
  return;
  } else {
    prenomError.innerHTML="";
    prenom.style.border = "2px solid green";

  }
  if (nom.value.length <= 2) {
    nomError.innerHTML="Veuillez entrer 3 caractères au minimun !";
    nom.style.border = "2px solid red";
    return;
  } else {
    nomError.innerHTML="";
    nom.style.border = "2px solid green";
  }
  if (email.value.match(emailFormat)) {
    email.style.border = "2px solid green";
    return true;
  } else {
    emailError.innerHTML="Veuillez entrer une adresse mail valide !";
    email.style.border = "2px solid red";
    console.log('email invalid');
  }
  if (birthdate.value.match(birthdateFormat)) {
    birthdate.style.border="2px solid green";
    return true;
  } else {
    birthdateError.innerHTML="Champ obligatoire !";
    birthdate.style.border ="2px solid red";
  }
  if (quantity.value >= 0 || quantity.value <= 99 || loc.value.match(locFormat)) {
    return true;
  } else {
    quantityError.innerHTML ="Veuillez composer des chiffre de 0 à 9 et entre 0 et 99.";
    quantity.style.border ="2px solid red";
  }
});

// close modal

close.addEventListener('click', () => {
  modalbg.style.display = "none";
});
