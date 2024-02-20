
// ------------VALIDATION----------------//
//----------validation's functions-----------
function isValidFirstName(name){
    const NameRegex = /^[a-zA-Z]+$/;
    return NameRegex.test(name);
}
function isValidLastName(name){
    const lastNameRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    return lastNameRegex.test(name);
}
function isValidEmail (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPhone(phone){
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phone);
}
function isValidPassword(password){
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}
function isValidDob(dob){
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    return dob <= oneYearAgo;
}
//----------validation for Sign up form-----------
const registrationForm = document.querySelector('#regForm');
const regiSubmit = (e) => {
  e.preventDefault()
  const firstNameInput = document.querySelector('#firstNameReg');
  const lastNameInput = document.querySelector('#lastNameReg');
  const emailInput = document.querySelector('#emailReg');
  const phoneNumberInput = document.querySelector('#phoneReg');
  const birthdateInput = document.querySelector('#dobReg');
  const passwordInput = document.querySelector('#passwordReg');
  const confPasswordInput = document.querySelector('#confPasswordReg');
  let errorMessage = '';
  if (!isValidFirstName(firstNameInput.value.trim())){
      errorMessage += '-Please enter a first name with english letters only.\n';
  }
  if (!isValidLastName(lastNameInput.value.trim())){
      errorMessage += '-Please enter a last name with english letters only.\n';
  }
  if (!isValidEmail(emailInput.value.trim())){
      errorMessage += '-Please enter a valid email.\n';
  }
  if (!isValidPhone(phoneNumberInput.value.trim())){
      errorMessage += '-Please enter a valid phone number.\n';
  }
  if (!isValidDob(new Date(birthdateInput.value.trim()))){
      errorMessage += '-Must be at least one year old.\n';
  }
  if (!isValidPassword(passwordInput.value.trim())){
      errorMessage += '-Please Enter a password with at least 8 characters - ' +
          'at least one number, an uppercase letter and a lowercase letter.\n';
  }
  if (passwordInput.value.trim() !== confPasswordInput.value.trim()){
      errorMessage += '-Passwords must be the same.\n';
  }

  if (errorMessage !== ''){
      alert(errorMessage);
  }
  else { //all the fields are valid
      alert('Registration completed successfully!');
      window.location.href = "makeAnAppointment.html"
  }
}

if (registrationForm){
    registrationForm.addEventListener('submit', regiSubmit)
}


//----------validation for Sign in form-----------
const logInForm = document.querySelector('#login')
const logInSubmit = (e) => {
    e.preventDefault()
    const logInEmailInput = document.querySelector('#logInEmail')
    const logInPasswordInput = document.querySelector('#logInPassword')
    let errorMessage = '';
    if (!isValidEmail(logInEmailInput.value.trim())){
        errorMessage += '-Please enter a valid email.\n';
    }
    if (!isValidPassword(logInPasswordInput.value.trim())){
      errorMessage += '-Please Enter a password with at least 8 characters - ' +
          'at least one number, an uppercase letter and a lowercase letter.\n';
   }
    if (errorMessage !== ''){
      alert(errorMessage);
    }
    else {//all the fields are valid
      window.location.href = "makeAnAppointment.html"
    }
}

if (logInForm){
    logInForm.addEventListener('submit',logInSubmit)
}

// ------------------validation for contact form------------------------------

const contactForm = document.querySelector('#contactForm')
const contactMsgSend = (e) => {
    e.preventDefault()
    const messageContactInput = document.querySelector('#msgCont')
    let errorMessage = '';
    if (messageContactInput.value.trim() === ''){
        errorMessage += 'Please enter a message\n';
    }
    if (errorMessage !== ''){
        alert(errorMessage);
    }
    else {//all the fields are valid
        alert('Message sent successfully!');
        window.location.reload()
    }
}

if (contactForm){
    contactForm.addEventListener('submit',contactMsgSend)
}

// ------------------------------------------------------------- //

// schedule an appointment from today
if (document.querySelector('#dateAppointment') !== null){
   const today = new Date().toISOString().split('T')[0];
    document.querySelector('#dateAppointment').min = today;
}

// ------------------ show find appointment's table -------------------//

function ShowAppointmentTable() {
    const x = document.querySelector('#find-appointment-Table');
    x.style.display = "block";
    return false;
}

// ----------------creating object------------
function User(firstName, lastName, email, phoneNumber, birthDate, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthDate = new Date(birthDate);
    this.password = password;
}
const user1 = new User('David','Ben Gurion', 'davidIsrael@gmail.com','0501948194','1886-09-16', 'David123');
// fill the fields in personalDetails
if (document.querySelector('#personalFName') !== null){
    document.querySelector('#personalFName').value = user1.firstName;
    document.querySelector('#personalLName').value = user1.lastName;
    document.querySelector('#personalPhone').value = user1.phoneNumber;
    document.querySelector('#personalDob').value = user1.birthDate.toISOString().split('T')[0];
    document.querySelector('#personalEmail').value = user1.email;
}
