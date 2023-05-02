//compliment
const complimentBtn = document.getElementById("complimentButton")

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
        .get("http://localhost:4000/api/day/")
        .then(res => {
            const dayData = res.data;
            alert(dayData);
    })
}

daySelect.addEventListener('click', getDay)