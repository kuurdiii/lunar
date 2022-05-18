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
                    <div class="col-lg-12">
                        <SectionTitle
                            textAlign="center"
                            subtitle="You can Customize All"
                            title="Advance Tab Style One"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <AdvancedTab :tab-data="tabData" />
            </div>
        </div>
        <!-- End Tab Area  -->

        <!-- Start Pricing Area -->
        <div class="rwt-pricingtable-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Pricing Plan"
                            title="Web Pricing Plan."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row mt--30">
                    <div class="col-lg-8 offset-lg-2">
                        <AdvancePricing />
                    </div>
                </div>
            </div>
        </div>
        <!-- End Pricing Area -->
        <Separator />
        <!-- Start Elements Area -->
        <div class="rwt-elements-area rn-section-gap">
            <div class="container">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Client Feedback"
                            title="Testimonial"
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
import AdvancePricing from '../components/elements/pricing/AdvancePricing'
import Counter from '../components/elements/counterUp/Counter'
import ServiceOne from '../components/elements/service/ServiceOne'
import AdvancedTab from '../components/elements/tab/AdvancedTab'
import Testimonial from '../components/elements/testimonial/Testimonial'

export default {
    name: 'Home',
    components: {
        ServiceOne,
        Counter,
        AdvancePricing,
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
                    image: 'testimonial-dark-01',
                },
                {
                    from: 'Germany',
                    description:
                        'What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.',
                    name: 'John Due',
                    subtitle: 'App Developer',
                    image: 'testimonial-dark-02',
                },
                {
                    from: 'USA',
                    description:
                        'What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.',
                    name: 'Janen',
                    subtitle: 'App Developer',
                    image: 'testimonial-dark-03',
                },
            ],
            tabData: {
                tabContent: [
                    {
                        id: 1,
                        menu: 'market-research',
                        title: 'Market Research.',
                        description:
                            'Use Doob template you can build a corporate website a short time.',
                        image: require(`@/assets/images/tab/tabs-02.jpg`),
                    },
                    {
                        id: 2,
                        menu: 'corporate-report',
                        title: 'Corporate Report.',
                        description:
                            'Use Doob template you can build a corporate website a short time.',
                        image: require(`@/assets/images/tab/tabs-03.jpg`),
                    },
                    {
                        id: 3,
                        menu: 'app-development',
                        title: 'App Development.',
                        description:
                            'Use Doob template you can build a corporate website a short time.',
                        image: require(`@/assets/images/tab/tabs-04.jpg`),
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
