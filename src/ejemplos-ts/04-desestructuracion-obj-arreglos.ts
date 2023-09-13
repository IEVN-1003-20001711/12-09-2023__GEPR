 interface Reproductor{
    volumen: number;
    segundos: number;
    cancion: string,
    detalles: Detalles;
 }

 interface Detalles{
    cantante: string;
    year: number;
 }

 const reproductor: Reproductor = {
    volumen: 90,
    segundos: 890,
    cancion: 'Danza Kuduro',
        detalles: {
            cantante: 'DON OMAR',
            year: 2019
        }
 }

 const{volumen, detalles} = reproductor
 const{cantante} = detalles
 console.log(`El volumen actual es de: ${volumen}`)
 console.log(`El cantante actual es: ${cantante}`)

 const Colores: string[] = ['red','blue','pink','green','yellow']
 console.log(`COLOR 1: ${Colores[0]}`)
 console.log(`COLOR 1: ${Colores[1]}`)
 console.log(`COLOR 1: ${Colores[2]}`)
 console.log(`COLOR 1: ${Colores[3]}`)
 console.log(`COLOR 1: ${Colores[4]}`)
 const[a,,b]= Colores;

 console.log(`COLOR 1: ${[a]}`)
 console.log(`COLOR 2: ${[b]}`)