const Swap = artifacts.require("Swap.sol");

module.exports = async function (deployer) {
  deployer.deploy(Swap);
};
