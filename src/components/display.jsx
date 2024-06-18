import { useState } from "react"

export function Display({ contract, value, setValue }) {

  const [loading, setLoading] = useState(false)
  console.log("rendered")

  return (
    <div onClick={fetchCounter}>
      {loading ? "loading..." : (value ? Number(value) : "fetch")}
    </div>
  )
  async function fetchCounter() {
    setLoading(true)
    console.log("fetching")
    const newValue = await contract.getCounter()
    console.log(newValue)
    setValue(newValue)
    console.log("done")
    setLoading(false)
  }

}
