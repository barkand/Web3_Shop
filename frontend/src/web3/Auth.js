import React, { useContext } from "react";
import { WalletContext } from "./WalletContex";
import { LoginWallet, LogoutWallet } from "./WalletWeb3";

function Auth() {
  const { wallet, setWallet } = useContext(WalletContext);

  const walletClick = async () => {
    setWallet(wallet.connected ? await LogoutWallet() : await LoginWallet());
  };

  return (
    <div>
      <button onClick={walletClick}>
        {wallet.connected ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Auth;
