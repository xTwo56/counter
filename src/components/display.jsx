import { useState } from "react"

export function Display({ contract, value, setValue }) {

  const [loading, setLoading] = useState(false)
  console.log("rendered")

  return (
    <div onClick={fetchCounter}
      className="flex justify-center items-center h-32 w-32 p-8 m-4 bg-red-200 rounded-8xl text-4xl font-thin border-2 border-black rounded-xl ">
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
