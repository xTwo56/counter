import { useState } from "react"

export function Button({ change, login, contract, setValue }) {

  const [loading, setLoading] = useState(false)

  return (
    <div onClick={loading ? null : changeCounter}
      className="flex justify-center items-center h-32 w-32 p-8 m-4 bg-red-200 rounded-full text-2xl font-thin border-2 border-black">
      {loading ? "loading..." : change}
    </ div>
  )
  async function changeCounter() {
    try {
      setLoading(true)
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
      setLoading(false)
    }
    catch (err) {
      console.log("ERROR: " + err)
      setLoading(false)
    }

  }

}
