import React from 'react';
import '../component/timer.css';

const Timer=()=>{
    return (
        <div className="static-tim">
            <div className="Numbes-timer">
                <span>00</span>
                <span>:</span>
                <span>30</span>
                <span>:</span>
                <span>00</span>
            </div>
            <div className="String-timer">
                <span>HOUR</span>
                <span>MINUTE</span>
                <span>SECONd</span>
            </div>
        </div>

    )
}
export default Timer;