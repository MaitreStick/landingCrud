<template>
    <div class="col-4">
        <ListComponent/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components:{
        ListComponent: defineAsyncComponent(() => import('../components/ListComponent.vue'))
    }
}
</script>

<style>

</style>