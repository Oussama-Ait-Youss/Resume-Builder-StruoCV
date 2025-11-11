// #############################################

function save_data_localstorage() {


  // contact info
  const info_first_name = document.getElementById("first-name").value.trim();
  const info_last_name = document.getElementById("last-name").value.trim();
  const info_email = document.getElementById("email").value.trim();
  const info_address = document.getElementById("address").value.trim();
  const info_phone = document.getElementById("phone").value.trim();
  const info_dropzone_file = document.getElementById('dropzone-file');

  // education info
  const edu_school = document.getElementById("school").value.trim();
  const edu_diploma = document.getElementById("degree").value.trim();
  const edu_start_year = document.getElementById("edu-start").value.trim();
  const edu_end_year = document.getElementById("edu-end").value.trim();
  const edu_description = document.getElementById("edu-description").value.trim();


  // experience info
  const exp_company = document.getElementById("company").value.trim();
  const exp_position = document.getElementById("position").value.trim();
  const exp_start_year = document.getElementById("exp-start").value.trim();
  const exp_end_year = document.getElementById("exp-end").value.trim();
  const exp_description = document.getElementById("exp-description").value.trim();




  // skills info
  const technical_skills = document.getElementById('technical-skills').value;
  const soft_skills = document.getElementById('soft-skills').value;
  const skills_list_error_zone = document.getElementById('skills-list-error-zone');
  const tech_skills_error_zone = document.getElementById('tech-skills-error-zone');




  // language info
  const language_name = document.getElementById('language-name').value;
  const language_level = document.getElementById('language-level').value;
  const language_name_error_zone = document.getElementById('language-name-error-zone');
  const language_level_error_zone = document.getElementById('language-level-error-zone');



  // certification info
  const cert_title = document.getElementById('cert-title').value;
  const cert_issuer = document.getElementById('cert-issuer').value;
  const cert_year = document.getElementById('cert-year').value;



  // projects info
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