const app = Vue.createApp({
    data (){
        return{
            firstName: 'Bharath Naik',
            lastName: 'Vadithya',
            email: 'bharath@gmail.com',
            picture:'https://randomuser.me/api/portraits/men/12.jpg'
        }
    },

    methods: {
       async getUser(){
        const res = await fetch('https://randomuser.me/api')
        const {results} = await res.json()
        console.log(results)
        console.log(this.email);
        console.log('hello mfcks');
        this.firstName = results[0].name.first //fetchs the name from api store in results

        }
    }
})

app.mount('#app')
