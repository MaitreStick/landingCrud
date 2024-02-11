<template>
    <nav class="fixed top-0 left-0 w-full z-10 backgroundMenu px-4 py-2 flex justify-between items-center">
        <a class="flex items-center text-2xl font-bold text-gray-100">
            <img src="@/assets/logo.png" 
                 alt="Ace Logo"
                 class="h-14 w-14 mr-2">
            Admin Panel
        </a>


        <div class="d-flex" >
            <button @click="logout" class="text-white hover:text-gray-200">
                <i class="fa fa-sign-out-alt"></i>Logout
            </button>
        </div>
    </nav>

</template>


<script>


export default {
    methods: {
                   
         logout() {
            localStorage.removeItem('idToken');
            localStorage.removeItem('refreshToken');
            this.$store.commit('logout'); 
            this.$router.push({ name: 'login' }).catch(err => {
                console.log( err );
            });
        }
    }
};

</script>

<style lang="scss" scoped>

.backgroundMenu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100; 
    border-radius: 0 0 10px 10px;
    background: linear-gradient(245.59deg, #4d6995 0%, #385f70 28.53%, #133139 75.52%);
}

</style>