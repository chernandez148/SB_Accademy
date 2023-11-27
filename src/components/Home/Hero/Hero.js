import React, { useState, useRef, useEffect } from 'react';
import barber from '../../../assets/barber.jpg';
import graduate from '../../../assets/graduate.jpg'
import student from '../../../assets/student.jpg'
import graduate2 from '../../../assets/graduate-2.jpg'
import hairClipper from '../../../assets/hair-clippers.png';
import hairDryer from '../../../assets/hair-dryer.png'
import hairStraighener from '../../../assets/hair-straightener.png';
import './styles.css';

function Hero() {
    const [sliderWidth, setSliderWidth] = useState(0);
    const [imageIndex, setImageIndex] = useState(0)
    const sliderRef = useRef(null);

    const slider = [
        { name: "barber", url: barber },
        { name: "graduate", url: graduate },
        { name: "student", url: student },
        { name: "graduate 2", url: graduate2 },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (sliderRef.current) {
                setSliderWidth(sliderRef.current.offsetWidth - 20);
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);
        if (sliderRef.current) {
            resizeObserver.observe(sliderRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        console.log('Slider Width:', sliderWidth);
    }, [sliderWidth]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex < slider.length - 1 ? prevIndex + 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, [slider.length]);

    console.log(imageIndex)

    return (
        <div className='Hero'>
            <div className='hero-left'>
                <div className='circle'></div>
                <h1>San Bernardino Cuts Barbering and Cosmetology Institute</h1>
                <p>Cultivating the next generation of beauty industry leaders.</p>
                <button>Learn more</button>
                <img className='floating dryer' src={hairDryer} alt='hair dryer' />
            </div>
            <div className='hero-right'>
                <div className='hero-right-wrapper'>
                    <img className='floating clippers' src={hairClipper} alt="Hair Clipper" />
                    <div className='hero-slider' ref={sliderRef}>
                        {slider.map((image, index) => (
                            <img
                                key={index}
                                alt={image.name}
                                src={image.url}
                                style={{
                                    width: index < 3 ? sliderWidth : null,
                                    opacity: index === imageIndex ? 1 : 0
                                }}
                            />
                        ))}
                    </div>
                    <img className='floating straightener' src={hairStraighener} alt="Hair Straightener" />
                </div>
                <div className='enroll'>
                    <h3>Open Enrollment</h3>
                    <button>Enroll Now</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
