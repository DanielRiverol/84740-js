const numeros= [1,2,3,4,5,6,7,8,9]
console.log(numeros);
// 
// console.log(numeros[2]);

// for (let index = 0; index < numeros.length; index++) {
    //     const element = numeros[index];
    
    //     console.log(element);
    // }
    
    // agregar elemebntos
    // numeros[9]=10
    numeros.push(10,11,12,13,14)
    console.log(numeros);
    
    // quitar elementos pop
    numeros.pop()
    numeros.pop()
    numeros.pop()
    numeros.pop()
    console.log(numeros);
    
    // agregar elementos al inicio  unshift
    numeros.unshift(-98,33,54)
    console.log(numeros);
    
    // elimina del inicio shift
    numeros.shift()
    
    console.log(numeros);
    
    // splice
    // const tajada= numeros.splice(2,4)
    // console.log(tajada);

    // 
    console.log(numeros.includes(-120));
    console.log(numeros.indexOf("papas"));
    