<template>
    <div class="entry-list-container">
        <div>
            <button class="btn btn-outline-info mx-2">
                Add
            </button>
        </div>
        <div class="px-2 pt-2">
            <input 
                type="text"
                class="form-control"
                placeholder="Buscar"
            />
        </div>

        <div class="entry-scrollarea">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Document</th>
                        <th>Date</th>
                        <th>Phone Number</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in 100" :key="item">
                        <td>{{ item.id }}</td> 
                        <td>{{ item.name }}</td>
                        <td>{{ item.document }}</td>
                        <td>{{ item.date }}</td> 
                        <td>{{ item.phone_number }}</td>
                        <td class="text-center">
                            <button @click="editItem(item.id)" class="btn btn-outline-success mx-2" >Edit</button> 
                            <button @click="deleteItem(item.id)" class="btn btn-outline-danger mx-2" >Delete</button> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="scss" scoped>

input{
    margin-bottom: 1em;
}
.entry-list-container{
    height: 40vh;
    width: 80vw;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.entry-scrollarea{
    height: calc( 90vh - 110px );
    overflow: scroll;
}

table {
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