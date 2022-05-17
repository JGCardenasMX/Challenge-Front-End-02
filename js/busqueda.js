function searchProduct() {
    var busqueda = document.getElementById("barraBusqueda").value;
    console.log("buscas: ", busqueda)
    
    const http = new XMLHttpRequest();
    
    //metodo y url
    http.open("GET", "http://localhost:3000/perfil");

    http.send();

    http.onload = () => {
        const data = JSON.parse(http.response);

        //console.log("data: ", data[0])
        var encontrado = false;
        //console.log("longitudData", data[longitudData-1].nombre)

        for(let i = 0; i < data.length; i++){
            //console.log("data:",data[i].nombre)
            //console.log(data[i].nombre == busqueda);
            if (data[i].nombre == busqueda) {
                window.open("producto.html?prodId=" + data[i].id);
                encontrado = true
            };
        }

        if (!encontrado) {
            alert("No se encuentra el producto");
            document.getElementById("barraBusqueda").value = "";
        };
    }
};
