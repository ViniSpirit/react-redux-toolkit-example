import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { changeColor } from "../features/theme"

function ChangeColor() {
  const [color, setColor] = useState("")
  const dispatch = useDispatch()

  return (
    <div className="flex flex-row mt-4">
      <input
        type="text"
        className="text-slate-800"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <button
        className="bg-slate-900 p-2 rounded"
        onClick={() => {
          dispatch(changeColor(color))
          setColor("")
        }}
      >
        Change Color
      </button>
    </div>
  )
}

export default ChangeColor
