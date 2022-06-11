import React from "react"
import { useDispatch } from "react-redux"
import { login, logout } from "../features/user"

function Login() {
  const dispatch = useDispatch()
  return (
    <div className="flex gap-2">
      <button
        className="bg-slate-900 p-2 rounded"
        onClick={() => {
          dispatch(
            login({ name: "Vini", age: 28, email: "marcosvims@gmail.com" })
          )
        }}
      >
        Login
      </button>
      <button
        className="bg-slate-900 p-2 rounded"
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Login
