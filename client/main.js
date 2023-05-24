//NAME
const nameButton = document.getElementById("nameButton")
const nameInput = document.getElementById("nameInput")

const getName = () => {
    let user = {
        userName: `${nameInput.value}`
    };
    //assigning a new function to this variable
    axios.post(`http://localhost:4000/api/name/${nameInput.value}`, user)
       .then(res => {
            //const nameData = res.data;
            alert(`Hi ${nameInput.value}`);
    });
};

nameButton.addEventListener('click', getName)


//MOOD
const moodButton = document.getElementById("moodButton")
const moodSelect = document.getElementById("moodSelect")

const getMood = () => {
    //assigning a new function to this variable
    axios.get(`http://localhost:4000/api/mood/${moodSelect.value}`)
       .then(res => {
            const moodData = res.data;
            alert(moodData);
    });
};


moodButton.addEventListener('click', getMood)



//COMPLIMENT
const complimentButton = document.getElementById("complimentButton")
//assigning the 'complimentbutton' element from front end in the current html doc to this variable
//////HOW DOES IT KNOW WHICH DOCUMENT TO REFERENCE? WHAT IF THERE WERE MULTIPLE HTML DOCS?//////



const getCompliment = () => {
    //assgining a new function to this variable
    axios.get("http://localhost:4000/api/compliment/")
        //using package axios to get information from this location
        .then(res => {
            const data = res.data;
            alert(data);
            //then, as a response, we are going to send (in the back end that the user doesn't see), the data
            //then the alert is what actually shows up for the user with the data displayed
            //////////////WHERE IS THIS DATA COMING FROM? IS THIS A FUNCTION IN JS?///////
            //////WHEN DO WE NEED ; AND WHEN DO WE NOT?/////////
    });
};

complimentButton.addEventListener('click', getCompliment)
//we are listening for a click on the button in html then performing the function



//FORTUNE
const fortuneButton = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const fortuneData = res.data;
            alert(fortuneData);
        });
};

fortuneButton.addEventListener('click', getFortune)



//REST METHODS FEATURE
const restForm = document.getElementById("restEmailSubmit")

const getRest = () => {
    let email = {
        userEmail: `${restEmailInput.value}`
    };

    axios.post("http://localhost:4000/api/rest/${restEmailInput.value}", email)
    .then(res => {
        //const restData = res.data;
        alert('Thanks for entering your email!');
    });
}

restForm.addEventListener('click', getRest)