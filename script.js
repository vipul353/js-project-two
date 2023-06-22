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
  let Scrollheight = document.body.scrollHeight;
  let popMain = document.getElementById("mainPopUp")
  popMain.style.height = Scrollheight
  // let main = document.getElementById("main"); 
  // let   children = main.children
  // for (let i = 0; i < children.length; i++) {
  //   // console.log(i)
  //   children[i].style.fliter = 'blur'


  // }
  const elements = document.querySelectorAll('*');

  elements.forEach((element) => {
    element.style.overflowY = 'hidden';
  });
  
}

function popUpTask() {
  // let Scrollheight = document.body.scrollHeight;
  let popup2 = document.querySelector(".test");
  popup2.style.display = "grid";
  // popup2.style.height = Scrollheight.toString
  // console.log();
  const elements = document.querySelectorAll('*');

  elements.forEach((element) => {
    element.style.overflowY = 'hidden';
  });

  // let popMain = document.getElementById("mainPopUp")
 

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
  const elements = document.querySelectorAll('*');
  elements.forEach((element) => {
    element.style.overflowY = 'unset';
  });

}

function popUpClose() {
  let popup1 = document.querySelector(".main-popup");
  popup1.style.display = "none";
  const elements = document.querySelectorAll('*');

  elements.forEach((element) => {
    element.style.overflowY = 'unset';
  });
}

// var card;
var cr;// on select current task
function AddItems() {
  var inputText = document.getElementById("input_text");
  let mainDiv = document.getElementById("main");
   let noData = document.getElementById("no-data");
   noData.style.display = "none";
  let cards = document.createElement("div");
 let card = mainDiv.appendChild(cards);
  // let crd = cards;
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
  let mainDiv = document.getElementById("main");
  children     = mainDiv.children

  if (  children.length==2) {
    console.log("hello");
    card.remove()
    console.log(children);
    let noData = document.getElementById("no-data");
    noData.style.display = "block" 
  }else  if (mainDiv.children.length>0){
    card.remove()
  }



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
    markAsDone(span, button,taskDiv);
  });

  taskDiv.appendChild(button);
  console.log(taskDiv.appendChild(button));
  button.innerText = "Mark Done";
  button.classList.add("mrk-btn");
}

function markAsDone(span, button,taskDiv) {
  span.classList.add("mrk-dn");
  button.classList.add("mrk-dn-btn");
  taskDiv.style.display = "flex"
  taskDiv.style.justifyContent = "center"
}

var cn;



function hideOneCard(card) {

  let mainCon = document.getElementById("main");
  let MainDivChildren = mainCon.children
  mainCon.style.display = "flex";
  mainCon.style.justifyContent = "space-between";
  let noData = document.getElementById("no-data");
  for(let i=0;i<MainDivChildren.length;i++){
     if (MainDivChildren[i]!=cr) {
    
      console.log(MainDivChildren[i]);
      MainDivChildren[i].style.display = "flex"
      if (MainDivChildren[i]==noData){
        console.log("hello");
        noData.style.display = "none"
      }
     }
  }
  if (MainDivChildren.length==1) {
    noData.style.display = "block"
  }

}
