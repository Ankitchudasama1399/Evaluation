let myForm = document.querySelector("form");
let myName = document.getElementById("name");
let ID = document.getElementById("doctor_id");
let speci = document.getElementById("specialization");
let exp = document.getElementById("experience");
let mail = document.getElementById("email");
let Mnumber = document.getElementById("mobile");
let Tbody = document.querySelector("tbody");
let AllData = [];
let role;
let filterSelect = document.getElementById("filter");

CheckExp = (exp) => {
    if(exp > 5) {
        role = "Senior";
    } else if(exp >= 2 && exp <= 5) {
        role = "Junior";
    } else {
        role = "Fresher";
    }
    return role;
}

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    CheckExp(exp.value);
    let data = {};
    data.input1 = myName.value;
    data.input2 = ID.value;
    data.input3 = speci.value;
    data.input4 = exp.value;
    data.input5 = mail.value;
    data.input6 = Mnumber.value;
    data.input7 = role;

    AllData.push(data);

    Tbody.innerHTML = null;

    displayData();
    myForm.reset();
});

filterSelect.addEventListener("change", function () {
    let selectedSpecialization = filterSelect.value;
    let filteredData = AllData.filter(item => item.input3 === selectedSpecialization || selectedSpecialization === 'All');
    displayData(filteredData);
});

function deleteRow(index) {
    AllData.splice(index, 1);
    displayData();
}   

function displayData(data) {
    Tbody.innerHTML = null;

    if (!data) {
        data = AllData;
    }

    data.forEach((ele, index) => {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let deleteButton = document.createElement('button');

        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => deleteRow(index));

        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        td3.innerText = ele.input3;
        td4.innerText = ele.input4;
        td5.innerText = ele.input5;
        td6.innerText = ele.input6;
        td7.innerText = ele.input7;

        row.append(td1, td2, td3, td4, td5, td6, td7, deleteButton);
        Tbody.append(row);
    });
}
