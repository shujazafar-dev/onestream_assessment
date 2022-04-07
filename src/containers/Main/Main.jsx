import React from 'react'
import { Header } from './../../components/header';




const Main = ({children}) => {

  const state = {
  imgSrc: 'https://assets.onestream.live/webassets/website/onestream-logos-website/OSL-logo.png',
  subTitle: 'Candidate assessment'
  }
  return (
    <div className='main'>
        <div className='container'>
            <Header 
              imgSrc={state.imgSrc}
              subTitle={state.subTitle}
            />
            {children}
        </div>
    </div>
  )
}

export default Main