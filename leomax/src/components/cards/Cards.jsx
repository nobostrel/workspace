import * as React from 'react';
import './Cards.css';

export default function CardsComponent({name, disabled, index, value, checked, onChange, label, price, textFirst, textSecond, textThird}) {
    return (
        <label className="card">
            <input
                className="radio"
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                data-price={price}
                disabled={disabled}
            />
            <span className={checked ? "selected" : ""} />
            {label && label !== "" ?
                <img className="img" src={label} alt="not loaded =\"/>
                : <div className="alt-img">
                    <h4>
                        {textFirst} <br />
                        {textSecond}
                    </h4>
                        {textThird}
                </div>}
        </label>
    );
}