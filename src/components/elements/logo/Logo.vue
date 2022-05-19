<template>
    <div class="logo">
        <router-link :to="url">
            <img class="logo-light" :src="lightLogo" alt="Lunar Labs" />
            <img class="logo-dark" :src="darkLogo" alt="Lunar Labs" />
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Logo',
    props: {
        url: {
            type: String,
            default: '/',
        },
        lightLogo: {
            type: String,
            default: function () {
                return require(`@/assets/images/logo/logo.png`)
            },
        },
        darkLogo: {
            type: String,
            default: function () {
                return require(`@/assets/images/logo/logo-dark.png`)
            },
        },
    },
}
</script>
