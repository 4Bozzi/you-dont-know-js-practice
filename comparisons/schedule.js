const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes){
    const convertedStartTime = convertTime(startTime);
    const convertedDayStart = convertTime(dayStart)
    const convertedDayEnd = convertTime(dayEnd)

    if(convertedStartTime < convertedDayStart){
        return false;
    }
    if((convertedStartTime + durationMinutes) > convertedDayEnd){
        return false;
    }
    return true;
}

//return minutes since 0000
function convertTime(time){
    const hoursAndMinutes = time.split(":");
    return (parseInt(hoursAndMinutes[0])*60) + parseInt(hoursAndMinutes[1]);
}


console.log(scheduleMeeting("7:00",15));     // false
console.log(scheduleMeeting("07:15",30));    // false
console.log(scheduleMeeting("7:30",30));     // true
console.log(scheduleMeeting("11:30",60));    // true
console.log(scheduleMeeting("17:00",45));    // true
console.log(scheduleMeeting("17:30",30));    // false
console.log(scheduleMeeting("18:00",15));    // false

