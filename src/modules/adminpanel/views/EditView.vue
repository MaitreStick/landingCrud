<template>
    <div class="col-4">
        <Edit/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';


export default {
    components: {
        Edit: defineAsyncComponent(() => import('../components/Edit.vue'))
    }

}
</script>

<style>

</style>