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

console.log(
  "\n--- Go to https://faucet.solana.com/ and airdrop SOL to this address ---"
);

console.log(
  "--- Then run this script again with the same address to check the balance ---\n"
);

// Replace with your funded wallet address
const walletAddress = address(
  "2jePBGdm4SCjea8saBJckLVbet8WkHj5b6GzoRrvLTvY"
);

const { value: balance } = await rpc
  .getBalance(walletAddress)
  .send();

const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);