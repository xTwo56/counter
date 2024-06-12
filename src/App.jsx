import { ethers } from "ethers";
import { useEffect, useState } from 'react'
import { Display } from "./components/display"
import { Button } from "./components/button"
import { Info } from "./components/info"
import counterAbi from "./lib/CounterAbi.json"

const counterAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

function App() {

  const [login, setLogin] = useState(false);
  const [provider, setProvider] = useState(null)
  const [contract, setContract] = useState(null)
  const [loading, setLoading] = useState(true);

  async function loadBlockchainData() {
    try {
      console.log(counterAddress)
      const newProvider = new ethers.BrowserProvider(window.ethereum)
      setProvider(newProvider)

      const newContract = new ethers.Contract(counterAddress, counterAbi.abi, newProvider)
      setContract(newContract)
      setLoading(false)
    } catch (err) {
      console.log("ERROR:\n" + err)
    }
  }

  useEffect(() => {
    loadBlockchainData();
  }, [])

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <Info provider={provider} setLogin={setLogin} contract={contract} setContract={setContract} />
          <Button change="desc" login={login} />
          <Display />
          <Button change="inc" login={login} />
        </div>
      )}
    </div>
  )
}

export default App
