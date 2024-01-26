<template>
    <div class="create-entry-view">
      <createEntryform/>
    </div>
  </template>
  
  <script>
  import { defineAsyncComponent } from 'vue';
  
  export default {
    components: {
        createEntryform: defineAsyncComponent(() => import('../components/CreateEntryForm.vue')),
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  