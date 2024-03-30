const targetParent = document.querySelectorAll('.target')[0];
const targetPara = document.querySelector('p');

targetPara.addEventListener( 'click', (e)=>{
    e.preventDefault();
    e.stopPropagation();

    askforInput();
}, false )

const askforInput = () => {
    document.body.style.opacity = "100%";
    targetParent.classList.remove("border");
    targetParent.innerHTML = '<div id="inputSection"><label for="enterName">Enter your name:</label><input type="text" name="enterName" id="enterName"></div>';

    const enterName = document.querySelector('#enterName');
    targetParent.classList.add('flex');
    targetParent.classList.add('flex');
    enterName.classList.add('enterNameArea');
    document.querySelector('#inputSection').classList.add('flexRow');

    enterName.addEventListener( 'click', (e)=>{
        e.preventDefault();
        e.stopPropagation();

        giveInputAndSubmit();
    }, false )
   
}

const giveInputAndSubmit = () => {
   if(targetParent.childElementCount === 1){
    const submitBTN = document.createElement('button');
   submitBTN.innerHTML = 'submit';
   submitBTN.classList.add('submitBTNstyle');
   targetParent.appendChild(submitBTN);

   submitBTN.addEventListener( 'click', (e)=>{
    e.preventDefault();
    e.stopPropagation();

    analyzeInputAndGiveOutput();
   }, false )
   }
}

const analyzeInputAndGiveOutput = () => {
    if(enterName.value === undefined || 
        enterName.value === null || 
        enterName.value.length <= 2){
        alert(`${enterName.value} is not a valid name, Please enter a valid name!`); 
        tryAgain();
    } else {
        targetParent.innerText = `Welcome ${enterName.value}`;
        
        const playAgainBtn = document.createElement('button');
        playAgainBtn.innerText = 'Play Again';
        playAgainBtn.classList.add("playAgainBtnStyle");
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener( 'click', (e)=>{
            e.preventDefault();
            e.stopPropagation();
            document.body.removeChild(playAgainBtn);
            enterNameAgain();
        }, false )
    };
}

const tryAgain = () => {
    enterName.value = '';
    askforInput();
}

const enterNameAgain = () => {
   askforInput();
   
}