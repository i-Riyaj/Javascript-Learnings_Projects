const result = document.getElementById('result');

//adding event listener in whole window
window.addEventListener('keydown', (e)=>{
    e.preventDefault();
    
    result.innerHTML = `
    <div class="font20px">

    <table>

    <tr>

    <td>e.key</td>
    <td>e.keyCode</td>
    <td>code</td>

    </tr>

    <tr>

    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>

    </tr>

    </table>

    </div>
    `
})