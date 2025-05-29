<template>
  <div>
    <header>
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
        </div>
    </header>
    <main class="p-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
</script>