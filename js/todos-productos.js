import { clientService } from "../service/client-service.js";

const crearPreviewProductos = (nombre, precio, imagen, id) => {
    
    const producto = document.createElement("tr");
    producto.classList.add("producto")
    const contenido = 
        `
        <td class="imgProducto">
            <img src="${imagen}" alt="">
        </td>
        <h3 class="nombreProducto">${nombre}</h3>
        <h4 class="precioProducto">$${precio}</h4>
        <div class= "editProducto">
            <h3>#${id}</h3>
            <button class="simple-button simple-button--delete" type="button" id="${id}"><i class="fa-solid fa-trash" id="btnBorrar"></i></button>
            <button class="simple-button simple-button--edit" type="button"><a href="../editar-producto.html?id=${id}"><i class="fa-solid fa-pencil" id="btnEditar"></i></a></button>
        </div>
        `
    producto.innerHTML = contenido;
    const btnBorrar = producto.querySelector("button")
    //console.log("producto: ",producto)
    //console.log(btnBorrar)
    btnBorrar.addEventListener("click", () => {
        const id=btnBorrar.id
        //console.log("el click", id)
        clientService.eliminarProducto(id).then(respuesta => {
            console.log(respuesta)
        }).catch(err => alert("Ocurrio un error"));
    })

    /*const inputVer = producto.querySelector("input")
    inputVer.addEventListener("click", () => {
        const id = inputVer.id;
        clientService.obtenerIP(id).then( respuesta => {
            //console.log("respuesta: ",respuesta);
            window.open("producto.html?prodId=" + id);
        }).catch(error =>alert("Ocurrio un error"));
        //console.log("El click", id);
        );*/
    return producto;
};

const table = document.querySelector("[data-preview-Todos]");


const http = new XMLHttpRequest();

//metodo y url
http.open("GET", "http://localhost:3000/perfil");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    
    data.forEach(perfil => {
        const nuevoProducto = crearPreviewProductos(perfil.nombre, perfil.precio, perfil.imagen, perfil.id)
        //console.log("nuevo Codigo: ",nuevoProducto);
        table.appendChild(nuevoProducto);
    });
}