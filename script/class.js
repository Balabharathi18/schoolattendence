let student_Data=[];
let init_data={};


// for attendence page redirection
function attendance(){
    console.log("ok");
    location.href="./class1attd.html";
}

function backToMain(){
    location.href="../index.html"
}

// For showing the form for students details entry
function std_form(){
    let decor=document.getElementById("std-form");
    let decor1=document.getElementById("tab");
    let container=document.getElementById("box");

    container.style.margin=0;
    decor.style.display="block";
    decor1.style.display="block";
}

function submitOrUpdate(){
    let name=document.getElementById("name").value;
    let gender=document.getElementById("gender").value;
    let age=document.getElementById("age").value;
    let addr=document.getElementById("addr").value;
    let pname=document.getElementById("pname").value;
    let phno=document.getElementById("phno").value;

    init_data={
        Name:name,
        Gender:gender,
        Age:age,
        Address:addr,
        Parent_Name:pname,
        Phone:phno
    };

    student_Data.push(init_data);
    console.log(student_Data);
    document.getElementById("registration-form").reset();
    localStorage.setItem("student_data",JSON.stringify(student_Data));
    let student_list=JSON.parse(localStorage.getItem("student_data"));
    updatetable(student_list);
 
}

// for appending the data in the table

function updatetable(student_list){
    let tbody=document.getElementById("tab1");
    tbody.innerHTML="";

    let newarr=student_list;

    for (let i = 0; i < newarr.length; i++) {
        let student = newarr[i];
      
        let row = document.createElement("tr");
        row.innerHTML =
          "<td>" + (i + 1) + "</td>" +
          "<td>" + student.Name + "</td>" +
          "<td>" + student.Gender + "</td>" +
          "<td>" + student.Age + "</td>" +
          "<td>" + student.Address + "</td>" +
          "<td>" + student.Parent_Name + "</td>" +
          "<td>" + student.Phone+ "</td>" +
          "<td><button onclick='edit(" + i + ")' class='btn-submit'>Edit</button><b>|</b><button onclick='remove(" + i + ")' class='btn-delete'>Delete</button><b>|</b><button class='btn-down' onclick='down("+i+")'>Down<i class='arrow down '></i></button><b>|</b><button class='btn-up' onclick='up("+i+")'>UP<i class='arrow up '></i></button>";
      
        tbody.appendChild(row);
      }
}