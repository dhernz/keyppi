import { concat } from "ethers/lib/utils";

/*
NOISE GENERATION FOR ROBUSTNESS IN IPFS STORAGE
*/
const rnd = (() => {
    const gen = (min, max) => max++ && [...Array(max-min)].map((s, i) => String.fromCharCode(min+i));

    const sets = {
        num: gen(48,57),
        alphaLower: gen(97,122),
        alphaUpper: gen(65,90),
    };

    function* iter(len, set) {
        if (set.length < 1) set = Object.values(sets).flat(); 
        for (let i = 0; i < len; i++) yield set[Math.random() * set.length|0]
    }

    return Object.assign(((len, ...set) => [...iter(len, set.flat())].join('')), sets);
})();

function generate_noise_strings(n, set_size) {
    // n = length of each S_i, coming from the hashed nullifier.
    const S = []
    for (let i = 0; i < set_size; i++) {
        S.push(rnd(n))
    }
    return S
}

// Test. We must store these on firebase secure table to which only the zkApp have access.
console.log(generate_noise_strings(5, 2))

//---------------------------------------------------------------------------------------------//

/*
CONCAT AND ENCRYPT
*/
