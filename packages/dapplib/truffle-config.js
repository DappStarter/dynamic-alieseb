require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note mad minor grace open flat gas'; 
let testAccounts = [
"0xc2eff772586b0ed44c253348d7c4d0713f9fa429d7d9112c0bbf95b357eded67",
"0x031e892fbaadfb7e43a6d9d7ab287c2d6ffd748c15bf9fc8a3c0a0061e32d426",
"0x1e39df2e4d55b29a5a5028181a5a2dd6c21387b5faf0972f330701769dd40d37",
"0xdb0a82f08b7be6c59b240719c5188911b9a534d0372b5bf723807e09edddcb3d",
"0x2aa4e469d6bc4bf3bb1b6f91013f3e2379b8261d9160a7bbbff794c0515db9dd",
"0xd012e9fcf31002e799618bba0eb6ad26df03a6700a14aab03c747f6d174d1403",
"0xdf9ad773e597c4af208ab4b8cec79399d58cd729a4ad2dca59cf71eeb01c1b0e",
"0x584c90ce217f8762f3a9275681861fd5542e7bd1ecf5d28ddff324e960072cb1",
"0x8da56732b8c1689df1fee66b140f097839d60eb0b114c97edcdde593ea7cb6a0",
"0xf1f615a00ff86fa03f557c0f668b1943008cc2c58482bee81e56ec3e10815bca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
