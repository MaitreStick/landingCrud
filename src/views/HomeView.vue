<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>landing</h1>
    <button @click="goToAdminPanel" class="btn btn-primary">Primary</button>
    <button @click="goToAdminPanel" class="btn btn-secondary">Secondary</button>
    <button @click="goToAdminPanel" class="btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToAdminPanel() {
      this.$router.push({name: 'adminview'})
    }
  }
}


</script>