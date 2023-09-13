
//PARA PODER DEFINIR UNA FUNCIÓN, BASTA CON
//ESTABLECER LA PALABRA FUNCTION...
function sumar(): void{
    console.log(3 + 7);
}

sumar()

console.log('______________________________________________________');
function sumar2(a:number, b:number): void{
    console.log(a + b);
    return
}

const resultado = sumar2(43,18)
console.log('______________________________________________________');

//LAS FUNCIONES TIENEN LA POSIBILIDAD DE RECIBIR OBJETOS...
interface Mascotas{
    nombre: string,
    edad: number,
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascotas, x:number):void{
    mascota.edad<= x;
    console.log(mascota);
}
const nuevaMascota:Mascotas = {
    nombre: 'King',
    edad: 3,
    mostrarEdad(): void{
        console.log( 'La edad es... ', this.edad)
    }
}
    calcular(nuevaMascota, 3);