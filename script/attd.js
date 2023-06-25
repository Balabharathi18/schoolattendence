let std_list=JSON.parse(localStorage.getItem("student_data"));
updatetable();
console.log(std_list);
function updatetable(){
    let tbody=document.getElementById("tab1");
    tbody.innerHTML="";

    let newarr=std_list;

    for (let i = 0; i < newarr.length; i++) {
        let student = newarr[i];
      
        let row = document.createElement("tr");
        row.innerHTML =
          "<td>" + (i + 1) + "</td>" +
          "<td>" + student.Name + "</td>" +
          "<td>" + student.Age + "</td>" +
        //   "<td>" + student.Address + "</td>" +
        //   "<td>" + student.Parent_Name + "</td>" +
        //   "<td>" + student.Phone+ "</td>" +
          "<td><button onclick='edit(" + i + ")' class='btn-submit'>Edit</button><b>|</b><button onclick='remove(" + i + ")' class='btn-delete'>Delete</button><b>|</b><button class='btn-down' onclick='down("+i+")'>Down<i class='arrow down '></i></button><b>|</b><button class='btn-up' onclick='up("+i+")'>UP<i class='arrow up '></i></button>";
      
        tbody.appendChild(row);
      }
}