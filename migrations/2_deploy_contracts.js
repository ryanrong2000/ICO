const ExampleToken = artifacts.require("ExampleToken");
const ICO = artifacts.require("ICO");

module.exports = async function (deployer) {
    const totalSupply = 10000000; //10M
    //ExampleToken
    await deployer.deploy(ExampleToken,'shitcoin','SHT',totalSupply);
    const exampleToken = await ExampleToken.deployed();

    //ICO
    await deployer.deploy(
        ICO,
        exampleToken.address,
        592200,                         //duration 1 week
        web3.utils.toWei('2','milli'),  //price of 1 token in Dai (wei) (=0.002 DAI. 0.002*10M = 20,000 DAI = 20,000USD)
        totalSupply,                    //_availableTokens for the ICO. can be less than maxTotalSupply
        200,                            //_minPurchase (in Dai)
        5000                            //_maxPurchase (in Dai)
    );
    const ico = await ICO.deployed();
    await exampleToken.updateAdmin(ico.address);
    await ico.start();

}