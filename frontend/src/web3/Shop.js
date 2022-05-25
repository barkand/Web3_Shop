import { Utils } from "./WalletWeb3";
import { GetContract } from "./WalletContex";
import ShopContract from "../contracts/ShopContract.json";

export default async function Buy(wallet, productId, price) {
  let contract = GetContract(wallet.library, wallet.networkId, ShopContract);

  const _gas = await contract.methods
    .buy(process.env.REACT_APP_MY_WALLET)
    .estimateGas({
      from: wallet.account,
      value: Utils.toWei(price, "ether"),
    });

  await contract.methods.buy(process.env.REACT_APP_MY_WALLET).send({
    from: wallet.account,
    value: Utils.toWei(price, "ether"),
    gas: _gas,
    gasLimit: wallet.gasLimit,
  });
}
