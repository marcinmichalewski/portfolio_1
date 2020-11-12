import React from 'react-dom';
import Decoration from '../assets/Decoration.svg';
import Icon1 from '../assets/Icon-1.svg';
import Icon2 from '../assets/Icon-2.svg';
import Icon3 from '../assets/Icon-3.svg';
import Icon4 from '../assets/Icon-4.svg';
import Logging from "./Logging";
import Register from "./Register";



const Home = () => {
    return (
        <>
        <header className="App-header">
            <ul className="App-login">
                <li>
                    <a href={Logging}>Zaloguj się</a>
                </li>
                <li>
                    <a href={Register}>Załóż konto</a>
                </li>
            </ul>

            <ul className="App-nav">
                <li>
                    <a href='/'>Start</a>
                </li>
                <li>
                    <a href='/'>O co chodzi?</a>
                </li>
                <li>
                    <a href='/'>O nas</a>
                </li>
                <li>
                    <a href='/'>Fundacja i organizacje</a>
                </li>
                <li>
                    <a href='/'>Kontakt</a>
                </li>
            </ul>

            <div className="header-banner">
                <div className="banner-title">
                    <h2>Zacznij pomagać</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                </div>
                <div className="banner-decoration">
                    <img src={Decoration} alt="Decoration" />
                </div>
                <div className="banner-buttons">
                    <button className="banner-left-btn">ODDAJ RZECZY</button>
                    <button className="banner-right-btn">ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </header>

        <div className="three-columns">
            <div className="col_3">
                <span>10</span>
                <h4>ODDANYCH WORKÓW</h4>
                <p>Lorem ipsum dolor sit amet augue. Maecenas bibendum quis, interdum vitae, placerat at, justo. Aenean scelerisque, lacus.</p>
            </div>
            <div className="col_3">
                <span>5</span>
                <h4>WSPARTYCH ORGANIZACJI</h4>
                <p>Lorem ipsum dolor sit amet augue. Maecenas bibendum quis, interdum vitae, placerat at, justo. Aenean scelerisque, lacus.</p>
            </div>
            <div className="col_3">
                <span>7</span>
                <h4>ZORGANIZOWANYCH ZBIÓREK</h4>
                <p>Lorem ipsum dolor sit amet augue. Maecenas bibendum quis, interdum vitae, placerat at, justo. Aenean scelerisque, lacus.</p>
            </div>
        </div>

        <div className="simple-steps">
            <div className="steps-row1">
                <h2 className="steps-title">Wystarczą 4 proste kroki</h2>
                <img src={Decoration} alt="Decoration" />
            </div>
            <div className="steps-row2">
                <div className="steps">
                    <img src={Icon1} alt="Icon1" />
                    <p>Wybierz rzeczy</p>
                    <p>Ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps">
                    <img src={Icon2} alt="Icon2" />
                    <p>Spakuj je</p>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps">
                    <img src={Icon3} alt="Icon3" />
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="steps">
                    <img src={Icon4} alt="Icon4" />
                    <p>Zamów kuriera</p>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="steps-row3">
                <button className="steps-btn">
                    <a href={Logging}>ODDAJ RZECZY</a>
                </button>
            </div>
        </div>

        </>
    )
};


export default Home;
