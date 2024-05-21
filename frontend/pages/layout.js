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
      <div
      style={{
        minHeight:'100vh',
        fontFamily:"sans-serif",
        paddingTop: "10vh",
        width:"90%",
        margin:'auto'
      }}>
        <MyHeader />
        {children}
      </div>
    </section>
  )
}
