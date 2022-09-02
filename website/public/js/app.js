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

//GET request from server side
async function getData(){
    const timestapm=new Date();
    //get input city
    const city=document.getElementById('cityEntry').value;

    //get Divs to display Data
    const cityNameDiv=document.getElementById('city');
    const tempMaxDiv=document.getElementById('temp_max');
    const tempMinDiv=document.getElementById('temp_min');
    const descDiv=document.getElementById('description');

    //fetch data from server side ///all/// end point
    //pass city as parameter
    const data= await fetch(`all/${city}`);

    //convert to json
    const json= await data.json();
    console.log(`input city form client side : ${city}`);

    //request succeeded
    if(json.cod==200){
    cityNameDiv.innerHTML=json.name;
    tempMaxDiv.innerHTML=`temp max : ${json.main.temp_max}`;
    tempMinDiv.innerHTML=`temp min : ${json.main.temp_min}`;
    descDiv.innerHTML=`status : ${json.weather[0].description}`;
    console.log(json);

    //save request in history storage in server side
    sendData('/all',{
        "date":timestapm.toLocaleDateString(),
        "time":timestapm.toLocaleTimeString(),
        "City":json.name,
        "status":"Succeeded",
    });
    }
    //404 not found
    else if(json.cod==404) {
        sendData('/all',{
            "date":timestapm.toLocaleDateString(),
            "time":timestapm.toLocaleTimeString(),
            "City":city,
            "status":"Failed",
        });
        alert("City not found");
    }
    /*console.log(json.name);
    console.log(json.main.temp_max);
    console.log(json.main.temp_min);*/
}

//POST request to server side
async function sendData(url,data){
    const response = await fetch(url,
        {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
       // Body data type must match "Content-Type" header  
       // put data into request's body      
        body: JSON.stringify(data), 
       });

       try {
        const capsoledData = await response.json();
        console.log(capsoledData);
        return capsoledData;
      }catch(error) {
      console.log("error", error);
      }
    
}
function generateClickEvnet(){
    const generateButton=document.getElementById('generate');
    generateButton.addEventListener('click',getData);
}
function runMain(){
    updateGreatings();
    updateTodayDate();
    generateClickEvnet();
}