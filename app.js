function addTodo() {
    var inputElement = document.getElementById("input");
    var novyUkol = inputElement.value;
    var list = document.createElement("li");
    var text = document.createTextNode(novyUkol);
    list.appendChild(text);

    if (novyUkol === '') {
        alert("Musíš něco zapsat!");
    } else {
        document.getElementById("seznam").appendChild(list);
        inputElement.value = "";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);