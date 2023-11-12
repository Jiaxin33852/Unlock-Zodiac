// get all element in html file
const monthInput = document.getElementById('monthInput');
const dayInput = document.getElementById('dayInput');
const errorMessage = document.getElementById('errorMessage');
const submitButton = document.getElementById('submitButton');

// add listener for the input event
monthInput.addEventListener('input', validateMonth);
dayInput.addEventListener('input', validateDay);

// add event on click
submitButton.addEventListener('click', onSubmit);

function isValidMonth(){
    const month = parseInt(monthInput.value, 10);
    var isValid=true;
    if (isNaN(month) || month < 1 || month > 12) {
        isValid=false;
    }
    return isValid;
}

function isValidDay(){
    const month = parseInt(monthInput.value,10);
    const day = parseInt(dayInput.value, 10);
    var isValid=true;
    if (isNaN(day) || day < 1 || day > 31){
        isValid=false;
    }
    if(month==2||month==4||month==6||month==9||month==11){
        if(day==31){
            isValid=false;
        }
    }
    return isValid;
}

function validateMonth() {
    const isValid=isValidMonth();
    if (!isValid) {
        errorMessage.textContent = 'Please enter valid month (1-12) ';
        monthInput.classList.add('error');
    } else {
        errorMessage.textContent = '';
        monthInput.classList.remove('error');
    }
}

function validateDay() {
    const isValid=isValidDay();
    if(!isValid){
        errorMessage.textContent = 'Please enter valid date';
        dayInput.classList.add('error');
    }
    else{
        errorMessage.textContent = '';
        dayInput.classList.remove('error');
    }
}

function onSubmit() {
    
    const monthValid = isValidMonth();
    const dayValid = isValidDay();

    //todo current logic is to return the entered data, in the future we will have the page jump
    if (monthValid&&dayValid) {
        alert('Input is Correct');
    } else {
        alert('Input is Wrong');
    }
}