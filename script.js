let fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.phoneNum = document.getElementById('phoneNum');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
})



function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;

    return (value.length > 0);
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value);
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }
    return isFieldValid;
}

function isValid() {
    let valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.phoneNum, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.message, isNotEmpty);

    return valid;
}

class User {
    constructor(firstName, lastName, phoneNum, email, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNum = phoneNum;
        this.email = email;
        this.message = message;
    }
}

function sendContact() {
    if (isValid()) {
        alert('Thank you! Your form has been submitted!');
    } else {
        alert("Please complete all fields.")
    }
}