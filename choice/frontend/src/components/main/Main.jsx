import React from 'react';
import './Main.scss';

export const MainComponent = props => {
    return (
            <div className="main" style={props.animation}>
                <div className="container">
                    <img className="container__nikeLogo" src={require('../../img/nike_logo.png')} />
                    <span className="container__upperCentralText">
                        {props.lang === 'eng' ? 'NIKE. RAISED ON CONCRETE.' : 'НАЙК. ВЫРАЩЕННЫЙ НА БЕТОНЕ.'}
                    </span>
                    <img className="container__menu" src={require('../../img/menu.png')} onClick={props.onMenuClick} />
                    <img className="container__arrowUp" src={props.arrowUpImg} onClick={props.arrowUp} />
                    <img className="container__arrowDown" src={props.arrowDownImg} onClick={props.arrowDown} />
                    <a className="container__leftBottomText" href="https://www.nike.com/us/en_us/">
                        {props.lang === 'eng' ? 'ALL NIKE' : 'ВСЕ НАЙКИ'}
                    </a>
                    <a className="container__leftBottomTextSecond" href="https://www.nike.com/us/en_us/c/nikeid">
                        {props.lang === 'eng' ? '+ MAKE YOUR SHOES' : '+ СОЗДАЙ СВОЮ ОБУВЬ'}
                    </a>

                    <div className="container__centralBottomBlock centralBottomBlock">
                        <div className="centralBottomBlock__upperBlock upperBlock">
                            <a className="upperBlock__text" style={props.nikeOnFireStyle} 
                            href="https://www.amazon.co.uk/d/Mens-Eau-Toilette/Nike-Fire-Eau-Toilette-Him/B00DRE3WU6">
                                {props.lang === 'eng' ? 'Nike on fire!' : 'Найк в огне!'}
                            </a>
                        </div>
                        <div className="centralBottomBlock__bottomBlock bottomBlock">
                            <img className="bottomBlock__whiteCircle" src={props.firstCircleImg} onClick={props.firstCircleClick} />
                            <div className="bottomBlock__points points">
                                <img className="points__point" src={props.pointImg} />
                                <img className="points__point" src={props.pointImg} />
                                <img className="points__point" src={props.pointImg} />
                                <img className="points__point" src={props.pointImg} />
                                <img className="points__point" src={props.pointImg} />
                                <img className="points__point" src={props.pointImg} />
                                <img className="points__point" src={props.pointImg} />
                                <img className="points__point" src={props.pointImg} />
                            </div>
                            <img className="bottomBlock__blackCircle" src={props.secondCircleImg} onClick={props.secondCircleClick} />
                        </div>
                    </div>
                    
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
                    <div className="container__centralTextBlock centralTextBlock">
                        <span className="centralTextBlock__upper">{props.page}</span>
                        <span className="centralTextBlock__middle">
                            <a href={props.href}>{props.title}</a>
                        </span>
                        <span className="centralTextBlock__bottom bottom">
                            <a className="bottom__leftHref" 
                            href="https://store.nike.com/us/en_us/pw/n/1j7?sl=clothes%20for%20sport%20and%20workout&vst=clothes%20for%20sport%20and%20workout">
                                {props.lang === 'eng' ? 'Clothes for sport and workout' : 'Одежда для спорта и воркаута'}
                            </a>
                            <span className="bottom__verticalLine">|</span>
                            <a className="bottom__rightHref" href="https://www.nike.com/us/en_us/c/nike-plus/nike-app">
                                {props.lang === 'eng' ? 'More' : 'Узнать больше'}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
    )
}