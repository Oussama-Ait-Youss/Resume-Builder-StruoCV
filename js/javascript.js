import { info_form_validation, skills_form_validation } from "./form-validation.js"
import { edu_form_validation } from "./form-validation.js"
import { exp_form_validation } from "./form-validation.js"
import { certification_form_validation } from "./form-validation.js"
import { languages_form_validation } from "./form-validation.js"
import { projects_form_validation } from "./form-validation.js"





// #############################################

function save_data_localstorage() {
  const info_first_name = document.getElementById("first-name").value.trim();
  const info_last_name = document.getElementById("last-name").value.trim();
  const info_email = document.getElementById("email").value.trim();
  const info_address = document.getElementById("address").value.trim();
  const info_phone = document.getElementById("phone").value.trim();
  const info_dropzone_file = document.getElementById('dropzone-file');

  const edu_school = document.getElementById("school").value.trim();
  const edu_diploma = document.getElementById("degree").value.trim();
  const edu_start_year = document.getElementById("edu-start").value.trim();
  const edu_end_year = document.getElementById("edu-end").value.trim();
  const edu_description = document.getElementById("edu-description").value.trim();

  const exp_company = document.getElementById("company").value.trim();
  const exp_position = document.getElementById("position").value.trim();
  const exp_start_year = document.getElementById("exp-start").value.trim();
  const exp_end_year = document.getElementById("exp-end").value.trim();
  const exp_description = document.getElementById("exp-description").value.trim();


  const technical_skills = document.getElementById('technical-skills').value;
  const soft_skills = document.getElementById('soft-skills').value;
  const skills_list_error_zone = document.getElementById('skills-list-error-zone');
  const tech_skills_error_zone = document.getElementById('tech-skills-error-zone');

  const language_name = document.getElementById('language-name').value;
  const language_level = document.getElementById('language-level').value;
  const language_name_error_zone = document.getElementById('language-name-error-zone');
  const language_level_error_zone = document.getElementById('language-level-error-zone');

  const cert_title = document.getElementById('cert-title').value;
  const cert_issuer = document.getElementById('cert-issuer').value;
  const cert_year = document.getElementById('cert-year').value;

  const project_name = document.getElementById('project-name').value;
  const project_link = document.getElementById('project-link').value;
  const project_desc = document.getElementById('project-desc').value;





  let user = {
    info: {
      firstName: info_first_name,
      lastName: info_last_name,
      email: info_email,
      address: info_address,
      phone: info_phone,
      image: info_dropzone_file.files?.[0] ? info_dropzone_file.files[0].name : null
    },

    education: {
      school: edu_school,
      diploma: edu_diploma,
      start: edu_start_year,
      end: edu_end_year,
      description: edu_description
    },

    experience: {
      company: exp_company,
      position: exp_position,
      start: exp_start_year,
      end: exp_end_year,
      description: exp_description
    },

    skills: {
      technical: technical_skills,
      soft: soft_skills
    },

    languages: {
      name: language_name,
      level: language_level
    },

    certificates: {
      title: cert_title,
      issuer: cert_issuer,
      year: cert_year
    },

    projects: {
      name: project_name,
      link: project_link,
      description: project_desc
    }
  };

  localStorage.setItem("user", JSON.stringify(user));
}
// #############################################






const forms =
  document.querySelectorAll('.form-one, .form-two, .form-three, .form-four, .form-five, .form-six, .form-seven, .form-final');
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


// Attach listeners to all next buttons
nextBtns.addEventListener('click', (e) => {



  e.preventDefault();

  const hasSkills = document.querySelectorAll('skills-list li')
  const hasLanguage = document.querySelectorAll('language-list li')
  const upload_photo = document.getElementById('upload_photo')
  const fileName = document.getElementById('dropzone-file').value;
  const preview_image = document.getElementById('preview-image')

  function activateStep(stepIndex) {
    const steps = document.querySelectorAll('ol li');

    steps.forEach((li, index) => {
      const span = li.querySelector('span');

      if (index === stepIndex) {
        // ✅ Active step
        li.classList.add('text-blue-600');
        span.classList.add('border-blue-600', 'text-blue-600');
      } else {
        // ✅ Remove active from others
        li.classList.remove('text-blue-600');
        span.classList.remove('border-blue-600', 'text-blue-600');
      }
    });
  }





  if (fileName.files) {

    preview_image.src = fileName.files.name;
    preview_image.classList.remove('hidden');
    upload_photo.classList.add('hidden');

  }

  let valid = false;
  if (currentForm == 0) {
    valid = info_form_validation();
  } else if (currentForm == 1) {
    valid = edu_form_validation();
  } else if (currentForm == 2) {
    valid = exp_form_validation();
  } else if (currentForm == 3) {
    valid = skills_form_validation() || hasSkills;
  } else if (currentForm == 4) {
    valid = languages_form_validation() || hasLanguage
  } else if (currentForm == 5) {
    // code
    valid = certification_form_validation();
  } else if (currentForm == 6) {
    // code
    valid = projects_form_validation();
  } else if (currentForm == 7) {
    // code
    save_data_localstorage();
  }







  // Otherwise → go to next form
  if (currentForm < forms.length - 1) {
    currentForm++;
    console.log(currentForm)
    activateStep(currentForm);
    updateForm();
  }


});

// save data in localstorage

// Attach listeners to all previous buttons
prevBtns.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentForm > 0) {
    currentForm--;
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






