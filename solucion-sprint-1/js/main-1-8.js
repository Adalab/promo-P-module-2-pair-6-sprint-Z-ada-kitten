'use strict';

//Adicionar nuevo gatito
function addNewKitten() {
    const newKittenDataObject = {
        image: inputPhoto.value,
        desc: inputDesc.value,
        name: inputName.value,
        race: inputRace.value,
      };

    if (newKittenDataObject.desc === "" && newKittenDataObject.image === "" && newKittenDataObject.name === "" && newKittenDataObject.race) {
        labelMesageError.innerHTML = "Debe rellenar todos los valores";
    } else {
        if (newKittenDataObject.desc !== "" && newKittenDataObject.image !== "" && newKittenDataObject.name !== "") {
            labelMesageError.innerHTML = "";
        }
    }

    kittenDataList.push(newKittenDataObject);
}

function cleanNewKittenInput() {
    newFormElement.classList.add("collapsed");
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
}

function nameMesage () {
    labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
}

function paintNewKitten() {
    renderKittenList(kittenDataList);
}


//Eventos
function handleFunction(event) {
    event.preventDefault();
    addNewKitten();
    cleanNewKittenInput();
    nameMesage();
    paintNewKitten();
}

buttonAdd.addEventListener("click",handleFunction);