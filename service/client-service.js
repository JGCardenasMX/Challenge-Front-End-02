
// Crea un producto para agregar en el db.json desde la pagina agregar.html
const crearProducto = (nombre, precio, descripcion, imagen, categoria) =>{
    return fetch("http://localhost:3000/perfil", {
        method:"POST",
        headers: {
            "Content-type":"application/json"
        },
        body:JSON.stringify({nombre, precio, descripcion, imagen, categoria, id:uuid.v4()})
    })
}

// Crea la linea de productos para la categoria Star Wars en la pagina de index.html
const crearPreviewProductoStarWars = (nombre, precio, imagen, categoria, id, descripcion) => {
    if (categoria == "Star Wars") {
        const producto = document.createElement("tr");
        producto.classList.add("producto")
        const contenido = 
            `
            <td class="imgProducto">
                <img src="${imagen}" alt="">
            </td>
            <h3 class="nombreProducto">${nombre}</h3>
            <h4 class="precioProducto">$${precio}</h4>
            <form action="">
                <input type="submit" value="Ver producto" class="verProducto" id="${id}">
            </form>
            `
    producto.innerHTML = contenido;
    const inputVer = producto.querySelector("input")
    inputVer.addEventListener("click", () => {
        const id = inputVer.id;
        clientService.obtenerIP(id).then( respuesta => {
            //console.log("respuesta: ",respuesta);
            window.open("producto.html?prodId=" + id);
        }).catch(error =>alert("Ocurrio un error"));
        //console.log("El click", id);
    });
    return producto;
    }
}

// Crea la linea de productos para la categoria Consolas en la pagina de index.html
const crearPreviewProductoConsolas = (nombre, precio, imagen, categoria, id) => {
    //console.log("Categoria Consola: ", categoria);
    if (categoria == "Consolas") {
        const producto = document.createElement("tr");
        producto.classList.add("producto")
        const contenido = 
            `
            <td class="imgProducto">
                <img src="${imagen}" alt="">
            </td>
            <h3 class="nombreProducto">${nombre}</h3>
            <h4 class="precioProducto">$${precio}</h4>
            <form action="">
                <input type="submit" value="Ver producto" class="verProducto" id="${id}">
            </form>
            `
    producto.innerHTML = contenido;
    const inputVer = producto.querySelector("input")
    inputVer.addEventListener("click", () => {
        const id = inputVer.id;
        clientService.obtenerIP(id).then( respuesta => {
            //console.log("respuesta: ",respuesta);
            window.open("producto.html?prodId=" + id);
        }).catch(error =>alert("Ocurrio un error"));
        //console.log("El click", id);
    })
    //console.log("producto:", producto);
    return producto;
    }
}

// Crea la linea de productos para la categoria Diversos en la pagina de index.html
const crearPreviewProductoDiversos = (nombre, precio, imagen, categoria, id) => {
    //console.log("Categoria Diversos: ", categoria);
    if (categoria == "Diversos") {
        const producto = document.createElement("tr");
        producto.classList.add("producto")
        const contenido = 
            `
            <td class="imgProducto">
                <img src="${imagen}" alt="">
            </td>
            <h3 class="nombreProducto">${nombre}</h3>
            <h4 class="precioProducto">$${precio}</h4>
            <form action="">
                <input type="submit" value="Ver producto" class="verProducto" id="${id}">
            </form>
            `
    producto.innerHTML = contenido;
    const inputVer = producto.querySelector("input")
    inputVer.addEventListener("click", () => {
        const id = inputVer.id;
        clientService.obtenerIP(id).then( respuesta => {
            //console.log("respuesta: ",respuesta);
            window.open("producto.html?prodId=" + id);
        }).catch(error =>alert("Ocurrio un error"));
        //console.log("El click", id);
    })
    //console.log("producto:", producto);
    return producto;
    }
}

const obtenerIP = (id) =>{
    //console.log("crear a:", id);
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method:"GET",
    });
};

// Eliminar un producto de nuestro archivo db.json
const eliminarProducto = (id) =>{
    alert("Se elimino el producto exitosamente")
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method:"DELETE"
    })     
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(respueta => respueta.json())
}

const actualizarProducto = (imagen, nombre, precio, categoria, descripcion, id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, nombre, precio, categoria, descripcion})
    }).then((respuesta) => respuesta).catch((err) => console.log(err));
}

export const clientService = {
    crearProducto,
    crearPreviewProductoStarWars,
    obtenerIP,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
}



const tableStarWars = document.querySelector("[data-preview-StarWars]");
//console.log("tabla StarWars:",tableStarWars);
const tableConsolas = document.querySelector("[data-preview-Consolas]");
const tableDiversos = document.querySelector("[data-preview-Diversos]");


const http = new XMLHttpRequest();

//metodo y url
http.open("GET", "http://localhost:3000/perfil");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    

    data.forEach(perfil => {
        if (perfil.categoria == "Star Wars") {
            const nuevoPreview = crearPreviewProductoStarWars(perfil.nombre, perfil.precio, perfil.imagen, perfil.categoria, perfil.id, perfil.descripcion)
            //console.log("nuevo Codigo: ",nuevoPreview);
            tableStarWars.appendChild(nuevoPreview);
        }
        
    });

    
    data.forEach(perfil => {
        if (perfil.categoria == "Consolas") {
            const nuevoPreview = crearPreviewProductoConsolas(perfil.nombre, perfil.precio, perfil.imagen, perfil.categoria, perfil.id)
            //console.log("nuevo Codigo: ",nuevoPreview);
            tableConsolas.appendChild(nuevoPreview);
        }
        
    });

    data.forEach(perfil => {
        if (perfil.categoria == "Diversos") {
            const nuevoPreview = crearPreviewProductoDiversos(perfil.nombre, perfil.precio, perfil.imagen, perfil.categoria, perfil.id)
            //console.log("nuevo Codigo: ",nuevoPreview);
            tableDiversos.appendChild(nuevoPreview);
        }
    });
}

