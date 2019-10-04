import React from 'react';
import '../component/timer.css';

const X='36440'
let hours=String(Math.floor(X/3600)).padStart(2,'0');
let minute=String(Math.floor((X%3600)/60)).padStart(2,'0');
let seconde=String(Math.floor((X%3600)%60)).padStart(2,'0');

const Timer=()=>{
    return (
        <div className="static-tim">
            <div className="Numbes-timer">
                <span>{hours}</span>
                <span>:</span>
                <span>{minute}</span>
                <span>:</span>
                <span>{seconde}</span>
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