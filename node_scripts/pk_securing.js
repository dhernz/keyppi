const crypto = require("crypto")

/*
GETTING NOISE FROM FIRST THE FIRST NULLIFIER
*/
const MIN_NOISE_LENGTH = 11

function hash_input(input) {
  const buffer = Buffer.from(input, 'utf8')
  return crypto.createHash('sha256')
      .update(buffer)
      .digest('hex')
}

function create_user_exclusive_noise_length(nullifier /*string*/) {
    hash = hash_input(nullifier)
    first_digit = hash[0]
    return parseInt(first_digit, 10) + MIN_NOISE_LENGTH - 1
}

// Test: Devuelve el número "n", dado el string "holiwiw". Este n debe guardarse en Firebase
// para posterior uso por la zkApp para el retrieval.
console.log(create_user_exclusive_noise_length("holiwiw"))

//---------------------------------------------------------------------------------------------//

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
    const S = [] // string[]
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
// 
function crypt(salt, text) {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
};

// Decryption will actually occur at the zkApp after it retrieves the S_i from firebase.
function decrypt(salt, encoded) {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};


function fill_noise_and_encrypt(pk /*string*/, S /*string[]*/) {
    let H = [] // string[]
    S.forEach(noise => {
        H.push(crypt(noise, pk))
    }); 
    return H
}

console.log(
    fill_noise_and_encrypt(
        "B62qphDTxPu59YSpb1XebPFixFMu1vN6mqKQ7bCBtejdAS3LctWFfn7", 
        generate_noise_strings(5, 2)
    )
)
