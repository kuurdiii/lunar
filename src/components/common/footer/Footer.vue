<template>
    <div>
        <!-- Start Footer Area  -->
        <footer
            v-if="data.showFooter"
            class="rn-footer footer-style-default variation-two"
        >
            <div
                v-if="data.showCta"
                class="rn-callto-action clltoaction-style-default style-7"
            >
                <div class="container">
                    <div class="row row--0 align-items-center content-wrapper">
                        <div class="col-lg-8 col-md-8">
                            <div class="inner" data-aos="fade-up">
                                <div class="content text-left">
                                    <Logo />
                                    <p class="subtitle">
                                        Getting you up and running and keeping
                                        you evolving to meet changing trends is
                                        effortless with us.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div
                                class="call-to-btn text-start mt_sm--20 text-lg-end"
                                data-aos="fade-up"
                            >
                                <Button
                                    title="Get In Touch"
                                    icon="arrow-right"
                                    url="/contact"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <h4 class="title">Services</h4>
                                <div class="inner">
                                    <ul class="footer-link link-hover">
                                        <li>
                                            <router-link to="/"
                                                >Portfolio</router-link
                                            >
                                        </li>
                                        <li>
                                            <router-link to="/contact"
                                                >Contact</router-link
                                            >
                                        </li>
                                        <li>
                                            <router-link to="/"
                                                >Service</router-link
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <h4 class="title">Let's Connect</h4>
                                <div class="inner">
                                    <ul
                                        class="social-icon social-default justify-content-start"
                                    >
                                        <li>
                                            <a
                                                href="https://www.facebook.com/"
                                                target="_blank"
                                            >
                                                <Icon name="facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.twitter.com"
                                                target="_blank"
                                            >
                                                <Icon name="twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.instagram.com/"
                                                target="_blank"
                                            >
                                                <Icon name="instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.linkedin.com/company/lunar-labs-media/"
                                                target="_blank"
                                            >
                                                <Icon name="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter v-if="data.showNewsletter" />
        </footer>
        <!-- End Footer Area  -->

        <Copyright v-if="data.showCopyright" />

        <ScrollTop />
    </div>
</template>

<script>
import Copyright from './Copyright'
import Button from '../../elements/button/Button'
import Icon from '../../icon/Icon'
import ScrollTop from './ScrollTop'
import Logo from '../../elements/logo/Logo'
import Newsletter from './Newsletter'

export default {
    name: 'Footer',
    components: { Newsletter, Logo, ScrollTop, Icon, Button, Copyright },
    props: {
        data: {
            default: null,
        },
    },
}
</script>
