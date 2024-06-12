
async function main() {

  const Counter = await hre.ethers.getContractFactory("Counter")
  const counter = await Counter.deploy();

  await counter.waitForDeployment();

  console.log(`counter contract deployed to ${await counter.getAddress()}`)
}

main().catch((err) => {
  console.log("ERROR:\n" + err)
  process.exitCode = 1;
})
