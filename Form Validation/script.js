const nameError = document.querySelector('#nameError');
const phNumError = document.querySelector('#phNumError');
const emailError = document.querySelector('#emailError');
const textMessageError = document.querySelector('#textMessageError');
const submitError = document.querySelector('#submitError');

const validateName = () => { 
    const fullName = document.querySelector('#fullName');
    if(fullName.value === ''){
        nameError.innerHTML = 'Name is required!';
        nameError.style.visibility = 'visible';
        return 0;
    }
    if(!fullName.value.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)){
        nameError.innerHTML = 'Please write a proper name!';
        nameError.style.visibility = 'visible';
        return 0;
    }
    nameError.innerHTML = 
                            `
                            <svg class="validCheck" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            `;
    return 1;
}

const validatePhoneNo = () => {
    const phNum = document.querySelector('#phNum');
    if(phNum.value === ''){
        phNumError.innerHTML = 'Phone No is required!'
        phNumError.style.visibility = 'visible';
        return 0;
    }
    if(!phNum.value.match(/^\d{10}$/)){
        phNumError.innerHTML = 'Please write a valid number!'
        phNumError.style.visibility = 'visible';
        return 0;
    }
    phNumError.innerHTML = 
                            `
                            <svg class="validCheck" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            `;
    return 1;
}

const validateEmail = () => {
    const email = document.querySelector('#email');
    if(email.value === ''){
        emailError.innerHTML = 'Phone No is required!'
        emailError.style.visibility = 'visible';
        return 0;
    }
    if(!email.value.match(/^[A-Za-z0-9]+@[a-z]+\.[a-z][a-z][a-z]$/)){
        emailError.innerHTML = 'Please write a valid number!'
        emailError.style.visibility = 'visible';
        return 0;
    }
    emailError.innerHTML = 
                            `
                            <svg class="validCheck" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            `;
    return 1;
}

const validateMessage = () => {
    const textMessage = document.querySelector('#textMessage');
    if(textMessage.value.length <= 15){
        textMessageError.innerHTML = 'should contain at least 15 words!';
        textMessageError.style.visibility = 'visible';
        return 0;
    }
    textMessageError.innerHTML = 
                            `
                            <svg class="validCheck" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            `;
    return 1;
}

const validateOnSubmit = () => {
    // error
    if(!validateName() || !validatePhoneNo() || !validateEmail() || !validateMessage()){
        submitError.innerHTML = 'Please fix the error!';
        submitError.style.display = 'block';
        setTimeout( () => {
            submitError.style.display = 'none';
        }, 1000 )
        return 0;
    }
    // submitted
    submitError.innerHTML = 'submitted!';
    submitError.style.color = 'green';
    submitError.style.display = 'block';
    setTimeout(()=>{
        submitError.innerHTML = '';
        submitError.style.color = 'red';
        submitError.style.display = 'none';
        newForm();
    }, 1500);
    return 1;
}

function newForm(){
    document.querySelector('#fullName').value = "";
    document.querySelector('#phNum').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#textMessage').value = "";
    nameError.innerHTML = '';
    phNumError.innerHTML = '';
    emailError.innerHTML = '';
    textMessageError.innerHTML = '';
}