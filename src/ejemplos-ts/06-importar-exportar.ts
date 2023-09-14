import { calcularIVA2, Producto } from "./05-destructura-funciones";

const carrito:Producto[]=[
    {
        desc: 'Telefono1',
        precio:1000
    },
    {
        desc: 'Telefono2',
        precio:200933
    },
    {
        desc: 'Telefono3',
        precio:20003
    }
]

const[total, iva]=calcularIVA2(carrito);
console.log(`TOTAL: ${total}`);
console.log(`EL IVA ES: ${iva}`);