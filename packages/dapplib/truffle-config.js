require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe strike crouch place arrow inflict praise army gentle'; 
let testAccounts = [
"0x6952f8ad09fff97b6fd4d54ca8f5393e229c8cbb20edce680c45367e6cacf30e",
"0xfc8e22b0c2ce6431ce10fe270d60920c08f2c29a46baeab8181f6079a58c560e",
"0xc0b12028fd4ca99762f615ba0ecb3836760108e49a4e2ed989849a8310d3f11b",
"0x36de21a2d994028e39a0bc1b31533beb0d286eab0c78664c5d9ab4ea4fdde684",
"0x968fa000055bda183c078e60e73941e98fcb643d7da89590020f8ad2256c4325",
"0x7ca840de68eae3f780f445986d15b20fcf9d496aca2d081ff7d6f5b34410e132",
"0x14dab59b2fa06e7db97bf17f479dbea37e115b1b96a3f2032da76284ed9852c1",
"0x67369a0b8a556235a3713215529a4aa0aab968356c999f411621ba5fb4d6d860",
"0x9be29c1013d8c999e4b01f6985c22040ebde77dfb23fe2437b71c40758a5acfb",
"0x973eb5bf824597652e87acc06e5c73df9edcf8da4500254083890ba0b6c2aa1a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


