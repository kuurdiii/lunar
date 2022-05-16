<template>
    <div :class="{ 'header-transparent-with-topbar': data.headerTransparency }">
        <!-- Start Header Area -->
        <header
            :class="[
                `rn-header header-default header-not-transparent header-sticky ${data.headerClass}`,
            ]"
        >
            <div class="container position-relative">
                <div class="row align-items-center row--0">
                    <template v-if="data.navAlignment === 'right'">
                        <div class="col-lg-3 col-md-6 col-4">
                            <Logo />
                        </div>
                        <div class="col-lg-9 col-md-6 col-8 position-static">
                            <div class="header-right">
                                <nav class="mainmenu-nav d-none d-lg-block">
                                    <Nav />
                                </nav>

                                <!-- Start Header Btn -->
                                <div class="header-btn">
                                    <router-link
                                        :class="data.buyButtonClass"
                                        to="/contact"
                                    >
                                        GET IN TOUCH
                                    </router-link>
                                </div>
                                <!-- End Header Btn  -->

                                <!-- Start Mobile-Menu-Bar -->
                                <div
                                    class="mobile-menu-bar ml--5 d-block d-lg-none"
                                >
                                    <div class="hamberger">
                                        <button
                                            class="hamberger-button"
                                            @click.prevent="
                                                AppFunctions.toggleClass(
                                                    '.popup-mobile-menu',
                                                    'active'
                                                )
                                            "
                                        >
                                            <Icon name="menu" size="21" />
                                        </button>
                                    </div>
                                </div>
                                <!-- Start Mobile-Menu-Bar -->

                                <div
                                    v-if="data.showThemeSwitcherButton"
                                    id="my_switcher"
                                    class="my_switcher"
                                >
                                    <ul>
                                        <li>
                                            <a
                                                href="javascript: void(0);"
                                                @click.prevent="
                                                    AppFunctions.toggleClass(
                                                        'body',
                                                        'active-light-mode'
                                                    )
                                                "
                                            >
                                                <img
                                                    class="light-icon"
                                                    src="../../../assets/images/icons/sun-01.svg"
                                                    alt="Sun images"
                                                />
                                                <img
                                                    class="dark-icon"
                                                    src="../../../assets/images/icons/vector.svg"
                                                    alt="Moon Images"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-if="data.navAlignment === 'left'">
                        <div class="col-lg-9 col-md-6 col-4 position-static">
                            <div class="header-left d-flex">
                                <Logo />
                                <nav class="mainmenu-nav d-none d-lg-block">
                                    <Nav />
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-8">
                            <div class="header-right">
                                <!-- Start Header Btn -->
                                <div class="header-btn">
                                    <router-link
                                        :class="data.buyButtonClass"
                                        to="/contact"
                                    >
                                        GET IN TOUCH
                                    </router-link>
                                </div>
                                <!-- End Header Btn  -->

                                <!-- Start Mobile-Menu-Bar -->
                                <div
                                    class="mobile-menu-bar ml--5 d-block d-lg-none"
                                >
                                    <div class="hamberger">
                                        <button
                                            class="hamberger-button"
                                            @click.prevent="
                                                AppFunctions.toggleClass(
                                                    '.popup-mobile-menu',
                                                    'active'
                                                )
                                            "
                                        >
                                            <Icon name="menu" size="21" />
                                        </button>
                                    </div>
                                </div>
                                <!-- Start Mobile-Menu-Bar -->

                                <div
                                    v-if="data.showThemeSwitcherButton"
                                    id="my_switcher"
                                    class="my_switcher"
                                >
                                    <ul>
                                        <li>
                                            <a
                                                href="javascript: void(0);"
                                                @click.prevent="
                                                    AppFunctions.toggleClass(
                                                        'body',
                                                        'active-light-mode'
                                                    )
                                                "
                                            >
                                                <img
                                                    class="light-icon"
                                                    src="../../../assets/images/icons/sun-01.svg"
                                                    alt="Sun images"
                                                />
                                                <img
                                                    class="dark-icon"
                                                    src="../../../assets/images/icons/vector.svg"
                                                    alt="Moon Images"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </header>
        <!-- End Header Area -->

        <!-- Start Mobile Menu -->
        <MobileMenu />
        <!-- End Mobile Menu -->

        <!-- Start Theme Style -->
        <div>
            <div class="rn-gradient-circle" />
            <div class="rn-gradient-circle theme-pink" />
        </div>
        <!-- End Theme Style -->
    </div>
</template>

<script>
import Icon from '../../icon/Icon'
import MobileMenu from './MobileMenu'
import AppFunctions from '../../../helpers/AppFunctions'
import Nav from './Nav'
import Logo from '../../elements/logo/Logo'

export default {
    name: 'Header',
    props: {
        data: {
            default: null,
        },
    },
    components: { Logo, Nav, MobileMenu, Icon },
    data() {
        return {
            AppFunctions,
        }
    },
    methods: {
        toggleStickyHeader() {
            const scrolled = document.documentElement.scrollTop
            if (scrolled > 100) {
                AppFunctions.addClass('.header-default', 'sticky')
            } else if (scrolled <= 100) {
                AppFunctions.removeClass('.header-default', 'sticky')
            }
        },
    },
    created() {
        window.addEventListener('scroll', this.toggleStickyHeader)
    },
    mounted() {
        this.toggleStickyHeader()
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.toggleStickyHeader)
    },
}
</script>
