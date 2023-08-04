import React from 'react'

export default function ImgContainer({src,className}) {
  return (
    <img className={className} src={src} alt={src.split("/").pop().split(".")[0]}/>
  )
}
