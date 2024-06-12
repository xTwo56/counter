
import { useState } from "react"

export function SigninButton({ provider, setLogin, contract, setContract }) {
  const [account, setAccount] = useState(null)

  return (
    <div onClick={signinHandler}>
      {account ? (
        <div> {account} </div>
      ) : (
        <div> connect</div>
      )}

    </div>
  )

  async function signinHandler() {
    if (!account) {
      const signer = await provider.getSigner();
      const newContract = await contract.connect(signer)
      setContract(newContract)

      const newAccount = await signer.getAddress()
      setAccount(newAccount)
      setLogin(true)
    }

  }
}

