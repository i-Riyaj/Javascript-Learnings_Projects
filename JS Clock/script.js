const time=()=>{
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let timesession = "AM";

    let showDate = document.querySelector(".date");
    showDate.innerHTML = date.toLocaleDateString('en-IN');
    

    if(hr>=12) {
        timesession = "PM";  
    }

    hr = (hr<10) ? ("0"+ hr) : hr;
    min = (min<10) ? ("0"+ min) : min;
    sec = (sec<10) ? ("0"+ sec) : sec;

    let h = document.querySelector("#hour");
    let m = document.querySelector("#minute");
    let s = document.querySelector("#second");
    let session = document.querySelector("#session");

    h.innerHTML = hr;
    m.innerHTML = min;
    s.innerHTML = sec;
    session.innerHTML = timesession;

    h.className = "hr";
    m.className = "min";
    s.className = "sec";
    
    setTimeout(()=>{
          time();
    }, 1000)
}
time();
