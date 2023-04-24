import React from 'react'
import loading from '../../images/loading.gif'

const LoadingGif = () => {
    const style = {
        height: '20px',
        width: '20px',
        objectFit: 'contain',
        marginTop: '10px',
    }

    return (
        <img 
            style={style}
            src={loading} 
            alt="loading-gif" 
        />
    )
}

export default LoadingGif