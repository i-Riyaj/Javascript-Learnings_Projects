const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalID;

const changeBgColor = () => {
    
    const autoChangeBgColor = () => {
        document.body.style.backgroundColor = randomColor();
    }

    if(intervalID == null){
        intervalID = setInterval(autoChangeBgColor, 500);
    }
}

const unchangeBgColor = () => {
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector('#start').addEventListener( 'click', changeBgColor);

document.querySelector('#stop').addEventListener( 'click', unchangeBgColor);