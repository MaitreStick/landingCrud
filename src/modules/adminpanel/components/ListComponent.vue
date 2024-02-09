<template>
    <div class="flex flex-col justify-center mt-20">
        <div class="container mx-auto mt-4 p-6 bg-white shadow-lg rounded-lg">
            <div class="mb-4 flex justify-between items-center">
                <input 
                    type="text"
                    v-model="term"
                    placeholder="Buscar"
                    class="form-control block w-full md:w-3/3 px-4 py-2 border border-gray-200 rounded shadow-sm focus:outline-none focus:border-blue-500"
                />
                <button @click="goToNewView" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    New
                </button>
            </div>
            <div class="flex flex-col justify-center overflow-x-auto">
                <Entry :term="term" />
            </div>
        </div>
    </div>
</template>



<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        Entry: defineAsyncComponent(() => import('./Entry.vue')),
    },
    data() {
        return {
            term: ''
        };
    },
    mounted() {
    this.$store.dispatch('adminModule/loadEntries');
    },
    methods: {
        ...mapActions('adminModule', ['loadEntries']),
        goToNewView() {
            this.$router.push({ name: 'createentry' });
        }
    },
    computed: {
        ...mapGetters('adminModule', {
            entriesByTerm: 'getEntriesByTerm'
        }),
    }
}
</script>
