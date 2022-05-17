
const crearPaginaProducto = (nombre, precio, descripcion, imagen) => {
    
    //console.log("nombre: ", nombre)
    const producto = document.createElement("tr");
    producto.classList.add("productoPrincipal")
    const contenido = 
        `<td>
            <img src="${imagen}" alt="">
        </td>
        <td>
            <div class="areaInfo">
                <h2>${nombre}</h2>
                <h3>$${precio}</h3>
                <h4>${descripcion}</h4>   
            </div>
        </td>
        `
    producto.innerHTML = contenido;
    //console.log("producto:", producto);
    //table.appendChild(nuevoProducto);
    return producto;
}

const table = document.querySelector("[data-table]");
console.log("tabla: ", table);

//const prodId = getParameterByName('q');
//console.log("id", prodId);

const http = new XMLHttpRequest();

//metodo y url
http.open("GET", "http://localhost:3000/perfil");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);

    let url = document.URL;
    //console.log("url: ",url)
    var arreglo_datos = url.split('prodId=');
    var id_producto = arreglo_datos[arreglo_datos.length - 1];
    //console.log("id: ", id_producto)

    data.forEach(perfil => {
        if (perfil.id == id_producto) {
            //console.log("id: ", id_producto)
            const nuevoProducto = crearPaginaProducto(perfil.nombre, perfil.precio, perfil.descripcion, perfil.imagen)
            //console.log("nuevo Codigo: ",nuevoProducto);
            table.appendChild(nuevoProducto); 
        }
    });
};