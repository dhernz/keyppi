async function main() {
   const Keyppi = await ethers.getContractFactory("Keyppi");

   // Start deployment, returning a promise that resolves to a contract object
   const keyppi = await Keyppi.deploy();   
   console.log("Contract deployed to address:", keyppi.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });