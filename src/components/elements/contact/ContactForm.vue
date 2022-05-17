<template>

   <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
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
