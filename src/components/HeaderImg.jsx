import React from 'react'

export default function HeaderImg({src}) {
  return (
    <img src={src} alt={src.split("/").pop().split(".")[0]}/>
  )
}
