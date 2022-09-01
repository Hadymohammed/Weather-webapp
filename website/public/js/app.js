let today=new Date();
var options = { weekday: 'short', year: 'numeric', month: 'short' };

function updateGreatings(){
    let greating=document.getElementById('timeStatus');
    const hours=today.getHours();
    if(hours>=0&&hours<12)greating.innerText='morning,';
    else if(hours>=12&&hours<15)greating.innerText='afternoon,';
    else greating.innerText='night,';
    //console.log(greating);
  //  console.log(hours);
}
function updateTodayDate(){
    let dateSpan=document.getElementById('date');
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(today);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(today);
    let da = new Intl.DateTimeFormat('en', { day : '2-digit' }).format(today);
    //console.log(today.toLocaleDateString("en-US", options));
    dateSpan.innerText=`: ${da} ${mo}/${ye}`;
}

function sendData(){
    const cityInput=document.getElementById('cityEntry');
    console.log(cityInput.value);
}
function generateClickEvnet(){
    const generateButton=document.getElementById('generate');
    generateButton.addEventListener('click',sendData);
}
function runMain(){
    updateGreatings();
    updateTodayDate();
    generateClickEvnet();
}