import React from 'react';
import {Input, Button} from 'antd';
import './Search.css';

export const Search = props => {
    return (
        <div className="search" style={{width: `${props.width}px`}}>
            <Input placeholder="Номер рейса" onChange={props.onChange} />
            <Button type="primary" icon="search" onClick={props.onClick}>Найти</Button>
        </div>
    )
}