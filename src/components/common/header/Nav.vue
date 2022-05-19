<template>
    <ul class="mainmenu">
        <li>
            <router-link to="/"> Home </router-link>
        </li>

       <!--  <li>
            <router-link to="/service"> Services </router-link>
        </li>
        <li>
            <router-link to="/portfolio"> Projects </router-link>
        </li>
        <li>
            <router-link to="/blog-default"> Blog </router-link>
        </li>-->
    </ul>
</template>

<script>
import Icon from '../../icon/Icon'
export default {
    name: 'Nav',
    components: { Icon },
}
</script>
