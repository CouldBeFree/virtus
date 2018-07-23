<template>
    <div class="form-wrap">
        <h1>Login</h1>
        <form>
            <input type="email" placeholder="Email" :class="{'invalid': $v.email.$error}" @blur="$v.email.$touch()" v-model="email">
            <input type="password" placeholder="Password" :class="{'invalid': $v.password.$error}" @blur="$v.password.$touch()" v-model="password">
        </form>
        <button :disabled="$v.$invalid" @click="loginUser">Login</button>
        <div v-show="visible" class="account-message">Account doe'snt exist</div>
    </div>
</template>

<script>
    import { required, email, minLength} from 'vuelidate/lib/validators'
    export default {
        data(){
            return {
                email: '',
                password: '',
                visible: false
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(6),
                required
            }
        },
        methods:{
            loginUser(){
                this.$http.get('http://localhost:3000/users')
                    .then(resp => {
                        return resp.json()
                    })
                    .then(resp => resp.filter(item => item.email === this.email && item.password === this.password))
                    .then(res => res.length > 0 ? this.$router.push('/') : this.visible = true);
            }
        }
    }
</script>

<style scoped>

    .form-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-basis: calc(100% - 260px);
        background: #F7F7F8;
    }

    .account-message{
        margin-top: 10px;
        color: red;
    }

    .form-wrap button{
        cursor: pointer;
        background: transparent;
        border: 1px solid black;
        padding: 5px 20px;
        border-radius: 5px;
    }

    .form-wrap button:focus{
        outline: 0;
    }

    .form-wrap form{
        display: flex;
        flex-direction: column;
    }

    .form-wrap form input{
        margin-bottom: 15px;
        padding: 5px;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid black;
    }

    .form-wrap form input:focus{
        outline: 0;
    }

</style>