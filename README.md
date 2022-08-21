**Keyppi** 

Keyppi is a zero-knowledge private key recovery platform. We secure your keys by implementing zero-knowledge proof, decentralized storage, identity verification using proof-of-personhood, and offering a free service to retail users.

***Team***
1. Laura Navarro- Project Manager (cryptomeetlaunamu@gmail.com)
2. Doris Hernandez- Fullstack Developer (d.hernz@gmail.com)
3. Carlos Erazo - Backend Developer (a.erazo@beanar.io)
4. Felipe Flores - Backend Developer (lffm.fismat@gmail.com)
5. Yasmeen Roumie - Fullstack Developer (yasmeenroumie@gmail.com)

***How is the project built?***

**Registration:** 

Data required on frontend: 

1. Wallet 
2. Private Key
3. Email/SMS

A1: On one end, we obtain the World_ID  nullifiers, both the one required when a wallet is created and the one shared when proof-of-personhood is completed for an individual.

A2: Once we have the nullifier required when a wallet is created, we hash it (N) and take the first character from the hash and add 10 to that number , we call this n. n= N+10 

A3: We then generate a set of random strings with a length of n called S_i which are stored on Firebase. We create multiple S_i for robustness (explained later).

A4: After we have confirmation through proof-of-personhood, we proceed to concatenate the briefly locally stored private keys along with the string S_i generated. 

B1: On another end, as the user inputs their private key, we temporarily store them on the device while we wait for the protocol to generate the random strings. 

B2: Once these strings (S_i) have been generated, we concatenate them with the private key and encrypt it with K. The key (K) used to encrypt the concatenated private key will be stored in Firebase. 

C1: Lastly, the Email/SMS will be stored directly on Firebase to enable the World ID verification during retrieval.

D: The encrypted concatenated private key+string will be divided in multiple shards, each shard is stored in IPFS. We recover the address in which the shard is stored and create the set of addresses (A_i) that will also be stored on Firebase. 

For robustness we created multiple strings, so that if one or more set of addresses are breached, it is still impossible to decrypt the private key.

**Recovery:**

Data-required on frontend:

- Connection to World ID

A1: The user will connect to the platform with their World ID. With the nullifier received, associated to this account, we issue a new challenge to the email/SMS stored in the Firebase database linked to that nullifier.   

A2: Once the user has verified our request, the new nullifier received gets sent into the zkApp (Mina) on Firebase.

A3: The function in the zkApp contract gets the following information from the Firebase protected database for the i-th attempt:

- S_i random strings (needed to decrypt the private key when recovered)
- The encrypted key (K) required to decrypt the concatenated private key+string.
- The IPFS addresses in the corresponding set (A_i)

The function will keep trying to retrieve the matching information needed to decrypt the private key until the attempt is successful. 

A4: Once the attempt is successful, the contract will begin to reconstruct the private key by.

- Decrypting the concatenated private key+string using its encryption key (K)
- Use the number n to know how many characters to remove from the unencrypted concatenated private key+string and remove them to get the private key
- After the computation is done we will give the PK to the user.

**Gift your wallet:**

You might wish to gift your wallet in a secure form through our platform, we have enabled this functionality through Polygon. Our smart contract allows an existing user to gift their wallet by enabling access to the zero-knowledge-proof linked to it and triggering an update in the ownership by swapping the nullifiers.

**Technologies used:**

The technologies used in our project are: zero-knowledge proofs (Mina) to preserve the privacy of the processed private keys after being encrypted and during the decryption process for retrieval. 

Link: 

To validate that the person registering and retrieving the private key are the same (without a KYC), and are completing the retrieval process only once, we use proof-of-personhood (World ID). 
Link:
To enable the reliable and continuous retrieval of the sharded encrypted private key we use IPFS. 

Link:

We use Wallet Connect to create a better UX for our users when retrieving their wallet information.

Link: 

By using Polygon to hold our Gift a Wallet functionality we are targeting the best public good project prize. We strongly believe that having a safe onboarding process to web3 should be accessible to all for it will lead to a sustainable and diverse growth in the web3 ecosystem. 

[https://mumbai.polygonscan.com/address/0xfa96815Fa79Af20527327eF2430464A70d4509b8]

**Notable Hacks:**

Private keys are extremely sensitive, for someone to trust you with them requires an incredible level of security which we achieved through a multi-layer encryption process. 

**Product Potential:**

The solution that we have built can increase and accelerate mass adoption of non-custodial crypto wallets and through it the use of the DeFi ecosystem in Latin America, and at a global level. By improving the user experience required to hold your own crypto assets, we make it easier for non-web3 natives to bridge directly to a backed-up self-custodial web3 experience.

**Check out our demo:**

www.keyppi.com

## Instructions

### Run locally
```
npm install
npm start
```
Open [http://localhost:1234](http://localhost:1234).

