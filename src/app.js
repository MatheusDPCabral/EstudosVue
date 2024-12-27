const MyNameApp = {
    data () {
        return {
            name: "",
            age: "18",
            email: "matheus@gmail.com",
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            console.log(this.input_name);

            this.name = this.input_name;
        } 
    }
}

Vue.createApp(MyNameApp).mount("#app");