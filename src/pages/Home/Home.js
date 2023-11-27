import React from 'react'
import Hero from './Hero/Hero'
import Highlights from './Highlights/Highlights'
import About from './About/About'
import Courses from './Courses/Courses'
import './styles.css'

function Home() {
    return (
        <div className='Home'>
            <Hero />
            <Highlights />
            <About />
            <Courses />
        </div>
    )
}

export default Home