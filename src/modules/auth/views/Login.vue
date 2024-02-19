<template>
    <span class="login100-form-title p-b-41">
        Sign in
    </span>
    <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="loginUser">
        <div class="wrap-input100 validate-input" data-validate="email">
            <input v-model="loginForm.email" class="input100" type="email" placeholder="email" required>
            <span class="focus-input100" data-placeholder="&#xe818;"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate="password">
            <input v-model="loginForm.password" class="input100" type="password" placeholder="password" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button type="submit" class="login100-form-btn">
                Sign in
            </button>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'register' }">Create new account</router-link>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        ...mapActions('auth', ['signInUser']),

        async loginUser() {
            const result = await this.signInUser(this.loginForm);
            if (result.ok) {
                this.$router.push({ name: 'listview' })
            } else {
                console.error(result.message);
            }
        }
    }
};
</script>


