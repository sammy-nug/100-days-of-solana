import { PublicKey } from "@solana/web3.js";

const programId = new PublicKey("AiXQrHA4ejBNAR7vRQ3inokFtpWeLW2km883zZiLCZx3");

const [pda, bump] = PublicKey.findProgramAddressSync(
  [Buffer.from("counter")],
  programId
);

console.log("Seeds:        [\"counter\"]");
console.log("Program ID:   ", programId.toBase58());
console.log("PDA:          ", pda.toBase58());
console.log("Canonical bump:", bump);