// SummerHomeworkscript.js

//global error flag
let errorFlag = 0;


function updateSliderValue() {
    const slider = document.getElementById("healthSlider");
    const output = document.getElementById("sliderValue");
    output.textContent = slider.value;
}

function checkFirstName() {
    let firstName = document.getElementById("firstname").value;
    let error = document.getElementById("firstnameError");
    
    if (firstName.length < 1) {
        error.innerHTML = "First name is required.";
        errorFlag = 1;
        return false;
    }
    if (!/^[A-Za-z'-]{1,30}$/.test(firstName)) {
        error.innerHTML = "Letters, apostrophes, and dashes only.";
        errorFlag = 1;
        return false;
    }
    error.innerHTML = "";
    return true;
}

function checkMiddleInitial() {
    let middle = document.getElementById("middleinitial").value;
    let error = document.getElementById("middleinitialError");
    
    if (middle === "") {
        error.innerHTML = "";
        return true;
    }

    if (!/^[A-Za-z]$/.test(middle)) {
        error.innerHTML = "Middle initial must be one letter.";
        errorFlag = 1;
        return false;
    }
    error.innerHTML = "";
    return true;
}

function checkLastName() {
    let lastName = document.getElementById("lastname").value;
    let error = document.getElementById("lastnameError");
    
    if (lastName.length < 1) {
        error.innerHTML = "last name is required.";
        errorFlag = 1;
        return false;
    }
    if (!/^[A-Za-z' -]{1,30}$/.test(lastName)) {
    error.innerHTML = "Letters, spaces, apostrophes, and dashes only.";
    errorFlag = 1;
    return false;
    }
    error.innerHTML = "";
    return true;
}



function checkDOB() {

    let dob = document.getElementById("dob").value;
    let error = document.getElementById("dobError");

    if (dob === "") {
        error.innerHTML = "Date of birth is required.";
        errorFlag = 1;
        return false;
    }

    let today = new Date();
    let birthDate = new Date(dob);

    // Future date check
    if (birthDate > today) {
        error.innerHTML = "Date of birth cannot be in the future.";
        errorFlag = 1;
        return false;
    }

    // 120 year check
    let oldestDate = new Date();
    oldestDate.setFullYear(today.getFullYear() - 120);

    if (birthDate < oldestDate) {
        error.innerHTML = "Date cannot be more than 120 years ago.";
        errorFlag = 1;
        return false;
    }

    error.innerHTML = "";
    return true;
}


function checkSSN() {

    let ssn = document.getElementById("ssn").value;
    let error = document.getElementById("ssnError");

    if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn)) {
        error.innerHTML = "SSN must be in format 123-45-6789.";
        errorFlag = 1;
        return false;
    }

    error.innerHTML = "";
    return true;
}


function checkEmail() {

    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (!emailPattern.test(email)) {
        error.innerHTML = "Invalid email format.";
        errorFlag = 1;
        return false;
    }

    error.innerHTML = "";
    return true;
}


function checkPhone() {

    let phone = document.getElementById("phone").value;
    let error = document.getElementById("phoneError");

    if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
        error.innerHTML = "Phone must be in format 123-456-7890.";
        errorFlag = 1;
        return false;
    }

    error.innerHTML = "";
    return true;
}


function checkAddress1() {

    let address = document.getElementById("address1").value;
    let error = document.getElementById("address1Error");


    if (address.length < 2 || address.length > 30) {

        error.innerHTML = "Address must be 2-30 characters.";
        errorFlag = 1;
        return false;
    }

    error.innerHTML = "";
    return true;
}


function checkAddress2() {

    let address = document.getElementById("address2").value;
    let error = document.getElementById("address2Error");


    // Optional field
    if (address === "") {
        error.innerHTML = "";
        return true;
    }


    if (address.length < 2 || address.length > 30) {

        error.innerHTML = "Address must be 2-30 characters.";
        errorFlag = 1;
        return false;
    }

    error.innerHTML = "";
    return true;
}


function checkCity() {

    let city = document.getElementById("city").value;
    let error = document.getElementById("cityError");


    if (city.length < 2 || city.length > 30) {

        error.innerHTML = "City must be 2-30 characters.";
        errorFlag = 1;
        return false;
    }


    if (!/^[A-Za-z '-]+$/.test(city)) {

        error.innerHTML = "City can only contain letters, spaces, apostrophes, and dashes.";
        errorFlag = 1;
        return false;
    }


    error.innerHTML = "";
    return true;
}


function checkState() {

    let state = document.getElementById("state").value;
    let error = document.getElementById("stateError");


    if (state === "") {

        error.innerHTML = "Please select a state.";
        errorFlag = 1;
        return false;
    }


    error.innerHTML = "";
    return true;
}


function checkZip() {

    let zip = document.getElementById("zip").value;
    let error = document.getElementById("zipError");


    if (!/^\d{5}(-\d{4})?$/.test(zip)) {

        error.innerHTML = "ZIP must be 12345 or 12345-6789.";
        errorFlag = 1;
        return false;
    }


    error.innerHTML = "";
    return true;
}


function checkUserID() {

    let userid = document.getElementById("userid").value;
    let error = document.getElementById("useridError");


    let useridPattern = /^[A-Za-z][A-Za-z0-9_-]{4,29}$/;


    if (!useridPattern.test(userid)) {

        error.innerHTML = "User ID must be 5-30 characters, start with a letter, and contain only letters, numbers, _ or -.";
        errorFlag = 1;
        return false;
    }


    // Convert to lowercase
    document.getElementById("userid").value = userid.toLowerCase();


    error.innerHTML = "";
    return true;
}


function checkPassword() {

    let password = document.getElementById("password").value;
    let error = document.getElementById("passwordError");


    if (password.length < 8 || password.length > 30) {

        error.innerHTML = "Password must be 8-30 characters.";
        errorFlag = 1;
        return false;
    }


    if (!/[A-Z]/.test(password)) {

        error.innerHTML = "Password needs an uppercase letter.";
        errorFlag = 1;
        return false;
    }


    if (!/[a-z]/.test(password)) {

        error.innerHTML = "Password needs a lowercase letter.";
        errorFlag = 1;
        return false;
    }


    if (!/[0-9]/.test(password)) {

        error.innerHTML = "Password needs a number.";
        errorFlag = 1;
        return false;
    }


    if (!/[!@#%^&*()_+\-=\/><.,`~]/.test(password)) {

        error.innerHTML = "Password needs a special character.";
        errorFlag = 1;
        return false;
    }


    let userid = document.getElementById("userid").value.toLowerCase();


    if (password.toLowerCase().includes(userid)) {

        error.innerHTML = "Password cannot contain User ID.";
        errorFlag = 1;
        return false;
    }


    error.innerHTML = "";
    return true;
}


function checkPasswordMatch() {

    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let error = document.getElementById("repasswordError");


    if (password !== repassword) {

        error.innerHTML = "Passwords do not match.";
        errorFlag = 1;
        return false;
    }


    error.innerHTML = "";
    return true;
}

function validateForm() {
    errorFlag = 0;
    checkFirstName();
    checkMiddleInitial();
    checkLastName();
    checkDOB();
    checkSSN();
    checkEmail();
    checkPhone();
    checkAddress1();
    checkAddress2();
    checkCity();
    checkState();
    checkZip();
    checkUserID();
    checkPassword();
    checkPasswordMatch();
    if (errorFlag === 1) {
        alert("Please fix the highlighted errors.");
        return false;
    }
    return true;
}


function reviewForm() {

    validateForm();

    if(errorFlag === 1){
        return;
    }

    // Get form values
    const form = document.getElementById("registrationForm");

    let firstname = form.firstname.value;
    let middle = form.middleinitial.value;
    let lastname = form.lastname.value;
    let dob = form.dob.value;
    let email = form.email.value;
    let phone = form.phone.value;
    let address1 = form.address1.value;
    let address2 = form.address2.value;
    let city = form.city.value;
    let state = form.state.value;
    let zip = form.zip.value;
    let userid = form.userid.value.toLowerCase(); // convert to lowercase
    let slider = form.health.value;
    let symptoms = form.symptoms.value;

    // Update user ID field visually
    form.userid.value = userid;

    // Get selected radio values
    let gender = document.querySelector('input[name="gender"]:checked')?.value || "Not selected";
    let vaccinated = document.querySelector('input[name="vaccinated"]:checked')?.value || "Not selected";
    let insurance = document.querySelector('input[name="insurance"]:checked')?.value || "Not selected";

    // Get checkboxes
    let illnesses = [];
    document.querySelectorAll('input[name="illness"]:checked').forEach(cb => {
        illnesses.push(cb.value);
    });


let today = new Date();
let dobDate = new Date(dob);

let dobMessage = "✅PASS";


if (!dob) {
    dobMessage = "❌ Date of Birth is required";
}
else if (dobDate > today) {
    dobMessage = "❌ Cannot be in the future";
}
else {
    let age = today.getFullYear() - dobDate.getFullYear();
    if (age > 120) {
        dobMessage = "❌ Age cannot exceed 120 years";
    }
}

let emailMessage = email.includes("@") ? "✅PASS" : "❌ ERROR";

let phoneMessage = /^\d{3}-\d{3}-\d{4}$/.test(phone)
    ? "✅PASS"
    : "❌ ERROR: Format must be 123-456-7890";

let zipMessage = /^\d{5}(-\d{4})?$/.test(zip)
    ? "✅PASS"
    : "❌ ERROR: Invalid ZIP";

    // Build output
    let output = `
    <h3>PLEASE REVIEW THIS INFORMATION</h3>
    <p><strong>Name:</strong> ${firstname} ${middle} ${lastname} — ✅PASS</p>
    <p><strong>DOB:</strong> ${dob} — ${dobMessage}</p>
    <p><strong>Email:</strong> ${email} — ${emailMessage}</p>
    <p><strong>Phone:</strong> ${phone} — ${phoneMessage}</p>
    <p><strong>Address:</strong><br>
    ${address1} ${address2}<br>
    ${city}, ${state} ${zip} — ${zipMessage}
    </p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Vaccinated:</strong> ${vaccinated}</p>
    <p><strong>Insurance:</strong> ${insurance}</p>
     <p><strong>Illnesses:</strong> ${illnesses.join(", ") || "None"}</p>
    <p><strong>Symptoms:</strong> ${symptoms || "None provided"}</p>
    <p><strong>Health Rating:</strong> ${slider}</p>
    <p><strong>User ID:</strong> ${userid} — ✅PASS</p>
`;

    document.getElementById("reviewOutput").innerHTML = output;
}

window.onload = function() {
    updateSliderValue();
}