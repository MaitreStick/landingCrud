<template>
    <div>
        <ListComponent/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions } from 'vuex';

export default {
    components: {
        ListComponent: defineAsyncComponent(() => import('../components/ListComponent.vue'))
    },
    created() {
        this.loadEntries();
    },
    methods: {
        ...mapActions('adminModule', ['loadEntries']),
    }
}
</script>

<style>

</style>