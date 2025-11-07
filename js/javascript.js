import {info_form_validation} from "./form-validation.js"
import {edu_form_validation} from "./form-validation.js"
import {exp_form_validation} from "./form-validation.js"

const forms = document.querySelectorAll('.form-one, .form-two, .form-three, .form-four, .form-final');
let currentForm = 0;

// Select ALL next and previous buttons
const nextBtns = document.getElementById('next-btn');
const prevBtns = document.getElementById('pre-btn');

function updateForm() {
  forms.forEach((form, index) => {
    form.classList.add('visible_section');
    if (index === currentForm) {
      form.classList.remove('visible_section');
    }
  });
}

// Attach listeners to all next buttons
nextBtns.addEventListener('click', (e) => {
    e.preventDefault();
     
    
    let valid = false;
    if (currentForm == 0) {
      valid = info_form_validation();
    } else if (currentForm == 1) {
      valid = edu_form_validation();
    } else if (currentForm == 2) {
      valid = exp_form_validation();
    }
    
    // Otherwise → go to next form
    if (valid && currentForm < forms.length - 1) {
      currentForm++;
      console.log(currentForm)

      updateForm();
    }

  });


// Attach listeners to all previous buttons
prevBtns.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentForm > 0) {
      currentForm--;
      updateForm();
    }
  });

updateForm();


// validation de form 




// nextBtns.addEventListener('click', (e) => {
//     e.preventDefault();

//     if (first_name === "") {
//       error_zone.innerHTML = "please fill this section";
//     }






//   });





