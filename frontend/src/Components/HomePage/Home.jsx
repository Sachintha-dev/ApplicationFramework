import React from 'react'
import SideBar from '../SideBar/SideBar'
import FloatingButton from "../Floating_Button/FloatingButton"
import { Layout } from '../HandleChatBot/HandleChatBot'
import btn from '../Button/btn'

function Home() {
  return (
    <div>
        <Layout>
        <SideBar/>
        <FloatingButton/>
        <btn/>
        </Layout>
    </div>
  )
}

export default Home