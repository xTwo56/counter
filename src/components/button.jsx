
export function Button({ change, login, contract, setValue }) {

  return (
    <div onClick={changeCounter}>
      {change}
    </ div>
  )
  async function changeCounter() {
    console.log("connecting")
    if (change == "dec") {
      const newValue = await contract.dec()
      setValue(newValue)
    } else {
      const newValue = await contract.inc()
      console.log(newValue.value)
      console.log(newValue.value)
      setValue(newValue.value)
    }
    console.log("done")

  }

}
