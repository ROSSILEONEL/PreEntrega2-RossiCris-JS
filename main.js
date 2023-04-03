
/* Pre entrega 2----
Capturar entradas mediante prompt().
Declarar variables y objetos necesarios para simular el proceso seleccionado.
Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log()
Estructura HTML del proyecto. 
Variables de JS necesarias. 
Funciones esenciales del proceso a simular.
Objetos de JS.
Arrays.
Métodos de búsqueda y filtrado sobre el Array.
La estructura hace referencia a el html y css, correspondientes al armado de la página general, pero que el JS que se evalúa, aún no está interactuando con ella.

*/



let typeFind=parseInt(prompt(`Bienvenido al programa interactivo PreEntrega DOS! \n Como desea realizar la busqueda?  \n 1- Por nombre del producto\n 2- Por precio del producto $ `));
const iva= (n)=> n+n*0.21;
console.log(typeFind);


let arrProd=[
    {id:1,nombre:"pantalon", precio:5000},
    {id:2,nombre:"buzo", precio:4000},
    {id:3,nombre:"pantalon", precio :5500},
    {id:4,nombre:"campera", precio :20000},
    {id:5,nombre:"gorro", precio :3000}
];

// OPCION 1 : BUSCAR NOMBRE
if(typeFind===1){
    let producto= prompt("ingrese el NOMBRE producto que desea buscar \n Ejemplo: buzo, pantalon, campera, gorro");
    let prodFind= arrProd.find((item)=>item.nombre==producto);
    console.log(prodFind);
    let seleccion="";
    
        if(prodFind){
            let resultado=iva(prodFind.precio);
            seleccion=parseInt(prompt(`Producto encontrado!\n NOMBRE: ${prodFind.nombre} \n PRECIO con IVA: $${resultado} desea comprarlo?\n 1- Comprarlo    2-Cancelar`))
            
            if(seleccion===1){
                alert(`Muchas gracias por su compra\n Usted ha comprado:\n PRODUCTO: ${prodFind.nombre}\n TOTAL A PAGAR: $${resultado}`)
            }
        }
        else{
            alert("Lo sentimos, el producto que buscas no se encuentra disponible")
        }
    }
    // OPCION DOS : FILTRAR POR PRECIO
    else{ 
        let chooise= parseInt(prompt("Ingrese el filtro que desee aplicar:\n 1: MENOR a $5000\n 2: MAYOR a $5000"));
            if(chooise===1){
                let prodFilter=arrProd.filter((item)=>item.precio<=5000);
                console.log(prodFilter);
                let mensaje="";
                prodFilter.forEach((item)=>{ mensaje += `PRODUCTO ${item.id}\nNombre: ${item.nombre} \nPrecio: $${item.precio}\n\n`});
                console.log(mensaje);
                alert(mensaje)
            }else{
                let prodFilter=arrProd.filter((item)=>item.precio>5000);
                console.log(prodFilter);
                let mensaje="";
                prodFilter.forEach((item)=>{ mensaje += `PRODUCTO ${item.id}\nNombre: ${item.nombre} \nPrecio: $${item.precio}\n\n`});
                console.log(mensaje);
                alert(mensaje)
            }
        }
            
        
