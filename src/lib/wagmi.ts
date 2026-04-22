import { http, createConfig } from "wagmi";
import { bsc } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http("https://bsc-dataseed.binance.org"),
  },
});

export const EGC_ADDRESS = "0xC001BBe2B87079294C63EcE98BdD0a88D761434e" as const;

// Common reflection-token ABI surface. Many reward tokens expose a subset of these.
// We try them in order and gracefully fall back when a method isn't present.
export const EGC_ABI = [
  {
    name: "balanceOf",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "account", type: "address" }],
    outputs: [{ type: "uint256" }],
  },
  {
    name: "decimals",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint8" }],
  },
  {
    name: "totalSupply",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
  // Reward-tracker style methods (commonly found on EverGrow-like tokens)
  {
    name: "withdrawableDividendOf",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "owner", type: "address" }],
    outputs: [{ type: "uint256" }],
  },
  {
    name: "withdrawnDividendOf",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "owner", type: "address" }],
    outputs: [{ type: "uint256" }],
  },
  {
    name: "totalDividendsDistributed",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
  {
    name: "getAccountDividendsInfo",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "account", type: "address" }],
    outputs: [
      { type: "address" },
      { type: "int256" },
      { type: "int256" },
      { type: "uint256" }, // withdrawable
      { type: "uint256" }, // total withdrawn
      { type: "uint256" },
      { type: "uint256" },
      { type: "uint256" },
    ],
  },
] as const;
