import React from 'react'
import { PiChalkboardTeacherThin, PiOfficeChairThin, PiMoneyThin } from "react-icons/pi";
import boardLogo from '../../../assets/board-logo.png'
import './styles.css'

function Highlights() {
    return (
        <div className='Highlights'>
            <div className='highlights-wrapper'>
                <div className='trainer'>
                    <PiChalkboardTeacherThin color='white' size={48} />
                    <h4>One On One Training</h4>
                    <p>
                        Our institute offers personalized, expert one-on-one training in barbering and cosmetology by accredited professionals.
                    </p>
                    <a href='#'>Learn More</a>
                </div>
                <div className='on-hands-training'>
                    <PiOfficeChairThin color='white' size={48} />
                    <h4>Hands On Training</h4>
                    <p>
                        Our institute delivers hands-on, one-on-one barbering and cosmetology training with skilled, accredited professionals.
                    </p>
                    <a href='#'>Learn More</a>
                </div>
                <div className='financial-aid'>
                    <PiMoneyThin color='white' size={48} />
                    <h4>Financial Aid Available</h4>
                    <p>
                        Financial aid is available for qualified individuals at our institute, supporting their barbering and cosmetology education.
                    </p>
                    <a href='#'>Learn More</a>
                </div>
                <div className='licensed-institute'>
                    <img src={boardLogo} width="48px" />
                    <h4>Certified Academy</h4>
                    <p>
                        We are a licensed institute accredited by the California Board of Barbering and Cosmetology.
                    </p>
                    <a href='#'>Learn More</a>
                </div>
            </div>

        </div>
    )
}

export default Highlights