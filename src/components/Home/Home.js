import React from 'react'
import Hero from './Hero/Hero'
import Highlights from './Highlights/Highlights'
import './styles.css'

function Home() {
    return (
        <div className='Home'>
            <Hero />
            <Highlights />
        </div>
    )
}

export default Home