// import Header from '../components/common/header'
import React from 'react'
import variables from '../styles/global.module.scss'
import MyHeader from '../Components/header'

export default function BaseLayout({ children }) {
  return (
    <section
      style={{
        background: variables.bg_color,

      }}
    >
      <div className='container'>
        <MyHeader />
        {children}
      </div>
    </section>
  )
}
