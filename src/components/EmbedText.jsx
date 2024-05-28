'use client';
import React from 'react'

const EmbedText = (props) => {
  return (
    <div>
        {props.textBegin}
        <span className='shifted-border'>{props.textEmbed}</span>
        {props.textEnd}
        {props.textUnderlined ? <span className='relative whitespace-nowrap px-2 before:border-2 before:border-solid before:-rotate-1 before:w-full before:absolute before:left-0 before:top-0 before:h-6 before:md:h-8 before:border-main-color before:border-t-black/0 before:border-l-black/0 before:border-r-black/0'>{props.textUnderlined}</span> : ""}
    </div>
  )
}

export default EmbedText