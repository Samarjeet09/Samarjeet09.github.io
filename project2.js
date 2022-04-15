add = document.getElementById("add");
update = () => {
  console.log("Sexy mama");
  tit = document.getElementById("title").value;
  des = document.getElementById("Discription").value;
  if (tit != "" || des != "") {
    if (localStorage.getItem("itemsJson") == null) {
      itemJsonArray = [];
      itemJsonArray.push([tit, des]);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    } else {
      itemJsonArrayStr = localStorage.getItem("itemsJson");
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([tit, des]);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
    // populate the table
    let tablebody = document.getElementById("table-body");
    let str = "";
    itemJsonArray.forEach((element, index) => {
      str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick = "deletecrow(${index})">Delete</button></td>
        </tr>
        `;
    });
    tablebody.innerHTML = str;
  }
};
add.addEventListener("click", update);
onload = () => {
  if (localStorage.length != 0) {
    console.log("hello");
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    let tablebody = document.getElementById("table-body");
    let str = "";
    itemJsonArray.forEach((element, index) => {
      str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick = "deletecrow(${index})">Delete</button></td>
        </tr>
        `;
    });
    tablebody.innerHTML = str;
  }
};
function deletecrow(item) {
  console.log("DElete");
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  // delete item
  // using array method splice
  itemJsonArray.splice(item, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  location.reload();
}
clear = document.getElementById("clear");
clear.addEventListener("click", cleared);
function cleared() {
  //   itemJsonArray = [];this what i thouhth better would be be to use
  // localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  if (confirm("Do you really want to clear")) {
    localStorage.clear();
    location.reload();
  }
}
function about()
{
    let str = `
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>kya karogei jaan kei</h1>

    
  </body>
</html>
    `;
    doc = document.getElementById("main_page");
    doc.innerHTML = str;    

}
function contact()
{
    let str = `
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Under construction</h1>

    
  </body>
</html>
    `;
    doc = document.getElementById("main_page");
    doc.innerHTML = str;    

}
