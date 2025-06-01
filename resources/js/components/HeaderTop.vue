<template>
    <div class="header-top">
        <div class="container"> 
            <div class="header-top__contacts">
                <div class="mail">
                    <ul class="mail__list">
                        <li><a href="mailto:sfera.fm">info@sfera.live</a></li>
                        <li><a href="tel:+78122456770">+7 (812) 245-67-70</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <slot />
    </div>
</template>
<style scoped>
    .header-top {
        background-color: var(--body-gray);
        color: var(--white);
        padding: var(--gap-half);
        position: relative;
    }
    .header-top__contacts {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        gap: var(--gap);
        font-size: var(--text);
        margin-left: auto;
    }
    .mail__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--gap);
    }
    .mail__list li {
        margin: 0;
        white-space: nowrap;
    }
</style>