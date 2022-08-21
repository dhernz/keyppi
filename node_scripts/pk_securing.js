const crypto = require("crypto")

/*
CONSTANTS
*/
const ROBUSTNESS_IPFS_STRING_SET_SIZE = 3
const MIN_NOISE_LENGTH = 32
const MIN_NUMBER_OF_PK_SHARDS = 5
const MAX_NUMBER_OF_PK_SHARDS = 12

/*
GETTING NOISE FROM THE FIRST NULLIFIER
*/

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
console.log("1) create_user_exclusive_noise_length", create_user_exclusive_noise_length("holiwiw"), "\n")

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
console.log("2) generate_noise_strings", generate_noise_strings(5, ROBUSTNESS_IPFS_STRING_SET_SIZE), "\n")

//---------------------------------------------------------------------------------------------//

/*
CONCAT AND ENCRYPT
*/
// La encriptacón actual sufre de frecuency analysis y la concatenación de la misma PK va a delatar que
// fue producida mediante concatenación de longitud constante a lo lado de cada usuario. Es olo proof of concept.
function crypt(K, text) {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) => textToChars(K).reduce((a, b) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
};

// Decryption will actually occur at the zkApp after it retrieves the S_i from firebase.
function decrypt(K, encoded) {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) => textToChars(K).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};

console.log("PRUEBA1", decrypt("123", crypt("123","holawa")))
console.log("PRUEBA2", crypt("123", decrypt("123", "holawa")))


function fill_noise_and_encrypt(pk /*string*/, S /*string[]*/) {
    let H = [] // string[]
    let K = rnd(128)
    S.forEach(noise => {
        H.push(crypt(K, noise.concat(pk).concat(noise)))
    }); 
    return { H, K }
}

console.log(
    "3) fill_noise_and_encrypt",
    fill_noise_and_encrypt(
        "B62qphDTxPu59YSpb1XebPFixFMu1vN6mqKQ7bCBtejdAS3LctWFfn7", 
        generate_noise_strings(5, 2)
    ),
    "\n"
)

//---------------------------------------------------------------------------------------------//

/*
INTEGRATION FLOW GIVEN PK AND NULLIFIER
*/

function protect_pk(pk /*string*/, nullifier /*string*/) {
    const n = create_user_exclusive_noise_length(nullifier) 
    const S = generate_noise_strings(n, ROBUSTNESS_IPFS_STRING_SET_SIZE)
    const {H, K} = fill_noise_and_encrypt(pk, S)
    return {H, K}
}

console.log(
    "f) protect_pk",
    protect_pk(
    "B62qphDTxPu59YSpb1XebPFixFMu1vN6mqKQ7bCBtejdAS3LctWFfn7", 
    "kajhskdjhas"
))

//---------------------------------------------------------------------------------------------//

/*
SCATTER/SPLIT/SPLASH THE PK INTO THE UNRECOGNIZABLE AND DISTRIBUTED METAVERSE
*/

// Protected_pks es un arreglo de múltiples private keys protegidas.
// Se rompe en caso que algún L resulte ser un número primo. 
function split_protected_pk(protected_pks /*string[]*/) {

    let splitted_pks_sets = [] // string[][]
    protected_pks.forEach(pk => {
        divisors_of_L = get_divisors(pk.length)
        chosen_divisor = divisors_of_L[Math.floor(Math.random() * divisors_of_L.length)]
        splitted_pks_sets.push(split_string(pk, chosen_divisor))
    });

    return splitted_pks_sets
}

function get_divisors(n /*number*/) {
    let D = [] // number[]
    for (let i = 0; i <= Math.min(Math.sqrt(n), MAX_NUMBER_OF_PK_SHARDS); i++) {
        if (n % i == 0 && i >= MIN_NUMBER_OF_PK_SHARDS) {
            D.push(i)
        }
    }
    return D
}

function split_string(s /*string*/, n_pieces /*number*/) {
    // Supuestos que se pueden usar:
    // 1) El string s mide L, y L es divisible entre n_pieces.
    let pieces = [] // string[]
    const L = s.length
    for (let i = 0; i < n_pieces; i += 1) {
        pieces.push(s.slice(i,i+L/n_pieces))
    }
    return pieces
}

console.log(split_string("holawawawiwi", 2)) 
console.log(split_string("holawawawiwi", 3))
console.log(split_string("holawawawiwi", 4))

const {H, K} = protect_pk(
                        "B62qphDTxPu59YSpb1XebPFixFMu1vN6mqKQ7bCBtejdAS3LctWFfn7", 
                        "kajhskdjhas"
                        )
console.log(split_protected_pk(H))

//---------------------------------------------------------------------------------------------//

/*
FUNCIÓN A EXPONER AL FRONTEND
*/

function keyppi_protocol(pk /*string*/, nullifier /*string*/) {
    const {H, K} = protect_pk(pk, nullifier)
    const pieces = split_protected_pk(H)
    return pieces
}