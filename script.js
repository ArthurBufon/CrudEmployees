function addLine() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let job = document.getElementById('job').value;
    let table = document.getElementById('tableCRUD');

    let tableSize = table.rows.length;
    let row = table.insertRow(tableSize);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    row.id = tableSize;

    let btnCode = "<button class='remove-btn' onclick='removeLine(this)'>Remove</button>"

    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    cell5.innerHTML = job;
    cell6.innerHTML = btnCode;

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('job').value = "";

    return false;
}

function removeLine(id){
    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild(row);

    return false;
}