app.component('product-details', {
    props: {
        details: {
            type: String,
            required: true
        }
    },
    template: 
    /*html*/
    `<p>Description: {{ details }}</p>`,
    computed: {
        productDetails() {
            return this.details
        }
    }
    
})