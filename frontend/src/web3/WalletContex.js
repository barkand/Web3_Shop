import { createContext } from "react";

export const DefaultWallet = {
  library: null,
  network: null,
  networkId: 0,
  account: "0x",
  chainId: 0,
  connected: false,
  balance: {
    eth: 0,
    wei: 0,
  },
  gasLimit: process.env.REACT_APP_GAS_LIMIT,
};

export const WalletContext = createContext({
  wallet: "",
  setWallet: () => {},
});

export function GetContract(library, networkId, contractName) {
  const deployedContract = contractName.networks[networkId];

  let contract = new library.eth.Contract(
    contractName.abi,
    deployedContract && deployedContract.address
  );
  contract.options.address = deployedContract.address;

  // console.log("Contract address:", contractName.networks);
  return contract;
}
