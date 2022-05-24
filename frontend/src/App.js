import React, { useState, useMemo } from "react";
import { WalletContext, DefaultWallet } from "./web3/WalletContex";
import "./styles/App.css";
import ButtonAppBar from "./components/ButtonAppBar";

function App() {
  const [wallet, setWallet] = useState(DefaultWallet);
  const value = useMemo(() => ({ wallet, setWallet }), [wallet]);

  return (
    <WalletContext.Provider value={value}>
      <div className="App">
        <ButtonAppBar />
        <main className="App-header">
          
        </main>
      </div>
    </WalletContext.Provider>
  );
}

export default App;
