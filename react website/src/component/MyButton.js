import "../styles/MyButton.css"
import React from 'react'

const ButtonSaya = (props) => {
  return (
    <a href={props.link} class="button-Yes button-No">{props.text}</a>
  )
}

export default MyButton