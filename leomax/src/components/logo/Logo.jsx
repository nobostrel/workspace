import * as React from 'react';
import './Logo.css';

export default function LogoComponent () {
        return (
            <div className="Logo-main">
                <div className="Logo-top">
                    <div className="Logo-top-block">
                    </div>
                    <div className="Logo-top-block-center">
                        Домашний <br/>
                        Магазин
                    </div>
                    <div className="Logo-top-block">
                    </div>
                    </div>
                <h1 className="Logo-center">
                    Оформление подписки
                </h1>
                <div className="Logo-bottom">
                    Спасибо, что решили стать участником клуба
                </div>
            </div>
        )
}
