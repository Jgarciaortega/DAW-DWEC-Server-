



function allowDrop(ev) {

    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {

    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");
    console.log(data);

    if (!ev.target.draggable) {
        ev.target.appendChild(document.getElementById(data));

    }
}