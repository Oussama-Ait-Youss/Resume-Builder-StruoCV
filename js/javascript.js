import { info_form_validation, skills_form_validation } from "./form-validation.js"
import { edu_form_validation } from "./form-validation.js"
import { exp_form_validation } from "./form-validation.js"
import { certification_form_validation } from "./form-validation.js"
import { languages_form_validation } from "./form-validation.js"
import { projects_form_validation } from "./form-validation.js"
import { save_data_localstorage } from "../js/save_data_localstorage.js"




const forms = document.querySelectorAll('.form-one, .form-two, .form-three, .form-four, .form-five, .form-six, .form-seven, .form-final');
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

// replace the upload input place with the photo

const fileInput = document.getElementById('dropzone-file');
const previewImage = document.getElementById('preview-image');
const uploadUi = document.getElementById('upload-ui');

fileInput.addEventListener('change', function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewImage.classList.remove('hidden');
      uploadUi.classList.add('hidden');
    };

    reader.readAsDataURL(file);
  }
});


// function to activate the step in the progress bar
function activateStep(stepIndex) {
  const steps = document.querySelectorAll('ol li');

  steps.forEach((li, index) => {
    const circle = li.querySelector('div > div'); // the circle div
    const number = li.querySelector('div > div > span'); // the number inside the circle
    const label = li.querySelector('span.mt-2'); // the step label

    if (index <= stepIndex) {
      //  Active or completed step
      li.classList.add('text-blue-600');
      circle.classList.replace('bg-gray-100', 'bg-blue-100');
      number.classList.replace('text-gray-700', 'text-blue-700');
      label.classList.replace('text-gray-500', 'text-blue-600');

      // Change connecting line color to blue (Tailwind)
      li.classList.remove('after:border-gray-200');
      li.classList.add('after:border-blue-500');

    } else {
      //  Inactive step
      li.classList.remove('text-blue-600');
      circle.classList.replace('bg-blue-100', 'bg-gray-100');
      number.classList.replace('text-blue-700', 'text-gray-700');
      label.classList.replace('text-blue-600', 'text-gray-500');

      // Change connecting line color back to gray
      li.classList.remove('after:border-blue-500');
      li.classList.add('after:border-gray-200');
    }
  });
}





// Attach listeners to all next buttons
nextBtns.addEventListener('click', (e) => {
  e.preventDefault();

  const hasSkills = document.querySelectorAll('skills-list li')
  const hasLanguage = document.querySelectorAll('language-list li')
  const upload_photo = document.getElementById('upload_photo')
  const fileName = document.getElementById('dropzone-file').value;
  const preview_image = document.getElementById('preview-image')






  if (fileName.files) {

    preview_image.src = fileName.files.name;
    preview_image.classList.remove('hidden');
    upload_photo.classList.add('hidden');

  }

  let valid = false;
  if (currentForm == 0) {
    valid = info_form_validation();
    save_data_localstorage();
    fillCVTemplate();
  } else if (currentForm == 1) {
    valid = edu_form_validation();
    save_data_localstorage();
    fillCVTemplate();
  } else if (currentForm == 2) {
    valid = exp_form_validation();
    save_data_localstorage();
    fillCVTemplate();
  } else if (currentForm == 3) {
    valid = skills_form_validation() || hasSkills;
    save_data_localstorage();
    fillCVTemplate();
  } else if (currentForm == 4) {
    valid = languages_form_validation() || hasLanguage
    save_data_localstorage();
    fillCVTemplate();
  } else if (currentForm == 5) {
    // code
    valid = certification_form_validation();
    save_data_localstorage();
    fillCVTemplate();
  } else if (currentForm == 6) {
    // code
    valid = projects_form_validation();
    save_data_localstorage();
    fillCVTemplate();
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      nextBtn.classList.add('hidden');
    }
  } else if (currentForm == 7) {
    // code
    fillCVTemplate();
  }






  // Otherwise → go to next form
  if (currentForm < forms.length - 1) {
    currentForm++;
    activateStep(currentForm);
    updateForm();
  }


});


// Attach listeners to all previous buttons
prevBtns.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentForm > 0) {
    currentForm--;
    activateStep(currentForm)
    updateForm();
  }
});

updateForm();




// add language in the list of language-list as badge.

const btn_add_lang = document.getElementById('btn_add_lang');

btn_add_lang.addEventListener('click', (e) => {
  const language_name = document.getElementById('language-name').value;
  const language_level = document.getElementById('language-level').value;
  const language_list = document.getElementById('language-list');

  const li = document.createElement('li');
  li.className = "w-full flex flex-col";

  li.innerHTML = `
        <div class="flex items-center justify-between w-full bg-green-100 text-green-900 p-2 m-2 rounded-lg shadow-sm">
            <span class="font-medium">Language: ${language_name} <br> Level: ${language_level}</span>
            <div class="flex gap-2">
                <button class="lang-modify-btn px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Modify</button>
                <button class="lang-delete-btn px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700">Delete</button>
            </div>
        </div>
    `;
  // Attach delete functionality
  li.querySelector('.lang-delete-btn').addEventListener('click', () => li.remove());

  // Attach modify functionality
  li.querySelector('.lang-modify-btn').addEventListener('click', () => {
    document.getElementById('language-name').value = language_name;
    document.getElementById('language-level').value = language_level;
    li.remove(); // Optional: remove current entry while editing
  });
  language_list.appendChild(li);

  document.getElementById('language-name').value = "";
  document.getElementById('language-level').value = "";
})




// add skills in the list of skills-list as badge.

const btn_skill_add = document.getElementById('btn-skill-add');
const technicalInput = document.getElementById('technical-skills');
const softInput = document.getElementById('soft-skills');
const skills_list = document.getElementById('skills-list');

btn_skill_add.addEventListener('click', (e) => {
  e.preventDefault();

  const techSkill = technicalInput.value.trim();
  const softSkill = softInput.value.trim();

  if (!techSkill && !softSkill) return;

  // Create list item
  const li = document.createElement('li');
  li.className = "w-full flex flex-col";

  li.innerHTML = `
        <div class="flex items-center justify-between w-full bg-green-100 text-green-900 p-2 m-2 rounded-lg shadow-sm">
            <span class="font-medium">Tech Skills: ${techSkill} <br> Soft Skills: ${softSkill}</span>
            <div class="flex gap-2">
                <button class="modify-btn px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Modify</button>
                <button class="delete-btn px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700">Delete</button>
            </div>
        </div>
    `;

  // Attach delete functionality
  li.querySelector('.delete-btn').addEventListener('click', () => li.remove());

  // Attach modify functionality
  li.querySelector('.modify-btn').addEventListener('click', () => {
    technicalInput.value = techSkill;
    softInput.value = softSkill;
    li.remove(); // Optional: remove current entry while editing
  });

  skills_list.appendChild(li);

  // Clear inputs
  technicalInput.value = "";
  softInput.value = "";
});





// form dynamic
const add_btn = document.getElementById('add_btn')
const form_div = document.getElementById('form_div')
add_btn.addEventListener('click', () => {
  form_div.innerHTML += `
                        <div>
                            <label class="block font-medium mb-1">Company Name:</label>
                            <input type="text" id="company" placeholder="Enter your company name..."
                                class="w-full border border-gray-300 rounded-lg p-2">
                            <span id="company_error_zone" class="text-red-600"></span>
                        </div>
                        <div>
                            <label class="block font-medium mb-1">Position:</label>
                            <input type="text" id="position" placeholder="Enter your position..."
                                class="w-full border border-gray-300 rounded-lg p-2">
                            <span id="position_error_zone" class="text-red-600"></span>
                        </div>
                        <div>
                            <label class="block font-medium mb-1">Start Year:</label>
                            <input type="text" id="exp-start" placeholder="Enter your position..."
                                class="w-full border border-gray-300 rounded-lg p-2">
                            <span id="exp_start_year_error_zone" class="text-red-600"></span>
                        </div>
                        <div>
                            <label class="block font-medium mb-1">End Year:</label>
                            <input type="text" id="exp-end" placeholder="Enter your position..."
                                class="w-full border border-gray-300 rounded-lg p-2">
                            <span id="exp_end_year_error_zone" class="text-red-600"></span>
                        </div>


                        <div class="col-span-2">
                            <label class="block font-medium mb-1">Description</label>
                            <textarea id="exp-description" rows="3" placeholder="Optional description..."
                                class="w-full border border-gray-300 rounded-lg p-2"></textarea>
                            <span id="exp_description_error_zone" class="text-red-600"></span>
                        </div>
                    </div >
    `
})











// function to fill cvtemplate in html
function fillCVTemplate() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  // Personal info
  document.getElementById("cv-name").textContent = `${user.info.firstName} ${user.info.lastName}`;
  document.getElementById("cv-email").textContent = user.info.email;
  document.getElementById("cv-phone").textContent = user.info.phone;
  document.getElementById("cv-address").textContent = user.info.address;

  document.getElementById("cv-image").src = previewImage.src;


  // Education
  document.getElementById("cv-edu-school").textContent = user.education.school;
  document.getElementById("cv-edu-degree").textContent = user.education.diploma;
  document.getElementById("cv-edu-years").textContent = `${user.education.start} - ${user.education.end}`;
  document.getElementById("cv-edu-desc").textContent = user.education.description;

  // Experience
  document.getElementById("cv-exp-company").textContent = user.experience.company;
  document.getElementById("cv-exp-position").textContent = user.experience.position;
  document.getElementById("cv-exp-years").textContent = `${user.experience.start} - ${user.experience.end}`;
  document.getElementById("cv-exp-desc").textContent = user.experience.description;

  // Skills
  document.getElementById("cv-skills-technical").textContent = `Technical: ${user.skills.technical}`;
  document.getElementById("cv-skills-soft").textContent = `Soft: ${user.skills.soft}`;

  // Languages
  document.getElementById("cv-languages").textContent = `${user.languages.name} - ${user.languages.level}`;

  // Certificates
  document.getElementById("cv-cert-title").textContent = user.certificates.title;
  document.getElementById("cv-cert-issuer").textContent = user.certificates.issuer;
  document.getElementById("cv-cert-year").textContent = user.certificates.year;

  // Projects
  document.getElementById("cv-project-name").textContent = user.projects.name;
  document.getElementById("cv-project-link").setAttribute('href', user.projects.link);
  document.getElementById("cv-project-link").textContent = user.projects.link;
  document.getElementById("cv-project-desc").textContent = user.projects.description;
}

// ###########################
// Add click event to generate PDF
document.getElementById("export-pdf").addEventListener("click", (e) => {
  e.preventDefault();
  fillCVTemplate();

  const element = document.getElementById("cv-template");


  const options = {
    filename: "my-cv.pdf",
    margin: 0,
    image: { type: "pdf", quality: 1 },
    html2canvas: { scale: 1, useCORS: true, scrollY: 0 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    enableLinks: true,
  };

  html2pdf().set(options).from(element).save().then(() => {
  });
});












