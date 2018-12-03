import React from 'react';
import {
    MainComponent,
    MenuComponent
} from '../../components/index';

export class MainContainer extends React.Component {
    state = {
        menuIsOpen: false,
        selectedCircleClassName: 'bottomBlock__whiteCircle',
        backgroundImg: `url(${require('../../img/background.png')})`,
        lang: 'eng',
        page: 1,
        pages: [
            {
                page: "01 / 04",
                title: {
                    eng: "Hoodies & Sweatshirts",
                    ru: "Толстовки и Фуфайки"
                },
                href: "https://store.nike.com/us/en_us/pw/n/1j7?sl=hoodies%20and%20sweatshirts&vst=hoodies%20and%20sweatshirts",
                arrowUpImg: require('../../img/arrow_grey.png'),
                arrowDownImg: require('../../img/arrow__white.png'),
                backgroundImg: `url(${require('../../img/background.png')})`
            },
            {
                page: "02 / 04",
                title: { 
                    eng: "Pants & Tights",
                    ru: "Штаны и Колготки"
                },
                href: "https://store.nike.com/us/en_us/pw/pants-tights/obs?redirect=true",
                arrowUpImg: require('../../img/arrow_white_up.png'),
                arrowDownImg: require('../../img/arrow__white.png'),
                backgroundImg: `url(${require('../../img/pants.png')})`
            },
            {
                page: "03 / 04",
                title: { 
                    eng: "Shoes",
                    ru: "Обувь"
                },
                href: "https://store.nike.com/us/en_us/pw/n/1j7?sl=shoes&vst=shoes",
                arrowUpImg: require('../../img/arrow_white_up.png'),
                arrowDownImg: require('../../img/arrow__white.png'),
                backgroundImg: `url(${require('../../img/shoes.png')})`
            },
            {
                page: "04 / 04",
                title: { 
                    eng: "Jackets & Vests",
                    ru: "Куртки и Жилеты"
                },
                href: "https://store.nike.com/us/en_us/pw/jackets-vests/obr?redirect=true&vst=jackets%20and%20vests",
                arrowUpImg: require('../../img/arrow_white_up.png'),
                arrowDownImg: require('../../img/arrow_grey_down.png'),
                backgroundImg: `url(${require('../../img/jacket.png')})`
            },
        ]
    }

    componentDidMount = () => {
        this.inteval = setInterval(this.timer, 6000);
    }

    componentWillUnmount = () => {
        clearInterval(this.inteval);
    }

    timer = () => {
        if (this.state.page >= 1 && this.state.page < 4) {
             this.setState({
                 page: this.state.page + 1,
                 backgroundImg: this.state.pages[this.state.page].backgroundImg
            });
        } else if (this.state.page === 4) this.setState({
            page: 1,
            backgroundImg: `url(${require('../../img/background.png')})`
        });
    }

    menuHandler = event => {
        event.target.className === "container__menu" ? this.setState({menuIsOpen: true}) : this.setState({menuIsOpen: false});
    }

    circleHandler = event => {
        this.setState({
            selectedCircleClassName: event.target.className
        })
    }

    arrowsHandler = event => {
        clearInterval(this.inteval);
        if (event.target.className === 'container__arrowUp') {
            if (this.state.page > 1 && this.state.page <= 4) this.setState({page: this.state.page - 1,backgroundImg: this.state.pages[this.state.page-2].backgroundImg});
        } else if (event.target.className === 'container__arrowDown') {
            if (this.state.page >= 1 && this.state.page < 4) this.setState({page: this.state.page + 1,backgroundImg: this.state.pages[this.state.page].backgroundImg});
        }
        this.inteval = setInterval(this.timer, 6000);
    }

    langHandler = event => {
        this.state.lang === 'eng' ? this.setState({lang: 'ru'}) : this.setState({lang: 'eng'});
    }
    
    render() {
        return (
            <React.Fragment>
                <MainComponent
                    onMenuClick={this.menuHandler}
                    animation={{
                        opacity: this.state.menuIsOpen ? "0" : "1",
                        zIndex: this.state.menuIsOpen ? "0" : "1",
                        backgroundImage: this.state.backgroundImg
                    }}
                    firstCircleClick={this.circleHandler}
                    secondCircleClick={this.circleHandler}
                    firstCircleImg={
                        this.state.selectedCircleClassName === 'bottomBlock__whiteCircle' ? require('../../img/circle_white.png') : require('../../img/circle_black.png')
                    }
                    secondCircleImg={
                        this.state.selectedCircleClassName === 'bottomBlock__blackCircle' ? require('../../img/circle_white.png') : require('../../img/circle_black.png')
                    }
                    pointImg={
                        this.state.selectedCircleClassName === 'bottomBlock__whiteCircle' ? require('../../img/point.png') : require('../../img/white_point.png')
                    }
                    nikeOnFireStyle={
                        this.state.selectedCircleClassName === 'bottomBlock__whiteCircle' ? 
                        {opacity: '0.6', zIndex: '-1'} 
                        : 
                        {opacity: '1', color: '#e25822', zIndex: '0', fontSize: '1.6em', textDecoration: 'underline'}
                    }
                    page={this.state.pages[this.state.page-1].page}
                    title={
                        this.state.lang === 'eng' ? 
                        this.state.pages[this.state.page-1].title.eng 
                        :
                        this.state.pages[this.state.page-1].title.ru
                    }
                    href={this.state.pages[this.state.page-1].href}
                    arrowUpImg={this.state.pages[this.state.page-1].arrowUpImg}
                    arrowDownImg={this.state.pages[this.state.page-1].arrowDownImg}
                    arrowUp={this.arrowsHandler}
                    arrowDown={this.arrowsHandler}
                    langChange={this.langHandler}
                    lang={this.state.lang}
                 />
                <MenuComponent
                    onCloseClick={this.menuHandler}
                    animation={{
                        opacity: this.state.menuIsOpen ? "1" : "0",
                        transform: this.state.menuIsOpen ? "rotate3d(0, 1, 0, 360deg)" : "rotate3d(0, 1, 0, 180deg)",
                        zIndex: this.state.menuIsOpen ? "1" : "0"
                    }}
                    langChange={this.langHandler}
                    lang={this.state.lang}
                 />
            </React.Fragment>
        )
    }
}