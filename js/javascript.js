



const forms = document.querySelectorAll('.form-one, .form-two, .form-three, .form-four, .form-final');
let currentForm = 0;

// Select ALL next and previous buttons
const nextBtns = document.querySelectorAll('#next-btn');
const prevBtns = document.querySelectorAll('#pre-btn');

function updateForm() {
  forms.forEach((form, index) => {
    form.classList.add('visible_section');
    if (index === currentForm) {
      form.classList.remove('visible_section');
    }
  });
}

// Attach listeners to all next buttons
nextBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    //take use input value
    const first_name = document.getElementById("first-name").value.trim();
    const last_name = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dropzone_file = document.getElementById('dropzone-file');

    // error areas
    const photo_error_zone = document.getElementById('photo-error-zone');
    const first_name_error_zone = document.getElementById('first-name-error-zone');
    const last_name_error_zone = document.getElementById('last-name-error-zone');
    const email_error_zone = document.getElementById('email-error-zone');
    const phone_error_zone = document.getElementById('phone-error-zone');
    const address_error_zone = document.getElementById('address-error-zone');


    // Clear previous errors
    first_name_error_zone.textContent = "";
    last_name_error_zone.textContent = "";
    email_error_zone.textContent = "";
    address_error_zone.textContent = "";
    phone_error_zone.textContent = "";
    photo_error_zone.textContent = "";


    let hasError = false;

    // ✅ Check all fields
    if (first_name === "") {
      first_name_error_zone.textContent = "Please enter your first name";
      hasError = true;
    }

    if (dropzone_file.files.length === 0) {
      photo_error_zone.textContent = "Please add your photo"
      hasError = true;
    }

    if (last_name === "") {
      last_name_error_zone.textContent = "Please enter your last name";
      hasError = true;
    }


    const emailRegex = /^[a-zA-Z0-9_-]+@(gmail|outlook|hotmail)\.com$/;


    if (email === "") {
      email_error_zone.textContent = "Please enter your email";
      hasError = true;
    }else if (!emailRegex.test(email)) {
      
      email_error_zone.textContent = "invalid email format (example@gmail.com)";
      hasError = true;
    }

    if (address === "") {
      address_error_zone.textContent = "Please enter your address";
      hasError = true;
    }


    const phoneRegex = /^\+212[6-7]\d{8}$/;

    if (phone === "") {
      phone_error_zone.textContent = "Please enter your phone number";
      hasError = true;
    }else if(!phoneRegex.test(phone)){
      phone_error_zone.textContent = "invalide phone format (+212612345678)";
      hasError = true;
    }

    // If errors exist → don't move
    if (hasError) return;

    // Otherwise → go to next form
    if (currentForm < forms.length - 1) {
      currentForm++;
      updateForm();
    }

  });
});

// Attach listeners to all previous buttons
prevBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentForm > 0) {
      currentForm--;
      updateForm();
    }
  });
});

updateForm();


// validation de form 




nextBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (first_name === "") {
      error_zone.innerHTML = "please fill this section";
    }






  });
});





