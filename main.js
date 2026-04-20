var dailyBtn = document.getElementById("dailyButton");
var weekBtn = document.getElementById("weeklyButton");
var monthBtn = document.getElementById("monthlyButton");

dailyBtn.addEventListener("click", function(e){
    document.getElementById("workCurrent").textContent = "5hrs";
    document.getElementById("workPrev").textContent = "Yesterday - 7hrs";
    document.getElementById("playCurrent").textContent = "1hr";
    document.getElementById("playPrev").textContent = "Yesterday - 2hrs";
    document.getElementById("studyCurrent").textContent = "0hrs";
    document.getElementById("studyPrev").textContent = "Yesterday - 1hr";
    document.getElementById("exerciseCurr").textContent = "1hr";
    document.getElementById("exercisePrev").textContent = "Yesterday - 1hr";
    document.getElementById("socialCurr").textContent = "1hr";
    document.getElementById("socialPrev").textContent = "Yesterday - 3hrs";
    document.getElementById("selfCurrent").textContent = "0hrs";
    document.getElementById("selfPrev").textContent = "Yesterday - 1hr";
});

weekBtn.addEventListener("click", function(e){
    document.getElementById("workCurrent").textContent = "32hrs";
    document.getElementById("workPrev").textContent = "Last week - 36hrs";
    document.getElementById("playCurrent").textContent = "10hrs";
    document.getElementById("playPrev").textContent = "Last week - 8hrs";
    document.getElementById("studyCurrent").textContent = "4hrs";
    document.getElementById("studyPrev").textContent = "Last week - 7hrs";
    document.getElementById("exerciseCurr").textContent = "4hrs";
    document.getElementById("exercisePrev").textContent = "Last week - 5hrs";
    document.getElementById("socialCurr").textContent = "5hrs";
    document.getElementById("socialPrev").textContent = "Last week - 10hrs";
    document.getElementById("selfCurrent").textContent = "2hrs";
    document.getElementById("selfPrev").textContent = "Last week - 2hrs";
});

monthBtn.addEventListener("click", function(e){
    document.getElementById("workCurrent").textContent = "103hrs";
    document.getElementById("workPrev").textContent = "Last month - 128hrs";
    document.getElementById("playCurrent").textContent = "23hrs";
    document.getElementById("playPrev").textContent = "Last month - 29hrs";
    document.getElementById("studyCurrent").textContent = "13hrs";
    document.getElementById("studyPrev").textContent = "Last month - 19hrs";
    document.getElementById("exerciseCurr").textContent = "11hrs";
    document.getElementById("exercisePrev").textContent = "Last month - 18hrs";
    document.getElementById("socialCurr").textContent = "21hrs";
    document.getElementById("socialPrev").textContent = "Last month - 23hrs";
    document.getElementById("selfCurrent").textContent = "7hrs";
    document.getElementById("selfPrev").textContent = "Last month - 11hrs";
});