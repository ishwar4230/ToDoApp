// var data= new Array();
// localStorage.setItem("data", JSON.stringify(data));
window.onload = function() {

        updateList();
    }
    // var k;
    // var list = document.getElementById("myList");

document.getElementById("butt1").onclick = function addList() {

    var str = document.getElementById("box").value;

    if (str == "") {
        alert("Text Box is empty");
    } else {
        var data = localStorage.getItem("data");

        if (data == null) mydata = [];
        else mydata = JSON.parse(data);

        mydata.push(str);

        localStorage.setItem("data", JSON.stringify(mydata));
        document.getElementById("box").value = "";
        updateList();
    }
}

function updateList() {
    clearPlace();
    mydata = JSON.parse(localStorage.getItem("data"));

    if (mydata.length != 0) {
        var list = document.getElementById("myList");

        mydata.forEach(function(element, index) {
            let li = document.createElement("li");
            li.innerText = element;
            list.appendChild(li);


        });
    } else document.getElementById("empty").innerHTML = "Your List is Empty";

}

function clearPlace() {
    document.getElementById("myList").innerHTML = "";
    document.getElementById("empty").innerHTML = "";
}


document.getElementById("butt2").onclick = function clear() {


    mydata = [];
    localStorage.setItem("data", JSON.stringify(mydata));
    updateList();

}

document.getElementById("delete").onclick = function cutList() {

    let x = document.getElementById("delbox").value;
    let ind = parseInt(x);
    let int = Number.isInteger(ind);
    let data = localStorage.getItem("data");

    mydata = JSON.parse(data);

    let len = mydata.length;
    if (ind < 1 || ind > len || int == false) {
        alert("Enter a valid serial No!");
        document.getElementById("delbox").value = "";
    } else {
        mydata.splice(ind - 1, 1);

        localStorage.setItem("data", JSON.stringify(mydata));
        document.getElementById("delbox").value = "";
        updateList();
        alert("Deleted!");
    }
}