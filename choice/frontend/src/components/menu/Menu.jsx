import React from 'react';
import './Menu.scss';

export const MenuComponent = props => {
    return (
            <div className="menu" style={props.animation}>
                <div className="container">
                    <img className="container__nikeLogo" src={require('../../img/nike_logo.png')} />
                    <span className="container__upperCentralText">
                        {props.lang === 'eng' ? 'NIKE. RAISED ON CONCRETE.' : 'НАЙК. ВЫРАЩЕННЫЙ НА БЕТОНЕ.'}
                    </span>
                    <img className="container__close" src={require('../../img/close.png')} onClick={props.onCloseClick} />
                    <span className="container__copyright">
                        {props.lang === 'eng' ? '© 2018 NIKE. ALL RIGHTS RESERVED.' : '© 2018 НАЙК. ВСЕ ПРАВА ЗАЩИЩЕНЫ.'}
                    </span>
                    <span className="container__rightCentralText rightCentralText">
                        <a href="https://store.nike.com/us/en_us/pw/n/1j7?sl=hoodies&vst=hoodies">
                            {props.lang === 'eng' ? 'HOODIES' : 'ТОЛСТОВКИ'}
                        </a>
                        <span className="rightCentralText__slash">/</span>
                        <a href="https://store.nike.com/us/en_us/pw/n/1j7?sl=sweatshirt&vst=sweatshirt">
                            {props.lang === 'eng' ? 'SWEATSHIRTS' : 'ФУФАЙКИ'}
                        </a>
                        <span className="rightCentralText__slash">/</span> 
                        <a href="https://store.nike.com/us/en_us/pw/n/1j7?sl=shoes&vst=shoes">
                            {props.lang === 'eng' ? 'SHOES' : 'ОБУВЬ'}
                        </a>
                    </span>
                    <a className="container__instagram" href="https://www.instagram.com/nike/">
                        {props.lang === 'eng' ? 'INSTAGRAM' : 'ИНСТАГРАМ'}
                    </a>
                    <a className="container__facebook" href="https://www.facebook.com/nike">
                        {props.lang === 'eng' ? 'FACEBOOK' : 'ФЕЙСБУК'}
                    </a>
                    <a className="container__language" href="#" onClick={props.langChange}>
                        {props.lang === 'eng' ? 'ENG' : 'RU'}
                    </a>
                    <div className="container__hrefs hrefs">
                        <a className="hrefs__href" href="http://localhost:8080/">
                            {props.lang === 'eng' ? 'MAIN' : 'ГЛАВНАЯ'}
                        </a>
                        <a className="hrefs__href" href="https://www.nike.com/us/en_us/">
                            {props.lang === 'eng' ? 'ALL NIKE' : 'ВСЕ НАЙКИ'}
                        </a>
                        <a className="hrefs__href" href="https://www.nike.com/us/en_us/c/nikeid">
                            {props.lang === 'eng' ? '+ MAKE YOUR SHOES' : '+ СОЗДАЙ СВОЮ ОБУВЬ'}
                        </a>
                        <a className="hrefs__href" href="https://about.nike.com/">
                            {props.lang === 'eng' ? 'ABOUT US' : 'О НАС'}
                        </a>
                        <a className="hrefs__href" href="https://www.nike.com/help/#contact">
                            {props.lang === 'eng' ? 'CONTACTS' : 'КОНТАКТЫ'}
                        </a>
                    </div>
                </div>
            </div>
    )
}