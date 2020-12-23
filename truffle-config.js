const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "brain jar media pulp prize east design hard frequent pyramid live special";

module.exports = {

  plugins:[
    'truffle-plugin-verify'
  ],

  api_keys:{
    etherscan:'GJ35EU13VHMFPFVECX1KUNJICD3K1EQU5Q'
  },
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks:{
    development:{
      host:"localhost",
      port:9545,
      network_id:"*"
    },

    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/5c86d4566e0544798e4f46664b69cb19")
      },
      network_id: 3
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.0"    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};