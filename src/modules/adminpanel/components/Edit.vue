<template>
    <div class="entry-list-container">
        <div>
            <NewButton
            />
        </div>
        <div class="edit-zone">
            <h2>
                Edit zone
            </h2>
        </div>

    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
            NewButton: defineAsyncComponent(() => import('../components/NewButton.vue')),
        }
}
</script>

<style scoped>

.entry-list-container{
    height: calc( 40vh );
    width: calc(80vw);
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.edit-zone{
    height: calc( 90vh - 110px );
    border: 2px solid black;
}

</style>