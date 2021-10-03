import React from 'react'

function Title(props) {
  return (
    <h2 className="title is-2 mt-5 anchor" id={props.id}>
      {props.children}
    </h2>
  )
}

function Subtitle(props) {
  return (
    <h3 className="title is-4 anchor" id={props.id}>
        {props.children}
    </h3>
  )
}

export {Title, Subtitle}
