import * as React from 'react';
import './Checkbox.css';

export default function Checkbox({value, labelClass, className, label, checked, onChange, price}) {
    return (
        <div className="checkbox-block">
            <label className={labelClass}>
            <input
                className={className}
                type="checkbox"
                value={value}
                checked={checked}
                onChange={onChange}
                data-price={price}
            />
                {label}
            </label>
        </div>
    )
}