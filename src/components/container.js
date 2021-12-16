import React from "react"

const Container = props => {
  const classNames = props.className ? props.className + " section" : "section"
  return (
    <div id={props.id} className={classNames}>
      <div className="container">
        <div className="roww">{props.children}</div>
      </div>
    </div>
  )
}

export default Container
