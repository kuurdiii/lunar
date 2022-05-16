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
    </Layout>
</template>

<script>
import Layout from '../components/common/Layout'
import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
import ServiceThree from '../components/elements/service/ServiceThree'

export default {
    name: 'ServicePage',
    components: {
        ServiceThree,
        SectionTitle,
        Breadcrumb,
        Layout,
    },
}
</script>
