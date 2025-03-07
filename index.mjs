import { ethers } from "ethers";

const words = process.argv.slice(2);

if (words.length !== 12 && words.length !== 24) {
    console.log("Usage npm start -- test test test test test test test test test test test junk");
    process.exit(1);
}

const phrase = words.join(" ");

const mnemonic = ethers.Mnemonic.fromPhrase(phrase);

for (let i = 0; i < 10; i++) {
    const hdNode = ethers.HDNodeWallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0");
    const childWallet = hdNode.deriveChild(i);
    const address = childWallet.address;
    const privateKey = childWallet.privateKey;
    
    console.log(`${i} | ${address} | ${privateKey}`);
}