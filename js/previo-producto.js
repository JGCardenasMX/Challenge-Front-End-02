const crearPreviewProducto = (nombre, precio, imagen, id) => {
    const producto = document.createElement("tr");
    producto.classList.add("producto")
    const contenido = 
        `
        <td class="imgProducto">
            <img src="imagenes/mug_skytroper.png" alt="">
        </td>
        <h3 class="nombreProducto">${nombre}</h3>
        <h4 class="precioProducto">$${precio}</h4>
        <form action="">
            <input type="submit" value="Ver producto" class="verProducto">
        </form>
        `
    producto.innerHTML = contenido;
    //console.log("producto:", producto);
    return producto;
}