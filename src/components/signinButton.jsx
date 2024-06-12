
import { useState } from "react"

export async function SigninButton({ loading, setLogin, contract, setContract }) {
  const [account, setAccount] = useState(null)

  return (
    <div onClick={signinHandler}>
      {account ? (
        <div> signed in </div>
      ) : (
        <div> connect</div>
      )}

    </div>
  )

  async function signinHandler() {
    if (!signer) {
      const accounts = await window.ethereum.request({ method: "get_requestAccounts" })
      //account = await ethers.utils.getAddress(accounts[0]); try accessing state var directly
      const newAccount = await ethers.utils.getAddress(accounts[0]);
      setAccount(newAccount)
      const signer = await provider.getSigner();
      const newContract = await newContract.connect(signer)
      setContract(newContract)
      setLogin(true)
    }

  }
}

