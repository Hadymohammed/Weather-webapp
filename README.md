# Weather-website-project
dynamic website that pulls weather data from API build to practice on node js &amp; express

### Task Descrition 
Build a resposive web app about weather status in a spacific city
- Build a server using node js.
- Set get & post routes.
- Use openweathermap API to fetch needed data.
- Update UI dynamically by API data which rescived from server-side using GET route.
- Post new entry to server-side end point.
### How it works
- After page content is loaded it'll dynamically display greatings and the date in UI using Date interface.
- User enters needed city and click on generate.
- Onclick event listener immediately run getData function which use get route to the server-side.
- Server will request the needed data from the API and send it to the end-point.
- Client-side rescives the responce from the server and if code is 200 which means **city** found it will update the UI with the new data, if code is 404 alert will pop up show Not found error.
- Post details of Get request Entry to the server to store it.
### I have learned to
- Setup localserver.
- Wrk with Node js / express.
- Set get & post routes.
- Manage the connection between Client & Server sides.
- Use APIs and fetch the date that i need.
- Write async functions and handle promises.
- Use git and cmd to have a prefect control with my updates in such project.
### Running instructions 
- Download the repo.
- open repo directory in Terminal. 
- Install 
- type this **node server**.
- open **http://localhost:8000/** on your browser.
### Auther
## Abdelhady Mohamed
