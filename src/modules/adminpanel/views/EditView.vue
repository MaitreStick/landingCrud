<template>
    <div class="col-4">
      <Edit :entry="entry" @update-entry="handleUpdateEntry"/>
    </div>
  </template>
  
  <script>
  import { defineAsyncComponent } from 'vue';
  import { mapState, mapActions } from 'vuex';
  
  export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Edit: defineAsyncComponent(() => import('../components/Edit.vue')),      
  
    },
    data() {
        return {
            entry: null
        };
    },
    computed: {
        ...mapState('adminModule', ['entries'])
    },
    methods: {
        ...mapActions('adminModule', ['loadEntries', 'updateEntry']),
        loadEntry() {
            if (this.entries && this.entries.length > 0) {
                this.entry = this.entries.find(e => e.id === this.id);
            } else {
                this.loadEntries().then(() => {
                    this.entry = this.entries.find(e => e.id === this.id);
                });
            }
        },
        handleUpdateEntry(updatedEntry) {
          this.updateEntry(updatedEntry).then(() => {
              // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
              this.$router.push({ name: 'listview' }); // Por ejemplo, volver a la lista
          }).catch(error => {
              console.error('Error al actualizar:', error);
              // Manejar el error (mostrar mensaje al usuario, etc.)
          });
        }
    },
    created() {
        this.loadEntry();
    }
  }
  </script>
  