import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AccountBalanceWallet as AccountBalanceWalletIcon } from "@mui/icons-material";

import { LoginWallet, LogoutWallet } from "../web3/WalletWeb3";
import { WalletContext } from "../web3/WalletContex";

function LoginApp() {
  const { wallet, setWallet } = useContext(WalletContext);

  const walletClick = async () => {
    setWallet(wallet.connected ? await LogoutWallet() : await LoginWallet());
  };

  return (
    <Button color="inherit" onClick={walletClick}>
      <AccountBalanceWalletIcon sx={{ mr: 1 }} />
      {wallet.connected ? "Logout" : "Login"}
    </Button>
  );
}

export default LoginApp;
