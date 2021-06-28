const Swap = artifacts.require("Swap.sol");

module.exports = function (deployer) {
  deployer.deploy(Swap);
  const swap = await Swap.deployed();
  console.log("Swap has been deployed: " + swap.address);
};
