import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/Demo'
import About from '../views/About'
import ButtonPage from '../views/ButtonPage'
import ServicePage from '../views/ServicePage'
import ServiceDetailsPage from '../views/ServiceDetailsPage'
import CounterUpPage from '../views/CounterUpPage'
import ProgressbarPage from '../views/ProgressbarPage'
import AccordionPage from '../views/AccordionPage'
import SocialSharePage from '../views/SocialSharePage'
import BlogGridPage from '../views/BlogGridPage'
import BlogGridSidebarPage from '../views/BlogGridSidebarPage'
import BlogListPage from '../views/BlogListPage'
import BlogListSidebarPage from '../views/BlogListSidebarPage'
import BlogDetailsPage from '../views/BlogDetailsPage'
import BlogCategoryPosts from '../components/blog/BlogCategoryPosts'
import TeamPage from '../views/TeamPage'
import PortfolioPage from '../views/PortfolioPage'
import PortfolioThreeColumnPage from '../views/PortfolioThreeColumnPage'
import PortfolioFullWidthPage from '../views/PortfolioFullWidthPage'
import PortfolioGridLayoutPage from '../views/PortfolioGridLayoutPage'
import PortfolioBoxLayoutPage from '../views/PortfolioBoxLayoutPage'
import PortfolioDetailsPage from '../views/PortfolioDetailsPage'
import TestimonialPage from '../views/TestimonialPage'
import TimelinePage from '../views/TimelinePage'
import TabPage from '../views/TabPage'
import PricingPage from '../views/PricingPage'
import SplitSectionPage from '../views/SplitSectionPage'
import CallToActionPage from '../views/CallToActionPage'
import VideoPage from '../views/VideoPage'
import GalleryPage from '../views/GalleryPage'
import ContactPage from '../views/ContactPage'
import BrandPage from '../views/BrandPage'
import ErrorPage from '../views/404'
import AdvanceTabPage from '../views/AdvanceTabPage'
import BrandCarouselPage from '../views/BrandCarouselPage'
import AdvancePricingPage from '../views/AdvancePricingPage'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Demo',
        component: Home,
        meta: {
            title: 'Doob || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/button',
        name: 'Button',
        component: ButtonPage,
        meta: {
            title: 'Button || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/service',
        name: 'Service',
        component: ServicePage,
        meta: {
            title: 'Service || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/service-details',
        name: 'Service Details',
        component: ServiceDetailsPage,
        meta: {
            title: 'Service Details || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/counter',
        name: 'Counter',
        component: CounterUpPage,
        meta: {
            title: 'Counter || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/progressbar',
        name: 'Progressbar',
        component: ProgressbarPage,
        meta: {
            title: 'Progressbar || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/accordion',
        name: 'Accordion',
        component: AccordionPage,
        meta: {
            title: 'Accordion || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/social-share',
        name: 'Social share',
        component: SocialSharePage,
        meta: {
            title: 'Social Share || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/blog-grid',
        name: 'Blog grid',
        component: BlogGridPage,
        meta: {
            title: 'Blog Grid || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/blog-grid-sidebar',
        name: 'Blog grid sidebar',
        component: BlogGridSidebarPage,
        meta: {
            title: 'Blog Grid Sidebar || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/blog-list',
        name: 'Blog list',
        component: BlogListPage,
        meta: {
            title: 'Blog List || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/blog-list-sidebar',
        name: 'Blog list sidebar',
        component: BlogListSidebarPage,
        meta: {
            title: 'Blog List Sidebar || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/blog-details/:id',
        name: 'Blog details',
        component: BlogDetailsPage,
        meta: {
            title: 'Blog Details || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/category/:slug',
        name: 'Blog Category List',
        component: BlogCategoryPosts,
        meta: {
            title: 'Blog Category List || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/team',
        name: 'Team',
        component: TeamPage,
        meta: {
            title: 'Team || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioPage,
        meta: {
            title: 'Portfolio || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/portfolio-three-column',
        name: 'Portfolio three column',
        component: PortfolioThreeColumnPage,
        meta: {
            title: 'Portfolio Three Column || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/portfolio-full-width',
        name: 'Portfolio full width',
        component: PortfolioFullWidthPage,
        meta: {
            title: 'Portfolio Full Width || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/portfolio-grid-layout',
        name: 'Portfolio grid layout',
        component: PortfolioGridLayoutPage,
        meta: {
            title: 'Portfolio Grid Layout || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/portfolio-box-layout',
        name: 'Portfolio box layout',
        component: PortfolioBoxLayoutPage,
        meta: {
            title: 'Portfolio Box Layout || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/portfolio-details/:id',
        name: 'Portfolio details',
        component: PortfolioDetailsPage,
        meta: {
            title: 'Portfolio Details || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/testimonial',
        name: 'Testimonial',
        component: TestimonialPage,
        meta: {
            title: 'Testimonial || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/timeline',
        name: 'Timeline',
        component: TimelinePage,
        meta: {
            title: 'Timeline || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/tab',
        name: 'Tab',
        component: TabPage,
        meta: {
            title: 'Tab || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: PricingPage,
        meta: {
            title: 'Pricing || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/spit-section',
        name: 'Split section',
        component: SplitSectionPage,
        meta: {
            title: 'Split Section || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/call-to-action',
        name: 'Call to action',
        component: CallToActionPage,
        meta: {
            title: 'Call to Action || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/video',
        name: 'Video',
        component: VideoPage,
        meta: {
            title: 'Video || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: GalleryPage,
        meta: {
            title: 'Gallery || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage,
        meta: {
            title: 'Contact || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/brand',
        name: 'Brand',
        component: BrandPage,
        meta: {
            title: 'Brand || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/error',
        name: 'Error',
        component: ErrorPage,
        meta: {
            title: '404 || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/advance-tab',
        name: 'Advance tab',
        component: AdvanceTabPage,
        meta: {
            title: 'Advance Tab || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/brand-carousel',
        name: 'Brand carousel',
        component: BrandCarouselPage,
        meta: {
            title: 'Brand Carousel || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/advance-pricing',
        name: 'Advance pricing',
        component: AdvancePricingPage,
        meta: {
            title: 'Advance Pricing || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/portfolio-details',
        name: 'Portfolio details',
        component: PortfolioDetailsPage,
        meta: {
            title: 'Portfolio Details || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/blog-details',
        name: 'Blog details',
        component: BlogDetailsPage,
        meta: {
            title: 'Blog Details || Doob Business and Consulting Bootstrap5 Template',
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    window.scrollTo(0, 0)
});

export default router
