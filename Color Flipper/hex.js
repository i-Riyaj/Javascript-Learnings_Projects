
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// generating a random no between 0 & length of hex
const generateRandomNo = () => {
    return Math.floor(Math.random() * hex.length)
}

// generate random hex color code
const generateHexColor = () => {
    let hexValue = "#";
    for(let i=0; i<6; i++){
        hexValue += hex[generateRandomNo()];
    }
    return hexValue;
}

// changing background color of body
const changeHexColor = () => {
    const color = generateHexColor();
    document.getElementById('colorText').textContent = color;
    document.getElementById('colorText').style.color = color;
    document.body.style.background = color;
}