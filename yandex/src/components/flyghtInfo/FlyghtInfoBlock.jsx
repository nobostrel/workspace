import React from 'react';
import './FlyghtInfoBlock.css';

export const FlyghtInfoBlock = props => {
    return (
        <div className="FlyghtInfoBlock">
            <div>
                {props.date}
            </div>
            <div>
                {props.flyghtNumber}
            </div>
            <div>
                {props.airport}
            </div>
            <div>
                {props.terminal}
            </div>
            <div>
                {props.status}
            </div>
        </div>
    )
}