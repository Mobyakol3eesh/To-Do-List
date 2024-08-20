const cardBody = document.getElementById("card-body");
let itemInput = document.getElementById("item-input");
let addBtn = document.getElementById("add-btn");
var text = "";
itemInput.addEventListener("change", (e) => {
    {
        text = e.target.value;
    }
});

function addItem() {
    cardBody.insertAdjacentHTML(
        "beforeend",
        `
            <div class="item d-flex justify-content-between align-items-center">
                <p class="d-inline">${text}</p>
                <div>
                    <a class="btn list-btn">
                        <img src="images/Pencil Drawing.svg" alt="Edit" onclick="editItem(event)" />
                    </a>
                    <a class="btn list-btn">
                        <img src="images/Remove.svg" alt="Remove"  onclick="removeItem(event)"/>
                    </a>
                </div>
            </div>
        `
    );
}
function removeItem(event) {
    event.stopPropagation();
    const item = event.target.closest('.item');
    if (item) {
        item.remove();
    }
}

function editItem(event) {
    event.stopPropagation();
    const item = event.target.closest('.item');
    const paragragh = item.querySelector('p');
    var currentText = paragragh.innerText;
    const newText = prompt('Edit the text: ' + currentText);
    paragragh.innerText = newText;
}
