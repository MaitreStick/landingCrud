<template>
    <div class="entry-list-container">
        <div>
            <NewButton
            />
        </div>
        <div class="px-2 pt-2">
            <input 
                type="text"
                class="form-control"
                placeholder="Buscar"
            />
        </div>

        <div class="entry-scrollarea">
            <Entry
            />
        </div>

    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
    export default{
        components: {
            NewButton: defineAsyncComponent(() => import('./NewButton.vue')),
            Entry: defineAsyncComponent(() => import('./Entry.vue')),
        }
    }
</script>

<style lang="scss" scoped>

input{
    margin-bottom: 1em;
}
.entry-list-container{
    height: calc( 40vh );
    width: calc(80vw);
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.entry-scrollarea{
    height: calc( 90vh - 110px );
}
</style>