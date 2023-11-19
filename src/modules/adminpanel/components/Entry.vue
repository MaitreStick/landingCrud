<template>
    <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Document</th>
                    <th>Date</th>
                    <th>Phone</th>
                    <th>PDF</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in 3" :key="item">
                    <td>{{ item.id }}</td> 
                    <td>{{ item.name }}</td>
                    <td>{{ item.document }}</td>
                    <td>{{ item.date }}</td> 
                    <td>{{ item.phone }}</td> 
                    <td>{{ item.pdf }}</td> 
                    <td class="text-center">
                        <button @click="goToEditView()" class="btn btn-outline-success mx-2" >Edit</button>
                        <button class="btn btn-outline-danger mx-2" >Delete</button>
                    </td>
                </tr>
            </tbody>
    </table>
</template>

<script>
export default {
    methods: {
        goToEditView() {
        this.$router.push({name: 'editview'})
    }
    }

}
</script>

<style scoped>


.table {
        border-radius: 10px;
        overflow: hidden;
    }
th, td {
    padding: 8px;
    text-align: center;
}
th {
    background-color: #f2f2f2;
}

</style>