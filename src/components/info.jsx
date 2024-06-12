import { SigninButton } from "./signinButton"

export function Info({ provider, setLogin, contract, setContract }) {
  return (
    <div>
      sign in to interact
      <SigninButton provider={provider} setLogin={setLogin} contract={contract} setContract={setContract} />
    </div>
  )
}
