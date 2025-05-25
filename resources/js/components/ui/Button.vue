<template>
    <button class="button button_orange"><slot /></button>
</template>

<script>
export default {
    name: "ui-button"
}
</script>

<style scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 150px;
    cursor: pointer;
    color: var(--white);
    border-radius: var(--border-radius);
    border: none;
    font-family: inherit;
    font-weight: 700;
    font-size: var(--text);
    line-height: 1;
    padding: 16px 40px;
    transition: all 0.2s ease-in-out;
}
.button_orange {
    background-color: var(--orange);
}
.button_orange:hover {
    background-color: #FF6820;
}
.button_orange:disabled {
    background-color: var(--gray-dark);
    opacity: 0.43;
    color: var(--black);
}
</style>