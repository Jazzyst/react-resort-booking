import React from 'react';
import loadinfGif from '../images/gif/loading-arrow.gif';
const Loading = () => {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={loadinfGif} alt="loading"/>
        </div>
    );
};

export default Loading;
