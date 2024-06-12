
export function Display({ contract, value, setValue }) {

  return (
    <div onClick={fetchCounter}>
      {value ? Number(value) : "fetch"}
    </div>
  )
  async function fetchCounter() {
    console.log("fetching")
    const newValue = await contract.getCounter()
    console.log(newValue)
    setValue(newValue)
    console.log("done")
  }

}
