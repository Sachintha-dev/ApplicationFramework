import React from 'react'
import SideBar from '../SideBar/SideBar'
import { Layout } from '../HandleChatBot/HandleChatBot'


function Home() {
  return (
    <div>
        <Layout>
        <SideBar/>
        </Layout>
    </div>
  )
}

export default Home