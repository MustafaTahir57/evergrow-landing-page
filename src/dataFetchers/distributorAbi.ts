// Minimal ABI surface for the EverGrow dividend distributor contract.
// Only the read methods we need to power the Rewards Dashboard.
export const DISTRIBUTOR_ABI = [
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "shares",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "totalExcluded", type: "uint256" },
      { internalType: "uint256", name: "totalRealised", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "shareholder", type: "address" }],
    name: "getUnpaidEarnings",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDistributed",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;
