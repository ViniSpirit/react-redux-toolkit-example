import React from "react"
import { useSelector } from "react-redux"

function Profile() {
  const user = useSelector((state) => state.user.value)
  const theme = useSelector((state) => state.theme.value)

  return (
    <div className={`flex flex-col mb-4`} style={{ color: theme }}>
      <h1 className="text-4xl ">Profile</h1>
      <span>Name: {user.name}</span>
      <span>Age: {user.age}</span>
      <span>Email: {user.email}</span>
    </div>
  )
}

export default Profile
