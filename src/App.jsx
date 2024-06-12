import { ethers } from "ethers";
import { useEffect, useState } from 'react'
import { Display } from "./components/display"
import { Button } from "./components/button"
import { Info } from "./components/info"
import counterAbi from "./lib/CounterAbi.json"

function App() {

  const [login, setLogin] = useState(false);
  const [provider, setProvider] = useState(null)
  const [contract, setContract] = useState(null)
  const [loading, setLoading] = useState(true);

  async function loadBlockchainData() {
    try {
      console.log(window.ethereum)
      const newProvider = new ethers.providers.BrowserProvider(window.ethereum)
      setProvider(newProvider)
      const network = await newProvider.getNetwork()

      const newContract = new ethers.Contract(config[network.chainId].counter.address, counterAbi, provider)
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
          <Info loading={loading} setLogin={setLogin} contract={contract} setContract={setContract} />
          <Button change="desc" login={login} />
          <Display />
          <Button change="inc" login={login} />
        </div>
      )}
    </div>
  )
}

export default App
