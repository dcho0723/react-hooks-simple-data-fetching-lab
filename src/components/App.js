import React, { useState, useEffect } from "react"

function App () {
    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => setRandomImage(data.message)) 
    }, [])
    return (
        <>
        {randomImage.length < 1 ? <p>Loading...</p> : <img src={randomImage} alt={"A Random Dog"}/>}
        </>
    )
}

export default App