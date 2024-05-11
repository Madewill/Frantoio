import React from 'react'

// This is the component rendering a background video controlled by css styling!
// keep to heart that this is the component the home text is blending with: all done with css!
const Background = () => {
    return (
        <>
            <div className='video-wrapper'>
                {/* <div className='overlay'></div> */}
                <div className="vid-overlay">
                    <video className='videobg' src='/assets/images/background-vd.webm' loop muted autoPlay></video>
                </div>
            </div>

            <div className='gradient-wrapper'>
                <div className="gradient">
                    <div className="topGradient"></div>
                    <div className="bottomGradient"></div>
                </div>
            </div>
        </>
    )
}

export default Background