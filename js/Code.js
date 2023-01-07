"use strict";

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");


function createListElement() {
    if(input.value.length > 0 ){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";

        function crossOut() {
            li.classList.toggle("done");
        }

        li.addEventListener("click", crossOut);

        var dBtn = document.createElement("button");
        dBtn.appendChild(document.createTextNode("X"));
        li.appendChild(dBtn);

        dBtn.addEventListener("click", deleteListItem)
        
        function deleteListItem() {
            li.classList.add("delete");
        }
        
    }   
}

function addListAfterKeypress(event) {
    if(input.value.length > 0 && event.which === 13){
        createListElement();
    }
}

enterButton.addEventListener("click", createListElement);

input.addEventListener("keypress", addListAfterKeypress);