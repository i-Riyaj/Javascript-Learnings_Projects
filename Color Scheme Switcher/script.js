const body = document.querySelector('body');
const h1Title = document.querySelector('h1');
const colorBox = document.querySelectorAll('.colorBox');
const h2Title = document.querySelector('h2');
const reset = document.querySelector('#reset');
colorBox.forEach( (color) => {
    color.addEventListener( 'click', (e) => {

        reset.style.display = "block";
        reset.classList.add('button');
        reset.addEventListener( 'click', ()=>{
            body.style.backgroundColor = "white";
            h1Title.style.color = "black";
            h2Title.style.color = "black";
            reset.style.display = "none";
        } )

        switch (e.target.id) {

            case "grey":
                body.style.backgroundColor = e.target.id;
                h1Title.style.color = "white";
                h2Title.style.color = "white";
                break;

            case "blueviolet":
                body.style.backgroundColor = e.target.id;
                h1Title.style.color = "yellow";
                h2Title.style.color = "yellow";
                break;

            case "yellow":
                body.style.backgroundColor = e.target.id;
                h1Title.style.color = "black";
                h2Title.style.color = "black";
                break;

            case "blue":
                body.style.backgroundColor = e.target.id;
                h1Title.style.color = "yellow";
                h2Title.style.color = "yellow";
                break;

            default:
                body.style.backgroundColor = white;
                h1Title.style.color = "black";
                h2Title.style.color = "black";
                break;
        }
    } )
} );

document.querySelector('#home').addEventListener( 'click', () => {
    alert('welcome!');
} );

document.querySelector('#darkMode').addEventListener( 'click', () => {
    alert('not available yet!')
} )