<script setup>
    import { useAuthStore } from '../stores/AuthStore';
    import { useRouter } from 'vue-router';
    import HeaderTop from './HeaderTop.vue';
    import MainLogo from './MainLogo.vue';
    import { useRoute } from 'vue-router'
    const route = useRoute()

    const auth = useAuthStore()
    const router = useRouter()

    const handleLogout = async () => {
        await auth.logout()
        router.push('/')
    }
    
</script>

<template>
    <header class="header">
        <HeaderTop>
            <div class="header__mobile-btn">
                <button class="mobile-button">
                    <span class="mobile-button__icon"></span>
                </button>
            </div>
        </HeaderTop>
        <MainLogo />
        <nav class="mobile-nav">
            <MainLogo />
            <ul class="mobile-nav__list">
                <li class="menu_heading"><a href="https://sfm.events/events">Вебинары</a></li>
                <li class="menu_heading"><router-link to="/login">Вход</router-link></li>
                <li class="menu_heading"><router-link to="/register">Регистрация</router-link></li>
            </ul>
            <div class="mobile-nav__mail">
                <div class="mail">
                    <ul class="mail__list">
                        <li><a href="mailto:sfera.fm">info@sfera.live</a></li>
                        <li><a href="tel:+78122456770">+7 (812) 245-67-70</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="header__nav">
            <div class="container">
                <nav class="navigation">
                    <ul class="navigation__list">
                        <li class="menu_heading"><router-link to="/" active-class="active">Главная</router-link></li>
                        <li class="menu_heading"><a href="https://sfm.events/events">Вебинары</a></li>
                        <template v-if="!auth.user">
                            <li class="menu_heading"><router-link to="/login" active-class="active">Вход</router-link></li>
                            <li class="menu_heading"><router-link to="/register" active-class="active">Регистрация</router-link></li>
                        </template>
                        <template v-else>
                            <li class="menu_heading"><router-link to="/dashboard" :class="[{ active: route.path.startsWith('/dashboard') }]">Личный кабинет</router-link></li>
                            <li class="menu_heading"><button @click="handleLogout">Выйти</button></li>
                        </template>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<style scoped>
.header {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--step) * 10);
}
.header__mobile-btn {
    position: absolute;
    right: 20px;
    top: 8px;
    z-index: 1000;
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
.navigation a.active {
    position: relative;
    padding-left: calc(var(--step) * 4);
}
.navigation a.active::after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    background-color: var(--orange);
    left: 0;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
}
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
</style>