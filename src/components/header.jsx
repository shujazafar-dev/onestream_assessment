import React from "react";

export function Header({ imgSrc, subTitle }) {
  return <>
    <header>
      <img src={imgSrc} />
    </header>
    <span>
      <p className='os-h-sub-title'>{subTitle}</p>
    </span>
  </>;
}
