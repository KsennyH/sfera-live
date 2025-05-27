<template>
    <header class="header">
        <div class="header__top">
            <div class="container"> 
                <div class="header__contacts">
                    <div class="mail">
                        <ul class="mail__list">
                            <li><a href="mailto:sfera.fm">sfera.fm</a></li>
                            <li><a href="tel:+79200000000">+79200000000</a></li>
                        </ul>
                    </div>
                    <a href="https://sfm.events/conferences" class="header-logo">
                        <img src="https://sfm.events/wp-content/uploads/2024/07/Sfera_congress.png" alt="Логотип Сфера конгресс">
                    </a>
                </div>
            </div>
            <div class="header__mobile-btn">
                <button class="mobile-button">
                    <span class="mobile-button__icon"></span>
                </button>
            </div>
        </div>
        <a href="/" class="header-logo header-logo_desctop">
            <img src="https://sfm.events/wp-content/uploads/2024/07/Sfera_congress.png" alt="Логотип Сфера конгресс">
        </a>
        <nav class="mobile-nav">
            <a href="https://sfm.events/conferences" class="header-logo">
                <img src="https://sfm.events/wp-content/uploads/2024/07/Sfera_congress.png" alt="Логотип Сфера конгресс">
            </a>
            <ul class="mobile-nav__list">
                <li><router-link to="/courses">Все курсы</router-link></li>
                <li><a class="eng menu_heading" href="https://sfm.events/events">Вебинары</a></li>
                <li><router-link to="/login">Вход</router-link></li>
                <li><router-link to="/register">Регистрация</router-link></li>
            </ul>
            <div class="mobile-nav__mail">
                <div class="mail">
                    <ul class="mail__list">
                        <li><a href="mailto:sfera.fm">sfera.fm</a></li>
                        <li><a href="tel:+79200000000">+79200000000</a></li>
                    </ul>
                </div>
            </div>
            <div class="mobile-nav__lang">
                <div class="languages">
                    <a href="#">Ru</a>
                    <a href="#">Eng</a>
                </div>
            </div>
        </nav>
        <div class="header__nav">
            <div class="container">
                <nav class="navigation">
                    <ul class="navigation__list">
                        <li><router-link to="/">Главная</router-link></li>
                        <li><router-link to="/courses">Все курсы</router-link></li>
                        <li><a class="eng menu_heading" href="https://sfm.events/events">Вебинары</a></li>
                        <li><router-link to="/dashboard">Личный кабинет</router-link></li>
                        <li><router-link to="/login">Вход</router-link></li>
                        <li><router-link to="/register">Регистрация</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<style>
/* HEADER */

.header {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--step) * 10);
}
.header__top {
    background-color: var(--gray-dark);
    padding: var(--gap-half);
    position: relative;
}
.header__contacts {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: var(--gap);
    font-size: var(--text);
    margin-left: auto;
}
.header .mail__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--gap);
}
.header .mail__list li {
    margin: 0;
}
.header__contacts .header-logo {
    display: none;
}
.header__mobile-btn {
    position: absolute;
    right: 20px;
    top: 8px;
    z-index: 1000;
}
.header-logo {
    max-width: 230px;
    margin: 0 auto;
}
.navigation {
    width: 100%;
    margin: 0 auto;
}
.navigation ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--gap);
}
.navigation a {
    font-size: var(--text);
}
.navigation li.current-menu-item{
    position: relative;
    padding-left: calc(var(--step) * 4);
}
.navigation li.current-menu-item::after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    background-color: var(--purple);
    left: 0;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
}

/* MAIL */

.mail li {
    white-space: nowrap;
}

/* END MAIL */

/* LANGUAGES */

.languages {
    display: flex;
    gap: var(--step);
}
.languages a.current-lang {
    color: #A1A1A1;
}

/* END LANGUAGES */

/* MOBILE NAV */

.mobile-button {
    width: 40px;
    height: 40px;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    z-index: 1000;
}
.mobile-button__icon {
    display: block;
    width: 40px;
    height: 2px;
    background-color: #A51A8B;
    position: relative;
}
.mobile-button__icon::after,
.mobile-button__icon::before {
    position: absolute;
    content: "";
    width: 40px;
    height: 2px;
    background-color: #A51A8B;
    transition: transform 0.15s ease-in, top 0.15s ease-in;
}
.mobile-button__icon::before {
    left: 0;
    top: -0.625rem;
}
.mobile-button__icon::after {
    left: 0;
    top: 0.625rem;
}
.mobile-button.active .mobile-button__icon {
    background-color: transparent;
}
.mobile-button.active .mobile-button__icon::before {
    transform: rotate(45deg);
    top: 0;
    transition: top 0.15s linear, transform 0.15s ease-in 0.15;
}
.mobile-button.active .mobile-button__icon::after {
    transform: rotate(-45deg);
    top: 0;
    transition: top 0.15s linear, transform 0.15s ease-in 0.15;
}
.mobile-nav {
    background-color: #D0D0D0;
    padding: 80px 20px;
    transition: all .5s ease-in;
    width: 100%;
    height: 100%;
    z-index: 100;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: none;
    animation-name: animateNavigation;
    animation-duration: 0.4s;
    overflow: auto;
}
.mobile-nav__list {
    margin-bottom: 40px;
}
.mobile-nav li + li {
    margin-top: 24px;
}
.mobile-nav li.current-menu-item {
    color: #A51A8B;
}
.mobile-nav a {
    font-size: var(--text);
}
.mobile-nav .header-logo {
    display: block;
    margin: 0 auto 20px;
    width: 200px;
}
.mobile-nav__mail {
    margin-bottom: 20px;
}
.mobile-nav__lang .languages {
    gap: 24px;
}
.mobile-nav.active {
    display: block;
}
.nav-active {
    color: #A51A8B;
}

/* END MOBILE NAV */
</style>