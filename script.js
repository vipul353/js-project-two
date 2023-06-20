var headerHeader = true;
var CardmainDivValue;
// on click of back button
let backHr = document.getElementById("back");
backHr.addEventListener("click", () => {
  let returnMain = document.getElementById("body");
  returnMain.style.background = "black";
  headerHeader = true;
  if (headerHeader) {
    let hrader_main = document.getElementById("main-header");
    hrader_main.style.display = "flex";
    let hrader_back = document.getElementById("back");
    hrader_back.style.display = "none";
  } else {
    let hrader_back = document.getElementById("back");
    hrader_back.style.display = "flex";
    let hrader_main = document.getElementById("main-header");
    hrader_main.style.display = "none";
  }
  hideOneCard(cr);
});
//on  starting
if (headerHeader) {
  let hrader_main = document.getElementById("main-header");
  hrader_main.style.display = "flex";
  let hrader_back = document.getElementById("back");
  hrader_back.style.display = "none";
} else {
  let hrader_back = document.getElementById("back");
  hrader_back.style.display = "flex";
  let hrader_main = document.getElementById("main-header");
  hrader_main.style.display = "none";
  let body = document.getElementById("body");
  body.style.backgroundColor = "green";
}

var inputText = document.getElementById("input_text");
function popUp() {
  let popup1 = document.querySelector(".main-popup");
  popup1.style.display = "grid";
}

function popUpTask() {
  let popup2 = document.querySelector(".test");
  popup2.style.display = "grid";
}

function AddTaskList() {
  let inputValue = document.getElementById("task_input");
  // console.log(card);
  console.log(CardmainDivValue);
  AddTask(CardmainDivValue, inputValue.value);
  popUpTaskClose();
}

function popUpTaskClose() {
  let popup2 = document.querySelector(".test");
  popup2.style.display = "none";
}

function popUpClose() {
  let popup1 = document.querySelector(".main-popup");
  popup1.style.display = "none";
}

// var card;
var cr;
function AddItems() {
  var inputText = document.getElementById("input_text");
  let mainDiv = document.getElementById("main");
  let cards = document.createElement("div");
 let card = mainDiv.appendChild(cards);
  let crd = cards;
  card.classList.add("card");

  //   make header
  let header = document.createElement("div");
  // on click of header of card
  header.addEventListener("click", () => {
    console.log("");
    headerHeader = false;
    // console.log(headerHeader);
    mainDiv.style.justifyContent = "center"
    let MainDivChildren = mainDiv.children;
    console.log(MainDivChildren);
    for (let i = 0; i < MainDivChildren.length; i++) {
      // console.log(i)
      if (MainDivChildren[i] != card) {
        
       
        MainDivChildren[i].style.display = "none"
      }else{
        cr = MainDivChildren[i]
      }


    }

    if (headerHeader) {
      let hrader_main = document.getElementById("main-header");
      hrader_main.style.display = "flex";
      let hrader_back = document.getElementById("back");
      hrader_back.style.display = "none";
    } else {
      let hrader_back = document.getElementById("back");
      hrader_back.style.display = "flex";
      hrader_back.style.justifyContent = "center";
      let hrader_main = document.getElementById("main-header");
      hrader_main.style.display = "none";
      let body = document.getElementById("body");
      body.style.backgroundColor = "green";
    }
    // showOneCard(crd);
  });
  let cardHeader = card.appendChild(header);
  cardHeader.classList.add("card-header");
  // make main card
  let CardmainDiv = document.createElement("div");
  let cardMain = card.appendChild(CardmainDiv);
  cardMain.classList.add("mainCard");

  //   make footer
  let footerDiv = document.createElement("div");
  let footerJs = card.appendChild(footerDiv);
  footerJs.classList.add("footerCs");
  // add delete icons
  let deleteIcon = document.createElement("img");
  let pureIcon = footerJs.appendChild(deleteIcon);
  deleteIcon.src = "./images/delete.png";
  deleteIcon.classList.add("iconDeleteClass");
  // add delete icons fuction
  deleteIcon.addEventListener("click", () => {
    deleteCard(cards);
    // DeleteOneCard(cn);
  });

  // add create  icon
  let createIcon = document.createElement("img");
  let pureCreateIcon = footerJs.appendChild(createIcon);
  createIcon.src = "./images/add.png";
  createIcon.classList.add("iconCreateClass");
  //  functionaality
  createIcon.addEventListener("click", () => {
    CardmainDivValue = CardmainDiv;
    console.log(cardMain);
    popUpTask();
  });

  //  make header text
  let txt = document.createElement("div");
  let text = cardHeader.appendChild(txt);
  text.classList.add("card-header-text");
  text.innerText = inputText.value;
  popUpClose();
  console.log(inputText.value);
}

function deleteCard(card) {
  let OneTskCon = document.getElementById("oneTsk");
  let mainCon = document.getElementById("main");
  // OneTskCon.remove()
  card.remove();
  // let m = OneTskCon.children;
  // let k = mainCon.children;
  // for (let index = 0; index < m.length; index++) {
  //   m[index].remove();
  // }
  //  for (let index = 0; index < k.length; index++) {
  //   // console.log(k[index])
  //   if(card==k[index])
  //   {k[index].remove()}
  //   console.log('hello')
  //  }
}

function AddTask(CardmainDiv, TxtValue) {
  let taskDiv = document.createElement("div");
  CardmainDiv.appendChild(taskDiv);
  taskDiv.classList.add("task-Row");
  let button = document.createElement("button");

  let span = document.createElement("span");
  span.classList.add("tsk-txt");
  taskDiv.appendChild(span);
  span.innerText = TxtValue;
  button.addEventListener("click", () => {
    markAsDone(span, button);
  });

  taskDiv.appendChild(button);
  console.log(taskDiv.appendChild(button));
  button.innerText = "Mark Done";
  button.classList.add("mrk-btn");
}

function markAsDone(span, button) {
  span.classList.add("mrk-dn");
  button.classList.add("mrk-dn");
}

var cn;

function showOneCard(card) {
  let OneTskCon = document.getElementById("oneTsk");
  let mainCon = document.getElementById("main");
  mainCon.style.display = "none";
  OneTskCon.style.display = "grid";
  cn = OneTskCon.appendChild(card);
  // console.log(card)
}

// function DeleteOneCard(){
//   console.log(cn);
//   // console.log(cn.remove());
// }

function hideOneCard(card) {
  let OneTskCon = document.getElementById("oneTsk");
  let mainCon = document.getElementById("main");
  let MainDivChildren = mainCon.children
  mainCon.style.display = "flex";
  mainCon.style.justifyContent = "space-between";
  for(let i=0;i<MainDivChildren.length;i++){
     if (MainDivChildren[i]!=cr) {
      console.log(MainDivChildren[i]);
      MainDivChildren[i].style.display = "flex"
     }
  }
  // mainCon.appendChild(cn);
  // console.log(card);
}
