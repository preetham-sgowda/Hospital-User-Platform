let hrate = document.getElementById('counter-h');
let hlabel = document.getElementById('label-h');
let olrate = document.getElementById('counter-o');
let ollabel = document.getElementById('label-o');
let bsrate = document.getElementById('counter-b');
let bslabel = document.getElementById('label-b');
let af1 = document.getElementById('af1');
let af2 = document.getElementById('af2');
let af3 = document.getElementById('af3');
let emergencybtn = document.getElementById('emergencybtn');
let addmedicinebtn = document.getElementById('addmedicine-btn');
let timefun = new Date();

// Counters are randomised according to significant values as it is a prototype.
//  In Near future it will get updated with wearable devices. Eg,. FitBit

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

function getRandomint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Heart Rate Counter JS Start
const printHrate = async () => {
    while (true) {
        let i = getRandomint(68, 74);
        await sleep(1000);
        hrate.innerText = `${i}`;
        if (i > 100) {
            hlabel.innerText = "High!!!!";
            hlabel.style.backgroundColor = "red";
            af1.innerText = ` ${timefun.getHours() + ":" + timefun.getMinutes() + " -"} Your Heart Rate is High`;
            alert("Your Heart Rate is too Low! Calling an Ambulance");
        }
        else if (i < 60) {
            hlabel.innerText = "Low!!!!";
            hlabel.style.backgroundColor = "red";
            af1.innerText = ` ${timefun.getHours() + ":" + timefun.getMinutes() + " -"} Your Heart Rate is Low`;
            alert("Your Heart Rate is too Low! Calling an Ambulance");
        }
        else {
            hlabel.style.backgroundColor = "wheat";
            hlabel.innerText = "Normal";
        }

    }
}
printHrate();
// Heart Rate Counter JS End

// Blood Oxygen Counter JS Start
const printOxyRate = async () => {
    while (true) {
        for (let i = 93; i <= 96; i++) {
            await sleep(1000);
            olrate.innerText = `${i}`;
            // console.log(i);
            if (i < 94) {
                ollabel.innerText = "Low!!!!!";
                ollabel.style.backgroundColor = "red";
                af2.innerText = ` ${timefun.getHours() + ":" + timefun.getMinutes() + " -"} Your Blood Oxygen Level is low`;
            }
            else if (i < 90) {
                alert("Blood Oxygen Level too low! Calling an Ambulance");
            }
            else {
                ollabel.innerText = "Normal";
                ollabel.style.backgroundColor = "wheat";
            }

        }
    }
}
printOxyRate();

// Blood Oxygen Counter JS End

// Blood Sugar Counter JS Start
const printBsRate = async () => {
    while (true) {
        let i = getRandomint(180, 220);
        await sleep(2000);
        bsrate.innerText = `${i}`;
        if (i >= 200) {
            bslabel.innerText = "High!!!!";
            bslabel.style.backgroundColor = "tomato";
            af3.innerText = ` ${timefun.getHours() + ":" + timefun.getMinutes() + " -"} Your Blood Sugar Level is High`;
        }
        else if (i < 100) {
            af3.innerText = " ";
            bslabel.style.backgroundColor = "darkred";
            bslabel.innerText = "Low";
            af3.innerText = ` ${timefun.getHours() + ":" + timefun.getMinutes() + " -"} Your Blood Sugar Level is Low`;
        }
        else if (i > 220) {
            alert("You've High Blood Sugar! Calling an Ambulance");
        }
        else {
            bslabel.style.backgroundColor = "wheat";
            bslabel.innerText = "Normal";
        }


    }
}
printBsRate();
// Blood Sugar Counter End

emergencybtn.addEventListener('click', function () {
    alert("Dear User, We have called for an Ambulance at your Current Location");
});

// Medicine Section Add Medicine JS Start

function addMedicine(){
    let medname = document.getElementById('med-name').value;
    let medmor = document.getElementById('morning').value;
    let medafter = document.getElementById('afternoon').value;
    let medeven = document.getElementById('evening').value;
    var rows= "";
    if(medname == ""){
        alert("Medicine Name Cannot Be Blank");
    }
    else if(medmor == "Morning" || medafter == "Afternoon"|| medeven == "Evening"){
        alert("Please Select Timings as  Yes OR No !!!");
    }
    else{
    rows += "<tr><td>" + medname + "</td><td>" + medmor + "</td><td>" + medafter + "</td><td>" + medeven + "</td><tr>";
    var tbody = document.querySelector('#list tbody');
    var tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr);
    }
}



