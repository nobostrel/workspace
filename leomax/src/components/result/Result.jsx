import * as React from 'react';
import './Result.css';

export default function ResultComponent({numbers1, numbers2, state, autoResabscribe}) {
    return (
        <div className="result">
            <div className="result-text-first">
                {numbers1 ? `${numbers1} руб.` : ""} {numbers2 ? "+" : ""} {numbers2 ? `${numbers2} руб.` : ""}
                <br />
                <div className="autoResabscribe">
                    {autoResabscribe}
                </div>
            </div>
            <div className="result-text-second">
                {numbers1 && numbers2 ? `= ${parseInt(numbers1, 10) +  parseInt(numbers2, 10)} руб.` : ""}
            </div>
        </div>
    )
}