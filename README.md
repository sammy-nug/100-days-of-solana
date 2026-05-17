# Solana Wallet Balance Checker

A simple Solana Devnet project built with `@solana/kit` that generates wallets and checks SOL balances using the Solana RPC API.

---

## Features

- Generate a new Solana wallet
- Connect to Solana Devnet
- Check wallet SOL balance
- Use Solana JSON-RPC methods
- Beginner-friendly Web3 example

---

## Technologies Used

- TypeScript
- Node.js
- Solana
- @solana/kit
- Solana Devnet RPC API

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

---

## Run the Project

Start the script:

```bash
npm run dev
```

Or with ts-node:

```bash
npx ts-node index.ts
```

---

## Example Code

```ts
import {
  generateKeyPairSigner,
  createSolanaRpc,
  devnet,
  address,
} from "@solana/kit";

const rpc = createSolanaRpc(
  devnet("https://api.devnet.solana.com")
);

const wallet = await generateKeyPairSigner();

console.log("Wallet address:", wallet.address);

const walletAddress = address(
  "YOUR_WALLET_ADDRESS"
);

const { value: balance } = await rpc
  .getBalance(walletAddress)
  .send();

const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);
```

---

## Getting Devnet SOL

Use the Solana Faucet to request free Devnet SOL:

https://faucet.solana.com/

---

## Project Structure

```bash
.
├── create-wallet.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## Future Improvements

- Add token transfers
- Add transaction history
- Connect Phantom Wallet
- Build a frontend UI
- Support Mainnet

---

## License

MIT License
