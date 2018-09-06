import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavigationStyles.css';

export const NavigationComponent = ({filter}) => {
    return (
        <div className="navigation">
            <div className="filter1">
                <input className="navButton" type="button" id="dateFilter" value="По дате" onClick={filter}/>
            </div>
            <div className="filter2">
                <input className="navButton" type="button" id="articleFilter" value="По названию" onClick={filter}/>
            </div>
            <div className="add">
                <NavLink className="addArticle" to="/addArticle"> Добавить статью </NavLink>
            </div>
        </div>
    )
};
