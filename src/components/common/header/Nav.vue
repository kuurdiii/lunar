<template>
    <ul class="mainmenu">
        <li>
            <router-link to="/"> Home </router-link>
        </li>

         <li>
            <router-link to="/"> Services </router-link>
        </li>
        <li>
            <router-link to="/"> Projects </router-link>
        </li>
        <li>
            <router-link to="/"> Blog </router-link>
        </li>
    </ul>
</template>

<script>
import Icon from '../../icon/Icon'
export default {
    name: 'Nav',
    components: { Icon },
}
</script>
