import { SigninButton } from "./signinButton"

export function Info({ loading, setLogin, contract, setContract }) {
  return (
    <div>
      sign in to interact
      <SigninButton loading={loading} setLogin={setLogin} contract={contract} setContract={setContract} />
    </div>
  )
}
