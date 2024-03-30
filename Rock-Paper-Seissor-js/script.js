const rpsGame = () =>{
    const words = ["Rock", "Paper", "Scissor"];

    const compInp = words[Math.floor((Math.random()*(words.length)))];
    
    
    const userInput = document.querySelector("#userInput");
    const btn1 =document.querySelector("#btn1");

    const comp_Gen_Word = document.querySelector("#compGenWord");
    const user_Entered_Word = document.querySelector("#userEnteredWord");
    
    const userInp = userInput.value;
    const result = document.querySelector("#resultText");

    if(
        (compInp == "Rock" && userInp == "Scissor")||
        (compInp == "Paper" && userInp == "Rock")||
        (compInp == "Scissor" && userInp == "Paper")
    ){
        result.innerHTML = "Sorry!You Lost the round.";
        comp_Gen_Word.innerHTML = `Random generated word was : ${compInp}`;
        user_Entered_Word.innerHTML =`Your Entered : ${userInp}`;
        }
        else if(
        (compInp == "Scissor" && userInp == "Rock")||
        (compInp == "Rock" && userInp == "Paper")||
        (compInp == "Paper" && userInp == "Scissor")
    ){
        result.innerHTML = "Hurrah!You won the round.";
        comp_Gen_Word.innerHTML = `Random generated word was : ${compInp}`;
        user_Entered_Word.innerHTML =`Your Entered : ${userInp}`;
    }
    else if(
        (compInp == "Rock" && userInp == "Rock")||
        (compInp == "Paper" && userInp == "Paper")||
        (compInp == "Scissor" && userInp == "Scissor")
    ){
        result.innerHTML = "It's a tie.";
        comp_Gen_Word.innerHTML = `Random generated word was : ${compInp}`;
        user_Entered_Word.innerHTML =`Your Entered : ${userInp}`;
    }
    else{
        result.innerHTML = "Something Wrong.";
        comp_Gen_Word.innerHTML = `Random generated word was : ${compInp}`;
        user_Entered_Word.innerHTML =`Your Entered : ${userInp}`;
    }
    const output = document.querySelector("#outputSection");
    output.className = "resultArea";     
}
btn1.addEventListener('click',rpsGame); 


