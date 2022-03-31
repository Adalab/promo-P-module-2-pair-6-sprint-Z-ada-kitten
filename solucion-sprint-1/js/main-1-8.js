'use strict'
//Adicionar nuevo gatito
function addNewKitten(event) {
    event.preventDefault();
    const newKittenDataObject = {
        valueDesc: inputDesc.value,
        valuePhoto: inputPhoto.value,
        valueName: inputName.value,
      };

    if (valueDesc === "" && valuePhoto === "" && valueName === "") {
        labelMesageError.innerHTML = "Debe rellenar todos los valores";
    } else {
        if (valueDesc !== "" && valuePhoto !== "" && valueName !== "") {
            labelMesageError.innerHTML = "";
        }
    }

    kittenDataList.push(newKittenDataObject);
}

function cleanNewKittenInput(event) {
    event.preventDefault();
    newFormElement.classList.add("collapsed");
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
}

function nameMesage (event) {
    labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
}

//Eventos
function handleFunction(event) {
    event.preventDefault();
    addNewKitten();
    cleanNewKittenInput();
    nameMesage();
}

buttonAdd.addEventListener("click",handleFunction);