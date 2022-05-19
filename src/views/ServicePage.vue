<template>
    <Layout>
        <!-- Start Service Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <ServiceThree
                    service-style="service__style--2"
                    text-align="center"
                />
            </div>
        </section>
        <!-- End Service Area -->

        <!-- Start Elements Area -->
        <div class="rwt-callto-action-area rn-section-gapBottom">
            <div class="wrapper">
                <CallToAction
                    :style-type="5"
                    title="Ready to get started?"
                    btn-text="Get In Touch"
                />
            </div>
        </div>
        <!-- End Elements Area -->
    </Layout>
</template>

<script>
import Layout from '../components/common/Layout'
import Separator from '../components/elements/separator/Separator'
import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
import ServiceThree from '../components/elements/service/ServiceThree'
import CallToAction from '../components/elements/callToAction/CallToAction'
import Brand from '../components/elements/brand/Brand'

export default {
    name: 'ServicePage',
    components: {
        ServiceThree,
        SectionTitle,
        Breadcrumb,
        Layout,
        CallToAction,
        Brand,
        Separator,
    },
    data() {
        return {
            brandList: [
                {
                    image: require(`@/assets/images/brand/Tailwind.png`),
                },
                {
                    image: require(`@/assets/images/brand/Vue.png`),
                },
                {
                    image: require(`@/assets/images/brand/brand-03.png`),
                },
                {
                    image: require(`@/assets/images/brand/brand-04.png`),
                },
                {
                    image: require(`@/assets/images/brand/brand-05.png`),
                },
                {
                    image: require(`@/assets/images/brand/brand-06.png`),
                },
                {
                    image: require(`@/assets/images/brand/brand-07.png`),
                },
                {
                    image: require(`@/assets/images/brand/brand-08.png`),
                },
            ],
        }
    },
}
</script>
