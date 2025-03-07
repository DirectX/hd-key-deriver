# hd-key-deriver

A simple Node.js utility that derives hierarchical deterministic (HD) keys from a 12-word or 24-word mnemonic using Ethers.js v6.

## 🚀 Features
- Uses **Ethers.js v6** for HD wallet derivation.
- Supports **12-word and 24-word mnemonics**.
- Derives the first **10 Ethereum addresses and private keys**.
- Uses the standard **BIP44 Ethereum derivation path (`m/44'/60'/0'/0/i`)**.

## 📦 Installation
Ensure you have **Node.js** installed, then run:

```sh
npm install
```

## 🔧 Usage
Run the script by passing a **12-word or 24-word mnemonic**:

```sh
npm start -- test test test test test test test test test test test junk
```

## 📜 Example Output
```
0 | 0xAbC123... | 0x1234abcd...
1 | 0xDef456... | 0x5678efgh...
2 | 0xGhi789... | 0x9101ijkl...
...
```

## 📌 Notes
- **Never share your mnemonic or private keys!**
- Modify `deriveChild(i)` if you need a different range of addresses.
- This utility is intended for development and learning purposes.

## 🛠️ License
This project is open-source under the **MIT License**.

