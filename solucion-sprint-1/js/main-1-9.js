'use strict';
function filterKitten(event) {
    event.preventDefault();

    const descrSearchText = input_search_desc.value;

    listElement.innerHTML = "";

    const filterKiteen = kittenDataList.filter((pepino) => pepino.)

    //hay que añadir el nuevo array con el filter


    /*for (const kittenItem of kittenDataList) {

        if (kittenItem.desc.includes(descrSearchText)) {
            listElement.innerHTML += renderKitten(kittenItem);
        }
    }*/

}
//searchButton.addEventListener("click", filterKitten);