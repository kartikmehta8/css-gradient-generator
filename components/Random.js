import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

const Random = () => {
  const { setColorSelection, setAngle, setSpeed } = useContext(SettingsContext)

  const goRandom = () => {
    const numColors = 3 + Math.round(Math.random() * 3)
    const colors = [...Array(numColors)].map(() => {
      // https://css-tricks.com/snippets/javascript/random-hex-color/
      return "#" + Math.floor(Math.random() * 16777215).toString(16)
    })
    setColorSelection(colors)
    setAngle(Math.floor(Math.random() * 361))
    setSpeed(Math.floor(Math.random() * 10) + 1)
  }

  return (
    <div style={{ padding: "48px 0 16px" }}>
      <button
        onClick={goRandom}
        className="head"
        style={{
          fontSize: "20px",
          fontWeight: 200,
          background: "rgba(255,255,255,.9)",
          color: "black",
          padding: "20px 34px",
          cursor: "pointer",
          boxShadow: "0 0 4px #000",
          border: "none",
        }}
      >
        RANDOM
      </button>
    </div>
  )
}

export default Random