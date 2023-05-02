const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


//ENDPOINTS
//name
const { getName } = require('./controller')

app.get("/api/name", getName);

// app.get('/api/inventory', (req, res) => {

//     if (req.query.item) {
//         const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))

//         res.status(200).send(filteredItems)
//     } 
//     res.status(200).send(inventory)
// })


//compliment
const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);




//fortune
const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);










app.listen(4000, () => console.log("Server running on 4000"));



