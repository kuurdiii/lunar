<template>
    <Layout buy-button-class="btn-default btn-small">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-8 height-650">
            <div class="single-slide">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="inner text-center">
                                <span
                                    class="subtitle theme-gradient"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    >Lunar Labs Media</span
                                >
                                <h1
                                    class="title"
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    Creating Value <br />
                                    Through Interfaces
                                </h1>
                                <p
                                    class="description"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    Getting you up and running and keeping you
                                    evolving to meet changing trends is
                                    effortless with us.
                                </p>
                                <div
                                    class="button-group mt--30"
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                >
                                    <router-link
                                        class="btn-default btn-large round"
                                        to="#"
                                    >
                                        Explore Now
                                    </router-link>
                                    <router-link
                                        class="btn-default btn-border btn-large round"
                                        to="/contact"
                                    >
                                        Contact Us
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Start Counterup Area -->
        <div class="our-counterup-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="thumbnail" data-aos="fade-up">
                            <img
                                class="radius hero-bg w-100"
                                src="../assets/images/bg/1876.jpg"
                                alt="Images"
                            />
                        </div>
                        <div class="rwt-counterup-area ptb--60">
                            <div class="col-lg-12">
                                <Counter
                                    :counter-style="5"
                                    text-align="center"
                                    :counter-data="counterData"
                                    column="col-lg-3 col-md-6 col-sm-6 col-12"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Counterup Area -->
        <Separator />
        <!-- Start Service Area -->
        <div class="service-area rn-section-gapTop">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="content" data-aos="fade-up">
                            <h3 class="title">
                                An innovative way to build, manage and mainatin
                                your website.
                            </h3>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="mb--10" data-aos="fade-up">
                            Almost all of us pay monthly fees for our
                            smartphones and cellular service. The expense of
                            buying the phone upfront is steep. Our
                            Website-as-a-Service (WaaS) plan operates in the
                            same way. It provides you with a premium website for
                            a low monthly fee with no upfront costs.
                        </p>
                        <div class="readmore-btn" data-aos="fade-up">
                            <router-link class="btn-read-more" to="/service">
                                <span>View More</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Service Area -->

        <!-- Start Tab Area  -->
        <div class="rwt-advance-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12"></div>
                </div>
                <AdvancedTab :tab-data="tabData" />
            </div>
        </div>
        <!-- End Tab Area  -->
        <Separator />
        <!-- Start Elements Area -->
        <div class="rwt-pricing-area rn-section-gap">
            <div class="container">
                <div class="row mb--40 mb_sm--0">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Website as a service"
                            title="Our Pricing Plans"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingThreeData" :pricing-style="3" />
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator />
        <!-- Start Elements Area -->
        <div class="rwt-elements-area rn-section-gap">
            <div class="container">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Client Feedback"
                            title="Testimonials"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Testimonial
                    :testimonial="testimonialData5"
                    :testimonial-style="5"
                />
            </div>
        </div>
        <!-- End Elements Area -->
    </Layout>
</template>

<script>
import Layout from '../components/common/Layout'
import Separator from '../components/elements/separator/Separator'
import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
import Pricing from '../components/elements/pricing/Pricing'
import Counter from '../components/elements/counterUp/Counter'
import ServiceOne from '../components/elements/service/ServiceOne'
import AdvancedTab from '../components/elements/tab/AdvancedTab'
import Testimonial from '../components/elements/testimonial/Testimonial'

export default {
    name: 'Home',
    components: {
        ServiceOne,
        Counter,
        Pricing,
        SectionTitle,
        Separator,
        Layout,
        AdvancedTab,
        Testimonial,
    },
    data() {
        return {
            testimonialData5: [
                {
                    from: 'USA',
                    description:
                        'Fantastic high quality work. Would recommend to anyone. If you’re a startup in need of a website, this is your guy!!',
                    name: 'Nash',
                    subtitle: 'Cleaning Business Owner',
                    image: 'nash',
                },
            ],
            pricingThreeData: [
                {
                    title: 'Premium',
                    currency: '$',
                    price: '299',
                    subtitle: 'USD Per Month',
                    features: [
                        { title: 'Everything in standard' },
                        { title: '1 Blog Post Per Month' },
                        { title: '1000+ Word Blog Posts' },
                        { title: 'Written By SEO Specialists' },
                        { title: '$150 Per Extra Post' },
                    ],
                    btn: {
                        text: 'Get In Touch',
                        link: '/contact',
                    },
                },
                {
                    title: 'Standard',
                    currency: '$',
                    price: '149',
                    subtitle: 'USD Per Month',
                    features: [
                        { title: 'Logo Branding' },
                        { title: 'Web Hosting' },
                        { title: 'Lifetime Updates' },
                        { title: 'Unlimited Edits' },
                        { title: 'HTTPS Encryption' },
                    ],
                    btn: {
                        text: 'Get In Touch',
                        link: '/contact',
                    },
                    isActive: true,
                },
            ],
            tabData: {
                tabContent: [
                    {
                        id: 1,
                        menu: 'hosting-included',
                        title: 'Fast and Secure Hosting',
                        description:
                            'Count on 99.9% uptime, automatic SSL encryption. Hosting fees are built right into the monthly payment.',
                        image: require(`@/assets/images/tab/hosting.png`),
                    },
                    {
                        id: 2,
                        menu: 'mobile-responsive',
                        title: 'Mobile Responsive',
                        description:
                            'Our team builds your site for mobile devices first, then expands it to make it suitable for tablets and desktop computers.',
                        image: require(`@/assets/images/tab/mobile.png`),
                    },
                    {
                        id: 3,
                        menu: 'search-optimized',
                        title: 'Search Optimized',
                        description:
                            'Keeping your website updated with the Google search algorithm is important so it never goes out of date.',
                        image: require(`@/assets/images/tab/updates.png`),
                    },
                ],
            },
            counterData: [
                {
                    number: 35,
                    title: 'Happy Clients',
                },
                {
                    number: 80,
                    title: 'Completed Projects',
                },
                {
                    number: 5,
                    title: 'Expertise Years',
                },
                {
                    number: 30,
                    title: 'Million Impressions',
                },
            ],
        }
    },
}
</script>
