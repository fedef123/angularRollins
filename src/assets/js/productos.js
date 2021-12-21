
const contenedor = document.querySelector('.flex-container');

function crearProducto(nombre, marca, precio){
    img = '<img src="tenor sax yts25.jpg">';
    nombre = `<h2>${nombre}</h2>`;
    marca = `<h3>${marca}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`
    return [img,nombre, marca, precio, img];
}



contenedor.innerHTML = producto[0] + producto[1] + producto[2]

//document.write(producto[0], producto[1], producto[2], producto[3])
console.log(producto);