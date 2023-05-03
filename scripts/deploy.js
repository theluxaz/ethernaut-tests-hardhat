// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;
  // const lockedAmount = hre.ethers.utils.parseEther("0.01");

  const coinFlip_contract = await hre.ethers.getContractFactory("CoinFlip");
  const CoinFlip = await coinFlip_contract.deploy();

  await CoinFlip.deployed();

  console.log(
    `CoinFlip deployed to ${CoinFlip.address}`
  );

  const transaction1 = await CoinFlip.coinFlipGuess();
  const receipt1 = await transaction1.wait()
  console.log("new transaction 1")
  console.log(receipt1.logs)

  const transaction2 = await CoinFlip.coinFlipGuess();
  const receipt2 = await transaction2.wait()
  console.log("new transaction 2")
  console.log(receipt2.logs)

  const transaction3 = await CoinFlip.coinFlipGuess();
  const receipt3 = await transaction3.wait()
  console.log("new transaction 3")
  console.log(receipt3.logs)
  
  const transaction4 = await CoinFlip.coinFlipGuess();
  const receipt4 = await transaction4.wait()
  console.log("new transaction 4")
  console.log(receipt4.logs)

  const transaction5 = await CoinFlip.coinFlipGuess();
  const receipt5 = await transaction5.wait()
  console.log("new transaction 5")
  console.log(receipt5.logs)

  const transaction6 = await CoinFlip.coinFlipGuess();
  const receipt6 = await transaction6.wait()
  console.log("new transaction 6")
  console.log(receipt6.logs)

  const transaction7 = await CoinFlip.coinFlipGuess();
  const receipt7 = await transaction7.wait()
  console.log("new transaction 7")
  console.log(receipt7.logs)

  const transaction8 = await CoinFlip.coinFlipGuess();
  const receipt8 = await transaction8.wait()
  console.log("new transaction 8")
  console.log(receipt8.logs)

  const transaction9 = await CoinFlip.coinFlipGuess();
  const receipt9 = await transaction9.wait()
  console.log("new transaction 9")
  console.log(receipt9.logs)

  const transaction10 = await CoinFlip.coinFlipGuess();
  const receipt10 = await transaction10.wait()
  console.log("new transaction 10")
  console.log(receipt10.logs)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
