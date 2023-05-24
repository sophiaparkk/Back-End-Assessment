//BOILER PLATE CODE
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

//NAME
const { getName } = require('./controller')
//app.get("/api/name/:name", getName); 
app.post("/api/name/:name", getName); 

//MOOD
const { getMood } = require('./controller')
app.get("/api/mood/:mood", getMood);


//COMPLIMENT
const { getCompliment } = require('./controller')
//require is a function that allows us to include external lines of code within that package/location
//here we are making it so we can use the code in the controller file
//////////IS THIS GETCOMPLIMENT VARIABLE TIED TO THE GETCOMPLIMENT VARIABLE IN THE MAIN.JS FILE ON CLIENT SIDE?////////////
//////////WHAT IS THE POINT OF THIS OR CAN WE NOT JUST WRITE THE GET COMPLIMENT FUNCTION (IN CONTROLLER.JS FILE) HERE? THERE WAS NO CONTROLLER FILE IN STETSON'S DEMO///////////

app.get("/api/compliment", getCompliment); 
//we are using the variable 'app' which is invoking express package
//and then using the get function to retrieve information from stated url
//then performing the function (which is tied to controller.js file function) to perform when receiving this request
////////WHY IS THE URL SO SHORT? HOW DOES IT KNOW THE FULL ADDRESS? HOW IS THE ADDRESS DETERMINED? THE /COMPLIMENT PART?////




//FORTUNE
const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);


//REST
const { getRest } = require('./controller')

app.post("/api/rest/:rest", getRest); 








app.listen(4000, () => console.log("Server running on 4000"));
//standard server setup
//listening for which server it's running on
//when we start server, it will watch for changes and make updates automatically when changed (using nodemon)
////////DO WE NEED A FUNCTION HERE? current function of console.log///////
///////WHY DOES THIS NEED TO BE AT THE END?///////
