var enterButton = document.getElementById("Enter");
var input = document.getElementById("UserInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length
}

function listLength() {
    item.length
}

function createListelement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";


    function crossOut() {
        li.classList.toggle("Done");
    }
    li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);

    function deleteListitem() {
        li.classList.add("Delete");
    }
    dBtn.addEventListener("click", deleteListitem);
}

function addListafterclick() {
    if (inputLength() > 0) {
        createListelement();
    }
}

enterButton.addEventListener("click", addListafterclick);

addInput.addEventListener('keyup', (Event) => {
    if(Event.which ===13) {
        addLists();
    }
});

