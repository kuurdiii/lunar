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
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Call To Action"
                            title="Style Five"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <CallToAction
                    :style-type="5"
                    title="Ready to start creating a standard website?"
                    subtitle="Finest choice for your home & office"
                    btn-text="Purchase Doob"
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
