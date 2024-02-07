<template>
    <div class="edit-container">
        <div class="edit-zone">
            <div v-if="showAlert" class="alert">
                <span>Edited succesfully</span>
            </div>
            <h2>Edit</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input v-model="localEntry.name" id="name" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Nombre">
                </div>
                <div class="mb-3">
                    <label for="document" class="block text-sm font-medium text-gray-700">Document</label>
                    <input v-model="localEntry.document" id="document" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Documento">
                </div>
                <div class="mb-3">
                    <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                    <input v-model="localEntry.date" id="date" type="date" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Fecha">
                </div>
                <div class="mb-3">
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                    <input v-model="localEntry.phone" id="phone" type="tel" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Teléfono">
                </div>
            </form>
            <div class="button-container">
            <button @click="goBack" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go back
            </button>
            <button type="submit" @click="submitForm" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Save
            </button>
        </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localEntry: JSON.parse(JSON.stringify(this.entry)),
            showAlert: false,
        };
    },
    methods: {
        submitForm() {
            this.$emit('update-entry', this.localEntry);
            this.showAlert = true;
            setTimeout(() => {
            this.showAlert = false;
            }, 1500);
        },
        goBack() {
            this.$router.push({ name: 'listview' }) 
        }
    },
    watch: 
    {
        entry: {
            handler(newValue) {
                this.localEntry = JSON.parse(JSON.stringify(newValue));
            },
            deep: true,
            immediate: true
        }
    }
}
</script>

<style scoped>
.edit-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
}

.edit-zone {
    width: 100%;
    max-width: 500px; 
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background: white;
    border-radius: 8px;
    margin: 0 auto; 
}

.button-container {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

.alert {
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background-color: green;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    opacity: 1; 
    z-index: 1200;
}
</style>
