import React from "react"
import moon from "../../content/assets/moon.svg"
import sun from "../../content/assets/sun.svg"

const DarkSwitch = () => {
  let clickedClass = "clicked"
  const body = document.body
  const lightTheme = "light"
  const darkTheme = "dark"
  let theme
  let imgSrc = []

  const [darkImg, setDarkImg] = React.useState(moon)

  if (localStorage) {
    theme = localStorage.getItem("theme")
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const switchTheme = e => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem("theme", "light")
      theme = lightTheme
      setDarkImg({ sun })
      imgSrc = darkImg
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      localStorage.setItem("theme", "dark")
      theme = darkTheme
      setDarkImg({ moon })
      imgSrc = darkImg
    }
    console.log(imgSrc[Object.keys(imgSrc)[0]])
  }

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={e => switchTheme(e)}
    ></button>
  )
}

export default DarkSwitch
