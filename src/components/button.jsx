
export function Button({ change, login }) {
  return (
    <div onClick={() => {
      if (!login)
        alert("login first")
    }}>
      {change}
    </div>
  )
}
