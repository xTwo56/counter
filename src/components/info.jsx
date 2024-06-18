import { SigninButton } from "./signinButton"

export function Info({ provider, setLogin, setContract, contractAddress, contractAbi }) {
  return (
    <div className="flex justify-between border border-2 border-black p-8">
      <div className="text-5xl text-red-400">counter</div>
      <SigninButton provider={provider} setLogin={setLogin} setContract={setContract} contractAddress={contractAddress} contractAbi={contractAbi} />
    </div>
  )
}
