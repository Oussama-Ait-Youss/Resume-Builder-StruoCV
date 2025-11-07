






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


    let hasError = true;

    // Check all fields
    if (info_first_name === "") {
        info_first_name_error_zone.textContent = "Please enter your first name";
        hasError = false;
    }

    if (info_dropzone_file.files.length === 0) {
        info_photo_error_zone.textContent = "Please add your photo"
        hasError = false;
    }

    if (info_last_name === "") {
        info_last_name_error_zone.textContent = "Please enter your last name";
        hasError = false;
    }


    const emailRegex = /^[a-zA-Z0-9_-]+@(gmail|outlook|hotmail)\.com$/;


    if (info_email === "") {
        info_email_error_zone.textContent = "Please enter your email";
        hasError = false;
    } else if (!emailRegex.test(info_email)) {

        info_email_error_zone.textContent = "invalid email format (example@gmail.com)";
        hasError = false;
    }

    if (info_address === "") {
        info_address_error_zone.textContent = "Please enter your address";
        hasError = false;
    }


    const phoneRegex = /^\+212[6-7]\d{8}$/;

    if (info_phone === "") {
        info_phone_error_zone.textContent = "Please enter your phone number";
        hasError = false;
    } else if (!phoneRegex.test(info_phone)) {
        info_phone_error_zone.textContent = "invalide phone format (+212612345678)";
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


    const strRegex = /[A-Za-z]/;
    const dateRegex = /\d{4}/;



    let hasError = true;

    // Check all fields
    if (edu_school === "") {

        edu_school_error_zone.textContent = "Please enter your first name";
        hasError = false;

    }


    if (edu_diploma === "") {

        edu_diploma_error_zone.textContent = "Please add your photo"
        hasError = false;

    } else if (!strRegex.test(edu_diploma)) {
        edu_diploma_error_zone.textContent = "invalide input";
        hasError = false;
    }


    if (edu_start_year === "") {

        edu_start_year_error_zone.textContent = "Please enter your last name";
        hasError = false;

    } else if (!dateRegex.test(Number(edu_start_year))) {
        edu_start_year_error_zone.textContent = "invalide date ";
        hasError = false;
    }


    if (edu_end_year === "") {

        edu_end_year_error_zone.textContent = "Please enter your last name";
        hasError = false;

    } else if (!dateRegex.test(Number(edu_end_year))) {
        edu_end_year_error_zone.textContent = "invalide date";
        hasError = false;
    }

    if (edu_description === "") {

        edu_description_error_zone.textContent = "Please enter your last name";
        hasError = false;

    } else if (!strRegex.test(edu_description)) {

        edu_description.textContent = "invalide input";
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


    const strRegex = /[A-Za-z]/;
    const dateRegex = /\d{4}/;



    let hasError = true;

    // Check all fields
    if (exp_company === "") {

        company_error_zone.textContent = "Please enter company name";
        hasError = false;

    }


    if (exp_position === "") {

        position_error_zone.textContent = "Please add your position"
        hasError = false;

    }


    if (exp_start_year === "") {

        exp_start_year_error_zone.textContent = "invalide date";
        hasError = false;

    } else if (!dateRegex.test(Number(exp_start_year))) {
        exp_start_year_error_zone.textContent = "invalide date format";
        hasError = false;
    }


    if (exp_end_year === "") {

        exp_end_year_error_zone.textContent = "Please enter the date ";
        hasError = false;

    } else if (!dateRegex.test(Number(exp_end_year))) {
        exp_end_year_error_zone.textContent = "invalide date format";
        hasError = false;
    }

    if (exp_description === "") {

        exp_description_error_zone.textContent = "Please fill this form";
        hasError = false;

    } else if (!strRegex.test(exp_description)) {

        exp_description_error_zone.textContent = "invalide input";
        hasError = false;

    }





    return hasError;
}
