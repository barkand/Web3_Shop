import React, { useState, useMemo } from "react";
import { WalletContext, DefaultWallet } from "./web3/WalletContex";

import "./styles/App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import ProductList from "./components/ProductList";

function App() {
  const [wallet, setWallet] = useState(DefaultWallet);
  const value = useMemo(() => ({ wallet, setWallet }), [wallet]);

  return (
    <WalletContext.Provider value={value}>
      <ButtonAppBar />
      <div className="App">
        <ProductList />
      </div>
    </WalletContext.Provider>
  );
}

export default App;
