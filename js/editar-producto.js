import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-editform]")

const obtenerInfomacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id")

    if (id == null) {
        alert("Ocurrio un error, intenta de nuevo en unos minutos")
    }
    //console.log("url: ", url.searchParams.get("id"));
    const imagen = document.querySelector("[data-editimagen]");
    const nombre = document.querySelector("[data-editnombre]");
    const precio = document.querySelector("[data-editprecio]");
    const categoria = document.querySelector("[data-editcategoria]");
    const descripcion = document.querySelector("[data-editdescripcion]");
    //console.log("imagen:",imagen, " - ",nombre, " - ",precio, " - ", categoria, " - ",descripcion, " - ",)



    clientService.detalleProducto(id).then((perfil) => {
        imagen.src = perfil.imagen;
        nombre.value = perfil.nombre;
        precio.value = perfil.precio;
        categoria.value = perfil.categoria;
        descripcion.value = perfil.descripcion;

    })
}

obtenerInfomacion();

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id")

    const imagen = document.querySelector("[data-editimagen]").src;
    const nombre = document.querySelector("[data-editnombre]").value;
    const precio = document.querySelector("[data-editprecio]").value;
    const categoria = document.querySelector("[data-editcategoria]").value;
    const descripcion = document.querySelector("[data-editdescripcion]").value;
    //console.log("imagen: ",imagen);
    //console.log("nombre: ",nombre);
    //console.log("precio: ",precio);
    //console.log("categoria: ",categoria);
    //console.log("descripcion: ",descripcion);
    clientService.actualizarProducto(imagen, nombre, precio, categoria, descripcion, id).then(() => {window.location.href="productos.html"})
})