
interface Alumno{
    matricula: number;
    nombre: string;
    email: string;
    edad: number;
}

//COMO DEFINIR UN OBJETO
const alumno: Alumno = {
    nombre: 'Giezy',
    email: 'giezochat27@gmail.com',
    edad: 21,
    matricula: 180789
}

//COMO DEFINIR UN ARREGLO
let mascotas = ['conejo', 'perro', 'gato']
console.table(mascotas);
mascotas[1]= 'nuevo gato';
mascotas.push('perro pastor aleman')
console.table(mascotas)

//PUEDO DECLARAR DOS VALORES Y QUE PUEDAN PARTIR DESDE CERO
let nuevoArreglo: (number|string)[] = []
nuevoArreglo.push('RCK');
nuevoArreglo.push(92739);