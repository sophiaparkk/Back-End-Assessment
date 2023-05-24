//controller files are responsible for handling incoming requests and returning responses to the client

module.exports = {
    getName: (req, res) => {
        let {name} = req.body.userName;//////////WHY IS VARIABLE IN CURLY BRACKETS?//////
        res.status(200).send(`${name}`);
    },

    getMood: (req, res) => {
        const moodArray = ['Yay!','Aww, I hope it gets better']
        const {mood} = req.params
        res.status(200).send(moodArray[+mood])
    },

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        //creating array and storing it in variable


        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        //creating function to select random within the compliments function and storing it in variale
        let randomCompliment = compliments[randomIndex];
        //choosing the random array object here and storing it to variable
        //reminder: arrayName[index] is how we access the value stated in the [] brackets
      
        res.status(200).send(randomCompliment);
        //as a response, we are assigning the 200 status and sending the random index from the array stored in this variable
    },

    getFortune: (req, res) => {
        const fortune = ["You will see some bright days ahead!", "Money may be coming your way", "An old friend may seek some advice", "Watch for something exciting at your job!", "A tasty treat might be waiting for you somewhere"];

        let randomIndex1 = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex1];

        res.status(200).send(randomFortune);

    },

    getRest: (req, res) => {
        let {email} = req.body.userEmail;//////////WHY IS VARIABLE IN CURLY BRACKETS?//////
        res.status(200).send(`${email}`);
    }



}