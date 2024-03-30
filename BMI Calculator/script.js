//selecting form
const form = document.querySelector('form');

//adding eventlistener for 'submit' event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //storing 'weight' & 'height' in a variable by coverting into number
    const weight  = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);

    //selecting the html element with id 'result' 
    const result = document.querySelector('#result');
    
    //applying 'if else' loop using certain conditions
    if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = 'please enter a valid weight!'
    } else if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = 'please enter a valid height!'
    } else {
        const BMI = (weight/((height/100)**2)).toFixed(2);

        //applying 'if else' loop
        if( (BMI > 0) && (BMI < 18.5) ){
            result.innerHTML = `Your BMI = ${BMI} (underweight).`;
        }   
        else if ( (BMI>18.5) && (BMI < 25) ) {
            result.innerHTML = `Your BMI = ${BMI} (normal).`;
        } else {
            result.innerHTML = `Your BMI = ${BMI} (overweight).`;
        }
    }
} )