//compliment
const complimentBtn = document.getElementById("complimentButton") //assigning variable to get button ID in html

//assigning variable to retrieve information from below url and return the data
const getCompliment = () => { 
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


//fortune
const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const fortuneData = res.data;
            alert(fortuneData);
    });
};

fortuneBtn.addEventListener('click', getFortune)

//how are you doing today
const daySelect = document.getElementById("select-day")

const getDay = () => {
    axios
        .get("http://localhost:4000/api/day/${daySelect.value}")
        .then(res => {
            const dayData = res.data;
            alert(dayData);
    })
}

daySelect.addEventListener('click', getDay)