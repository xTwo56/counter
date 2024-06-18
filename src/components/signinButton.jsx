
import { ethers } from "ethers"
import { useState } from "react"

export function SigninButton({ provider, setLogin, setContract, contractAddress, contractAbi }) {
  const [account, setAccount] = useState(null)

  return (
    <div onClick={signinHandler}
      className="border-2 bg-red-300 p-4 rounded-lg">
      {account ? (
        <div> {account} </div>
      ) : (
        <div> connect</div>
      )}

    </div>
  )

  async function signinHandler() {
    if (!account) {

      console.log("connecting")
      const signer = await provider.getSigner();
      const newContract = new ethers.Contract(contractAddress, contractAbi.abi, signer)
      setContract(newContract)

      const newAccount = await signer.getAddress()
      setAccount(newAccount)
      setLogin(true)
      console.log("done")
    }

  }
}

