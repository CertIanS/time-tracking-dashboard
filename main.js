var dailyBtn = document.getElementById("dailyButton");
var weekBtn = document.getElementById("weeklyButton");
var monthBtn = document.getElementById("monthlyButton");
var jsonData = null;

dailyBtn.addEventListener("click", function(e){
    //document.getElementById("workCurrent").textContent = "5hrs";
    document.getElementById("workCurrent").textContent = jsonData[0].timeframes.daily.current + "hrs";
    document.getElementById("workPrev").textContent = "Yesterday - " + jsonData[0].timeframes.daily.previous + "hrs";
    document.getElementById("playCurrent").textContent = jsonData[1].timeframes.daily.current + "hr";
    document.getElementById("playPrev").textContent = "Yesterday - " + jsonData[1].timeframes.daily.previous + "hrs";
    document.getElementById("studyCurrent").textContent = jsonData[2].timeframes.daily.current + "hrs";
    document.getElementById("studyPrev").textContent = "Yesterday - " + jsonData[2].timeframes.daily.previous + "hr";
    document.getElementById("exerciseCurr").textContent = jsonData[3].timeframes.daily.current + "hr";
    document.getElementById("exercisePrev").textContent = "Yesterday - " + jsonData[3].timeframes.daily.previous + "hr";
    document.getElementById("socialCurr").textContent = jsonData[4].timeframes.daily.current + "hr";
    document.getElementById("socialPrev").textContent = "Yesterday - " + jsonData[4].timeframes.daily.previous + "hrs";
    document.getElementById("selfCurrent").textContent = jsonData[5].timeframes.daily.current + "hrs";
    document.getElementById("selfPrev").textContent = "Yesterday - " + jsonData[5].timeframes.daily.previous + "hr";
    dailyBtn.disabled = true;
    weekBtn.disabled = false;
    monthBtn.disabled = false;
});

weekBtn.addEventListener("click", function(e){
    document.getElementById("workCurrent").textContent = jsonData[0].timeframes.weekly.current + "hrs";
    document.getElementById("workPrev").textContent = "Last week - " + jsonData[0].timeframes.weekly.previous + "hrs";
    document.getElementById("playCurrent").textContent = jsonData[1].timeframes.weekly.current + "hrs";
    document.getElementById("playPrev").textContent = "Last week - " + jsonData[1].timeframes.weekly.previous + "hrs";
    document.getElementById("studyCurrent").textContent = jsonData[2].timeframes.weekly.current + "hrs";
    document.getElementById("studyPrev").textContent = "Last week - " + jsonData[2].timeframes.weekly.previous + "hrs";
    document.getElementById("exerciseCurr").textContent = jsonData[3].timeframes.weekly.current + "hrs";
    document.getElementById("exercisePrev").textContent = "Last week - " + jsonData[3].timeframes.weekly.previous + "hrs";
    document.getElementById("socialCurr").textContent = jsonData[4].timeframes.weekly.current + "hrs";
    document.getElementById("socialPrev").textContent = "Last week - " + jsonData[4].timeframes.weekly.previous + "hrs";
    document.getElementById("selfCurrent").textContent = jsonData[5].timeframes.weekly.current + "hrs";
    document.getElementById("selfPrev").textContent = "Last week - " + jsonData[5].timeframes.weekly.previous + "hrs";
    dailyBtn.disabled = false;
    weekBtn.disabled = true;
    monthBtn.disabled = false;
});

monthBtn.addEventListener("click", function(e){
    document.getElementById("workCurrent").textContent = jsonData[0].timeframes.monthly.current + "hrs";
    document.getElementById("workPrev").textContent = "Last month - " + jsonData[0].timeframes.monthly.previous + "hrs";
    document.getElementById("playCurrent").textContent = jsonData[1].timeframes.monthly.current + "hrs";
    document.getElementById("playPrev").textContent = "Last month - " + jsonData[1].timeframes.monthly.previous + "hrs";
    document.getElementById("studyCurrent").textContent = jsonData[2].timeframes.monthly.current + "hrs";
    document.getElementById("studyPrev").textContent = "Last month - " + jsonData[2].timeframes.monthly.previous + "hrs";
    document.getElementById("exerciseCurr").textContent = jsonData[3].timeframes.monthly.current + "hrs";
    document.getElementById("exercisePrev").textContent = "Last month - " + jsonData[3].timeframes.monthly.previous + "hrs";
    document.getElementById("socialCurr").textContent = jsonData[4].timeframes.monthly.current + "hrs";
    document.getElementById("socialPrev").textContent = "Last month - " + jsonData[4].timeframes.monthly.previous + "hrs";
    document.getElementById("selfCurrent").textContent = jsonData[5].timeframes.monthly.current + "hrs";
    document.getElementById("selfPrev").textContent = "Last month - " + jsonData[5].timeframes.monthly.previous + "hrs";
    dailyBtn.disabled = false;
    weekBtn.disabled = false;
    monthBtn.disabled = true;
});

function fetchJSONData(){
    fetch("./data.json")
    .then(response => {
        if(!response.ok){
            console.log("Error");
        }
        return response.json();
    })
    .then(data => jsonData = data)
    .catch(error => console.error('Error: ', error));
}
fetchJSONData();
const parsedData = JSON.parse(jsonData);