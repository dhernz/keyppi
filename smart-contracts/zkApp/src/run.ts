import { createHash } from 'crypto'

import {
    Encoding,
    Character,
    isReady,
    shutdown,
} from 'snarkyjs';

await isReady;
 

// Nullifier 
const y = Encoding.stringToFields(
        createHash('sha256')
          .update("Hola soy el nullifier")
          .digest('hex')
    ) // Array of Fields
console.log(y)
y.forEach(element => {
    console.log(element)
    // element.assertEquals(another_element)
});



// console.log(
//     Encoding.stringToFields("probando probando")[0].toBits()
// )


// cleanup
await shutdown();