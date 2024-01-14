import React from 'react'
import Layout from '../Components/Layout'
import "../styles/Home.css"

function Home() {
  return (
    <Layout>
        <div className='home'>
            <div className='home-content'>
                <h1>Welcome to MyCompany</h1>
                <p>This is a simple Employee Management System</p>
                <p>This project is built using MERN technolog</p>
            </div>
        </div>
    </Layout>
  )
}

export default Home