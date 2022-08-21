<script>
    export default {
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
    }
      
    </script>
    
    <template>
      <p class="greeting">{{ this.firstName }}</p>
      
          <div id="app">
            <img v-bind:src="picture" v-bind:alt="firstName"/>
            <h1> {{firstName}} {{lastName}}</h1>
            <h3>Email: {{email}}</h3>
            <button :class="male" v-on:click="getUser()">get random room</button>
        </div>
      
    </template>
    
    <style>
    .greeting {
      color: red;
      font-weight: bold;
    }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      html,
      body {
        font-family: Arial, Helvetica, sans-serif;
      }
      
      #app {
        width: 400px;
        height: 100vh;
        margin: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      h1,
      h3 {
        margin-bottom: 1rem;
        font-weight: normal;
      }
      
      img {
        border-radius: 50%;
        border: 5px #333 solid;
        margin-bottom: 1rem;
      }
      
      .male {
        border-color: steelblue;
        background-color: steelblue;
      }
      
      .female {
        border-color: pink;
        background-color: pink;
        color: #333;
      }
      
      button {
        cursor: pointer;
        display: inline-block;
        background: #333;
        color: white;
        font-size: 18px;
        border: 0;
        padding: 1rem 1.5rem;
      }
      
      button:focus {
        outline: none;
      }
      
      button:hover {
        transform: scale(0.98);
      }
      
    </style>