import { BinaryLike, createHash } from 'crypto';
import {
  Field,
  SmartContract,
  state,
  State,
  method,
  DeployArgs,
  Permissions,
  Encoding,
  PrivateKey,
  Mina,
  Party,
  UInt32
} from 'snarkyjs';

export { createLocalBlockchain, deploy, hash_input}

export class KeyppiContract extends SmartContract {
  // Es un Array de Fields que representa segmentos de 248 bits (31 bytes) del string.
  @state(Field) nullifier = State<Field>();

  deploy(args: DeployArgs) {
    super.deploy(args);
    this.setPermissions({
      ...Permissions.default(),
      editState: Permissions.proofOrSignature(),
    });
  }

  @method init(nullifier: Field) {
    // Se puede romper si el nullifier es de distinta longitud al nullifier original
    this.nullifier.set(nullifier)
    console.log(this.nullifier)
  }

  @method retrieve_key(proposed_nullifier: Field) {
    const real_nullifier = this.nullifier
    real_nullifier.assertEquals(proposed_nullifier)

    // const currentState = this.nullifier.get();
    // this.nullifier.assertEquals(currentState); // precondition that links this.num.get() to the actual on-chain state
    // const newState = currentState.add(2);
    // newState.assertEquals(currentState.add(2));
    // this.nullifier.set(newState);
  }
}


// helpers
function hash_input(input: String) {
  const buffer = Buffer.from(input, 'utf8')
  return Encoding.stringToFields(
      createHash('sha256')
      .update(buffer)
      .digest('hex')
  )
}

function createLocalBlockchain(): PrivateKey {
  let Local = Mina.LocalBlockchain();
  Mina.setActiveInstance(Local);

  const account = Local.testAccounts[0].privateKey;
  return account;
}

async function deploy(
  zkAppInstance: KeyppiContract, // se ocupa
  zkAppPrivateKey: PrivateKey, // Se ocupa
  nullifier: Field,  // init
  account: PrivateKey // Se ocupa
) {
  let tx = await Mina.transaction(account, () => {
    Party.fundNewAccount(account);

    zkAppInstance.deploy({ zkappKey: zkAppPrivateKey });
    zkAppInstance.setPermissions({
      ...Permissions.default(),
      editState: Permissions.proofOrSignature(),
    });

    zkAppInstance.init(nullifier);
  });
  await tx.send().wait();
}