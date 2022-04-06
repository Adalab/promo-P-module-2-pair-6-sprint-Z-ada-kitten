'use strict';
function filterKitten(event) {
  event.preventDefault();

  const descrSearchText = input_search_desc.value;

  listElement.innerHTML = '';

  //   ¿Con FILTER podemos buscar directamente en el elemento "kittenDataList" o tenemos que especificar la ruta hasta entrar a la propiedad "desc" del objeto (gato 1 o gato X) del array de gatitos (como está mal hecho en la línea siguiente)?
  const kittens = kittenDataList.filter((michi) =>
    michi.desc.includes(descrSearchText)
  );

  // si michiDes incluye descrSearchText

  //hay que añadir el nuevo array con el filter

  /*for (const kittenItem of kittenDataList) {

        if (kittenItem.desc.includes(descrSearchText)) {
            listElement.innerHTML += renderKitten(kittenItem);
        }
    }*/
}

// function filterKitten(ev) {
//Modifica el código:
//Haz un filter sobre el listado de gatitos
//Vuelve a pintar el listado de gatitos filtrados en el HTML.
// }

searchButton.addEventListener('click', filterKitten);
