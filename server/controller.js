module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["You will see some bright days ahead!", "Money may be coming your way", "An old friend may seek some advice", "Watch for something exciting at your job!", "A tasty treat might be waiting for you somewhere"];
      
        // choose random fortune
        let randomIndex1 = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex1];
      
        res.status(200).send(randomFortune);
    },

    getName: (req, res) => {
        const day = ["You will see some bright days ahead!", "Money may be coming your way", "An old friend may seek some advice", "Watch for something exciting at your job!", "A tasty treat might be waiting for you somewhere"];
      
        let randomIndex2 = Math.floor(Math.random() * day.length);
        let randomDay = day[randomIndex2];
      
        res.status(200).send(randomDay);
    }


}
