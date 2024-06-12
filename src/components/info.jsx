import { SigninButton } from "./signinButton"

export function Info({ provider, setLogin, setContract, contractAddress, contractAbi }) {
  return (
    <div>
      sign in to interact
      <SigninButton provider={provider} setLogin={setLogin} setContract={setContract} contractAddress={contractAddress} contractAbi={contractAbi} />
    </div>
  )
}
