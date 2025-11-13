
const validators = {
    str: {
        regex: /^[A-Za-z\s]+$/
    },
    email: {
        regex: /^[a-zA-Z0-9_-]+@(gmail|outlook|hotmail)\.com$/
    },
    phone: {
        regex: /^\+212[6-7]\d{8}$/
    },
    date: {
        regex: /\d{4}/
    },
    link: {
        regex:/^https\:\/\/[A-Za-z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/
    }
};




const errorMessages = {
    contact: {
        firstName: {
            empty: "Please enter your first name",
            invalid: "invalid input"
        },
        lastName: {
            empty: "Please enter your last name",
            invalid: "invalid input"
        },
        email: {
            empty: "Please enter your email",
            invalid: "invalid email format (example@gmail.com)"
        },
        address: {
            empty: "Please enter your address",
            invalid: "invalid input"
        },
        phone: {
            empty: "Please enter your phone number",
            invalid: "invalid phone format (+212612345678)"
        },
        photo: {
            empty: "Please add your photo",
            invalid: "Only types are accepted: jpg, jpeg, png, pdf"
        }
    },

    education: {
        school: {
            empty: "Please enter your first name",
            invalid: "invalid input"
        },
        diploma: {
            empty: "Please add your photo",
            invalid: "invalid input"
        },
        startYear: {
            empty: "Please enter your last name",
            invalid: "invalid date"
        },
        endYear: {
            empty: "Please enter your last name",
            invalid: "invalid date"
        },
        description: {
            empty: "Please enter your last name",
            invalid: "invalid input"
        }
    },

    experience: {
        company: {
            empty: "Please enter company name",
            invalid: "invalid input"
        },
        position: {
            empty: "Please add your position",
            invalid: "invalid input"
        },
        startYear: {
            empty: "invalid date",
            invalid: "invalid date"
        },
        endYear: {
            empty: "Please enter the date",
            invalid: "invalid date"
        },
        description: {
            empty: "Please fill this form",
            invalid: "invalid input"
        }
    },

    skills: {
        technical: {
            empty: "Please enter your technical skill"
        },
        soft: {
            empty: "Please select a soft skill"
        }
    },

    languages: {
        name: {
            empty: "Please enter your technical skill"
        },
        level: {
            empty: "Please select a soft skill"
        }
    },

    certification: {
        title: {
            empty: "Please enter your Certification title"
        },
        issuer: {
            empty: "Please enter your issuer"
        },
        year: {
            empty: "Please enter the year",
            invalid: "invalid date format (YYYY)"
        }
    },

    projects: {
        name: {
            empty: "Please enter your Certification title"
        },
        link: {
            empty: "Please enter your issuer"
        },
        description: {
            empty: "Please enter the year"
        }
    }
};




//contact information form
export function info_form_validation() {

    //take user input value form 1
    const info_first_name = document.getElementById("first-name").value.trim();
    const info_last_name = document.getElementById("last-name").value.trim();
    const info_email = document.getElementById("email").value.trim();
    const info_address = document.getElementById("address").value.trim();
    const info_phone = document.getElementById("phone").value.trim();
    const info_dropzone_file = document.getElementById('dropzone-file');



    // error areas form 1
    const info_photo_error_zone = document.getElementById('photo-error-zone');
    const info_first_name_error_zone = document.getElementById('first-name-error-zone');
    const info_last_name_error_zone = document.getElementById('last-name-error-zone');
    const info_email_error_zone = document.getElementById('email-error-zone');
    const info_phone_error_zone = document.getElementById('phone-error-zone');
    const info_address_error_zone = document.getElementById('address-error-zone');


    // Clear previous errors
    info_first_name_error_zone.textContent = "";
    info_last_name_error_zone.textContent = "";
    info_email_error_zone.textContent = "";
    info_address_error_zone.textContent = "";
    info_phone_error_zone.textContent = "";
    info_photo_error_zone.textContent = "";

    // const strRegex = /^[A-Za-z]$/
    let hasError = true;

    // Check all fields
    if (info_first_name === "") {
        info_first_name_error_zone.textContent = errorMessages.contact.firstName.empty;
        hasError = false;
    } else if (!validators.str.regex.test(info_first_name)) {

        info_first_name_error_zone.textContent = errorMessages.contact.firstName.invalid;
        hasError = false;

    }


    const fileName = document.getElementById('dropzone-file').value;
    let ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
    const file_types = ['jpg', 'jpeg', 'png', 'pdf'];


    if (info_dropzone_file.files.length === 0) {

        info_photo_error_zone.textContent = "Please add your photo"
        hasError = false;

    } else if (!file_types.includes(ext)) {

        info_photo_error_zone.textContent = "Only types are accepted: jped,jpg,pnd,pdf"
        hasError = false;

    }



    if (info_last_name === "") {
        info_last_name_error_zone.textContent = errorMessages.contact.lastName.empty;
        hasError = false;
    } else if (!validators.str.regex.test(info_last_name)) {

        info_last_name_error_zone.textContent = errorMessages.contact.lastName.invalid;
        hasError = false;

    }


    // const emailRegex = /^[a-zA-Z0-9_-]+@(gmail|outlook|hotmail)\.com$/;


    if (info_email === "") {
        info_email_error_zone.textContent = "Please enter your email";
        hasError = false;
    } else if (!validators.email.regex.test(info_email)) {

        info_email_error_zone.textContent = errorMessages.contact.email.invalid;
        hasError = false;
    }

    if (info_address === "") {
        info_address_error_zone.textContent = errorMessages.contact.address.empty;
        hasError = false;
    }


    const phoneRegex = /^\+212[6-7]\d{8}$/;

    if (info_phone === "") {
        info_phone_error_zone.textContent = errorMessages.contact.phone.empty;
        hasError = false;
    } else if (!validators.phone.regex.test(info_phone)) {
        info_phone_error_zone.textContent = errorMessages.contact.phone.invalid;
        hasError = false;
    }
    return hasError;
}
//education information form
export function edu_form_validation() {

    //take user input value form 2
    const edu_school = document.getElementById("school").value.trim();
    const edu_diploma = document.getElementById("degree").value.trim();
    const edu_start_year = document.getElementById("edu-start").value.trim();
    const edu_end_year = document.getElementById("edu-end").value.trim();
    const edu_description = document.getElementById("edu-description").value.trim();




    // error areas form 2
    const edu_school_error_zone = document.getElementById("school-error-zone");
    const edu_diploma_error_zone = document.getElementById("diploma-error-zone");
    const edu_start_year_error_zone = document.getElementById("start-year-error-zone");
    const edu_end_year_error_zone = document.getElementById("end-year-error-zone");
    const edu_description_error_zone = document.getElementById("education-description-error-zone");



    // Clear previous errors
    edu_school_error_zone.textContent = "";
    edu_diploma_error_zone.textContent = "";
    edu_start_year_error_zone.textContent = "";
    edu_end_year_error_zone.textContent = "";
    edu_description_error_zone.textContent = "";


    // const strRegex = /[A-Za-z]/;
    // const dateRegex = /\d{4}/;



    let hasError = true;

    // Check all fields
    if (edu_school === "") {

        edu_school_error_zone.textContent = errorMessages.education.school.empty;
        hasError = false;

    }


    if (edu_diploma === "") {

        edu_diploma_error_zone.textContent = errorMessages.education.diploma.empty
        hasError = false;

    } else if (!validators.str.regex.test(edu_diploma)) {
        edu_diploma_error_zone.textContent = errorMessages.education.diploma.invalid;
        hasError = false;
    }


    // Start year validation
    if (edu_start_year === "") {
        edu_start_year_error_zone.textContent = errorMessages.education.startYear.empty;
        hasError = true;
    } else if (!validators.date.regex.test(edu_start_year) || edu_start_year >= edu_end_year) {
        edu_start_year_error_zone.textContent = errorMessages.education.startYear.invalid;
        hasError = false;
    }

    // End year validation
    if (edu_end_year === "") {
        edu_end_year_error_zone.textContent = errorMessages.education.endYear.empty;
        hasError = true;
    } else if (!validators.date.regex.test(edu_end_year) || edu_start_year >= edu_end_year) {
        edu_end_year_error_zone.textContent = errorMessages.education.endYear.invalid;
        hasError = false;
    }



    if (edu_description === "") {

        edu_description_error_zone.textContent = errorMessages.education.description.empty;
        hasError = false;

    }
    return hasError
}
// Experience information form validation
export function exp_form_validation() {

    //take user input value form 3
    const exp_company = document.getElementById("company").value.trim();
    const exp_position = document.getElementById("position").value.trim();
    const exp_start_year = document.getElementById("exp-start").value.trim();
    const exp_end_year = document.getElementById("exp-end").value.trim();
    const exp_description = document.getElementById("exp-description").value.trim();



    // error areas form 3
    const company_error_zone = document.getElementById('company_error_zone');
    const position_error_zone = document.getElementById('position_error_zone');
    const exp_start_year_error_zone = document.getElementById('exp_start_year_error_zone');
    const exp_end_year_error_zone = document.getElementById('exp_end_year_error_zone');
    const exp_description_error_zone = document.getElementById('exp_description_error_zone');


    // Clear previous errors
    company_error_zone.textContent = "";
    position_error_zone.textContent = "";
    exp_start_year_error_zone.textContent = "";
    exp_end_year_error_zone.textContent = "";
    exp_description_error_zone.textContent = "";


    // const strRegex = /[A-Za-z]/;
    // const dateRegex = /\d{4}/;



    let hasError = true;

    // Check all fields
    if (exp_company === "") {

        company_error_zone.textContent = errorMessages.experience.company.empty;
        hasError = false;

    }


    if (exp_position === "") {

        position_error_zone.textContent = errorMessages.experience.position.empty
        hasError = false;

    } else if (!validators.str.regex.test(exp_position)) {

        position_error_zone.textContent = errorMessages.experience.position.invalid;
        hasError = false;

    }


    // Start year validation
    if (exp_start_year === "") {
        exp_start_year_error_zone.textContent = errorMessages.experience.startYear.empty;
        hasError = false;
    } else if (!validators.date.regex.test(exp_start_year) || exp_start_year >= exp_end_year) {
        exp_start_year_error_zone.textContent = errorMessages.experience.startYear.invalid;
        hasError = false;
    }

    // end year validation
    if (exp_end_year === "") {
        exp_end_year_error_zone.textContent = errorMessages.experience.endYear
    } else if (!validators.date.regex.test(exp_end_year) || exp_start_year >= exp_end_year) {
        exp_end_year_error_zone.textContent = errorMessages.experience.endYear.invalid
        hasError = false
    }

    if (exp_description === "") {

        exp_description_error_zone.textContent = errorMessages.experience.description.empty;
        hasError = false;

    }

    return hasError;
}
// Skills form validation
export function skills_form_validation() {
    const technical_skills = document.getElementById('technical-skills').value;
    const soft_skills = document.getElementById('soft-skills').value;
    const skills_list_error_zone = document.getElementById('skills-list-error-zone');
    const tech_skills_error_zone = document.getElementById('tech-skills-error-zone');


    // clear the error zone
    skills_list_error_zone.textContent = "";
    tech_skills_error_zone.textContent = "";


    // const strRegex = /^[A-Za-z]$/
    let hasError = true;

    // Check all fields
    if (technical_skills === "" || soft_skills === "") {
        tech_skills_error_zone.textContent = errorMessages.skills.technical.empty;
        skills_list_error_zone.textContent = errorMessages.skills.soft.empty;
        hasError = false;
    }

    return hasError;


}
// Languages form validation
export function languages_form_validation() {
    const language_name = document.getElementById('language-name').value;
    const language_level = document.getElementById('language-level').value;
    const language_name_error_zone = document.getElementById('language-name-error-zone');
    const language_level_error_zone = document.getElementById('language-level-error-zone');


    // clear the error zone
    language_level_error_zone.textContent = "";
    language_name_error_zone.textContent = "";


    // const strRegex = /^[A-Za-z]$/
    let hasError = true;

    // Check all fields
    if (language_name === "" || language_level === "") {
        language_name_error_zone.textContent = errorMessages.languages.name.empty;
        language_level_error_zone.textContent = errorMessages.languages.level.empty;
        hasError = false;
    } else if (!validators.str.regex.test(language_name) || !validators.str.regex.test(language_level)) {
        language_name_error_zone.textContent = errorMessages.languages.name.invalid;
        language_level_error_zone.textContent = errorMessages.languages.level.invalid;
        hasError = false;
    }


    return hasError;

}
// certification form validation
export function certification_form_validation() {
    // certification  form validation
    // user value 
    const cert_title = document.getElementById('cert-title').value;
    const cert_issuer = document.getElementById('cert-issuer').value;
    const cert_year = document.getElementById('cert-year').value;


    // error areas
    const cert_title_error_zone = document.getElementById('cert-title-error-zone')
    const cert_issuer_error_zone = document.getElementById('cert-issuer-error-zone')
    const cert_year_error_zone = document.getElementById('cert-year-error-zone')

    // clear error zone
    cert_title_error_zone.textContent = ""
    cert_issuer_error_zone.textContent = ""
    cert_year_error_zone.textContent = ""





    // const strRegex = /^[A-Za-z]$/
    // const dateRegex = /^\d{4}$/
    let hasError = true;

    // Check all fields
    if (cert_title === "") {
        cert_title_error_zone.textContent = errorMessages.certification.title.empty;
        hasError = false;
    }
    if (cert_issuer === "") {
        cert_issuer_error_zone.textContent = errorMessages.certification.issuer.empty;
        hasError = false;
    }
    if (cert_year === '') {
        cert_year_error_zone.textContent = errorMessages.certification.year.empty;
        hasError = false;
    } else if (!validators.date.regex.test(Number(cert_year))) {
        cert_year_error_zone.textContent = errorMessages.certification.year.invalid;
        hasError = false;
    }

    return hasError;




}
// projects form validation
export function projects_form_validation() {

    // projects  form validation
    // user value 
    const project_name = document.getElementById('project-name').value;
    const project_link = document.getElementById('project-link').value;
    const project_desc = document.getElementById('project-desc').value;


    // error areas
    const project_name_error_zone = document.getElementById('project_name_error_zone')
    const project_link_error_zone = document.getElementById('project_link_error_zone')
    const project_desc_error_zone = document.getElementById('project_desc_error_zone')

    // clear error zone
    project_name_error_zone.textContent = ""
    project_link_error_zone.textContent = ""
    project_desc_error_zone.textContent = ""





    //  const strRegex = /^[A-Za-z]$/
    //  const dateRegex = /^\d{4}$/
    let hasError = true;

    // Check all fields
    if (project_name === "") {
        project_name_error_zone.textContent = errorMessages.projects.name.empty;
        hasError = false;
    }
    if (project_link === "") {
        project_link_error_zone.textContent = errorMessages.projects.link.empty;
        hasError = false;
    } else if (!validators.link.regex.test(project_link)) {
        project_link_error_zone.textContent = errorMessages.projects.link.invalid;
        hasError = false;
    }
    if (project_desc === '') {
        project_desc_error_zone.textContent = errorMessages.projects.description.empty
        hasError = false;
    }

    
    return hasError;
}



