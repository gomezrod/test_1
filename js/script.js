let botonAgregar = document.querySelector("#botonAgregar");
let contador = 0;

botonAgregar.addEventListener('click', () => {
    let inputNombre = document.querySelector("#inputNombre");
    let inputEdad = document.querySelector("#inputEdad");
    let inputPrecio = document.querySelector("#inputDescripcion");

    if (inputNombre.value && inputEdad.value && inputPrecio.value) {
        if(isNaN(inputEdad.value)){
            alert("La edad debe ser un número.");
            return;
        }
        let travesti = {
            nombre: inputNombre.value,
            edad: parseInt(inputEdad.value),
            descripcion: inputPrecio.value
        };
        sessionStorage.setItem(`valor${contador}`, JSON.stringify(travesti));
        contador++;
        let listaProductos = document.querySelector(".listaProductos");
        let nuevoProducto = document.createElement("li");
        nuevoProducto.textContent = `${inputNombre.value} - Edad: ${inputEdad.value}, Descripcion:${inputDescripcion.value}`;
        if(listaProductos.firstChild) {
            let primerHijo = listaProductos.firstChild;
            listaProductos.insertBefore(nuevoProducto, primerHijo);
        }else {
            listaProductos.appendChild(nuevoProducto);
        }

        // Limpiar los campos de entrada
        inputNombre.value = '';
        inputEdad.value = '';
        inputPrecio.value = '';
    } else {
        alert("Por favor, completa todos los campos.");
    }
})
