const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


//ENDPOINTS
//compliment
const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);




//fortune
const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);




//day
const { getDay } = require('./controller')

app.get("/api/day", getDay);





app.listen(4000, () => console.log("Server running on 4000"));



