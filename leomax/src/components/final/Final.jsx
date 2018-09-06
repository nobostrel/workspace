import * as React from 'react';
import './Final.css';

export default function FinalComponent({value, hideButton, onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <input className={hideButton} type="submit" value={value}/>
        </form>
    )
}