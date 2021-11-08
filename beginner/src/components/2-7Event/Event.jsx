import React from 'react'

export default function Event() {
    const handleButtonClick = (e) => {
        console.dir(e)
        console.log('handleButtonClick')
    }
    const handleClickCapture = () => {
        console.log('handleClickCapture')
    }
    const handleClickCapture2 = () => {
        console.log('handleClickCapture2')
    }
    const handelClickBubble = () => {
        console.log('handelClickBubble')
    }
    const handleMouseLeave = (e) => {
        console.log(e)
    }
    return (
        <div onClickCapture={handleClickCapture}>
            <div onClickCapture={handleClickCapture2} onClick={handelClickBubble}>
                <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
            </div>
        </div>
    )
}
