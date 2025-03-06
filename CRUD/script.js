
// get elements
let input = document.getElementById('input');
let divMain = document.getElementById('data');
let saveBtnContainer = document.getElementById('saveBtnContainer')
let addBtn = document.getElementById('btn');


let saveBtn = document.createElement('button');
saveBtn.className = "btn btn-success mt-3";
saveBtn.innerHTML = "Save"
saveBtnContainer.appendChild(saveBtn);
saveBtn.style.display = "none";


addBtn.addEventListener("click", function () {

    let value = input.value;
    // data  
    if (value == '') {
        document.getElementById('error').innerHTML = 'Please enter text';
        return
    }

    let divSub = document.createElement('div');
    let divOne = document.createElement('div');
    let divTwo = document.createElement('div');

    divSub.className = "row align-items-center mt-2 rounded p-2 border bg-light";
    divMain.appendChild(divSub);

    divOne.className = "col-9";
    divOne.id = "data-container";
    divSub.appendChild(divOne);

    divTwo.className = "col-3";
    divTwo.id = "button-container";
    divSub.appendChild(divTwo);

    let data = document.createElement('p');
    data.innerHTML = value;
    data.className = 'text-start';
    divOne.appendChild(data);

    // edit btn
    let edit = document.createElement('button');
    edit.innerHTML = 'Edit';
    edit.className = 'btn btn-primary text-end';
    divTwo.appendChild(edit);

    edit.addEventListener('click', function () {

        input.value = data.innerHTML;
        saveBtn.style.display = 'inline-block';
        addBtn.style.display = 'none';
        console.log('saveBtn')


        saveBtn.onclick = function () {
            data.innerHTML = input.value;
            input.value = '';
            saveBtn.style.display = 'none';
            addBtn.style.display = 'inline-block';
            addBtn.style.transitionDuration = "1s";
        };

    })

    // delete btn 
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete"
    deleteBtn.className = 'btn ms-1 btn-danger text-end';
    divTwo.appendChild(deleteBtn);

    deleteBtn.onclick = function () {

        divSub.style.display = "none";

    };

    input.value = '';
});
