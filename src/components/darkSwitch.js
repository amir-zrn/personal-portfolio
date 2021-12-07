import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const DarkSwitch = () => {
  const [dark, setDark] = React.useState(() => {
    const storageDarkValue = window.localStorage.getItem("darkMode")

    return storageDarkValue !== null ? storageDarkValue : false
  })

  React.useEffect(() => {
    if (dark) {
      document.body.classList.toggle("dark")
    } else {
      document.body.classList.toggle("light")
    }
    window.localStorage.setItem("darkMode", dark)
  }, ["darkMode", dark])

  return (
    <button onClick={() => setDark(!dark)}>
      <FontAwesomeIcon icon={faCoffee} />
      are
    </button>
  )
}

export default DarkSwitch
