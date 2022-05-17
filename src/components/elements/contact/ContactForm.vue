<template>
    <form
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="contact"
        method="post"
        class="contact-form-1"
        @submit="sendEmail"
    >
        <input type="hidden" name="form-name" value="contact" />

        <div class="form-group">
            <input
                type="text"
                name="fullname"
                placeholder="Your Name"
                required
            />
        </div>

        <div class="form-group">
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
            />
        </div>

        <div class="form-group">
            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
            />
        </div>

        <div class="form-group">
            <input type="text" name="subject" placeholder="Subject" required />
        </div>

        <div class="form-group">
            <textarea name="message" placeholder="Your Message" required>
            </textarea>
        </div>

        <div class="form-group">
            <button type="submit" class="btn-default btn-large">
                Submit Now
            </button>
        </div>

        <div class="form-group" v-html="showResult ? result : null" />
    </form>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            showResult: false,
            result: `<p class="success-message">Your Message has been successfully sent. I will contact you soon.</p>`,
        }
    },
    methods: {
        sendEmail() {
            this.showResult = true
        },
    },
}
</script>
