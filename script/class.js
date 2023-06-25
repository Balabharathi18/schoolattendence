let student_Data=[];
let init_data={};



function attendance(){
    console.log("ok");
    location.href="./class1attd.html";
}
function std_form(){
    let decor=document.getElementById("std-form");
    let decor1=document.getElementById("tab");

    decor.style.display="block";
    decor1.style.display="block";
}

function submitOrUpdate(){
    let name=document.getElementById("name").value;
    // let gender=document.getElementById("n").value;
    let age=document.getElementById("age").value;
    let addr=document.getElementById("addr").value;
    let pname=document.getElementById("pname").value;
    let phno=document.getElementById("phno").value;

    init_data={
        Name:name,
        Age:age,
        Address:addr,
        Parent_Name:pname,
        Phone:phno
    };

    student_Data.push(init_data);
    console.log(student_Data);
}

// console.log("am working");