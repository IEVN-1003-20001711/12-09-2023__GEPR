export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Sony  Erickson',
    precio: 20559,
}

const tablet: Producto = {
    desc: 'IPad',
    precio: 1200
}

function calcularIVA(productos:Producto[]):number{
    let  total = 0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total * 0.16;
}

const articulos1 = [telefono, tablet];
const iva1 = calcularIVA(articulos1);
console.log(`EL IVA ES: ${iva1}`)

export function calcularIVA2(productos:Producto[]):[number,number]{
    let total = 0;
    productos.forEach(({precio})=>{
        total += precio;
    })
    return [total, total * 0.16]
}
const articulos2 = [telefono, tablet];
const [total, iva] = calcularIVA2(articulos2);
console.log(`TOTAL: ${total}`);
console.log(`EL IVA ES: ${iva1}`);