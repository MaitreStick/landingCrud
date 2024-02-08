<template>
    <div v-if="showAlert" class="alert">
        <span>Deleted succesfully</span>
    </div>
    <table class="table">
            <thead>
                <tr>
                    <th>Document</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Phone</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in entriesByTerm" :key="item">
                    <td>{{ item.document }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.date }}</td> 
                    <td>{{ item.phone }}</td>
                    <td class="text-center">
                        <button @click="goToEditView(item.id)" class="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded mx-2">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button @click="deleteEntry(item.id)" class="bg-red-500 hover:bg-red-600 text-white p-1 rounded mx-2">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
    </table>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    props: {
        entries: Array,
        term: String
    },
    data() {
        return {
                showAlert: false,
            };
    },
    methods: {
        async deleteEntry(id) {
            if (confirm("Sure you want to delete?")) {
                try {
                    await this.$store.dispatch('adminModule/deleteEntry', id);
                    this.showAlert = true;
                    setTimeout(() => {
                    this.showAlert = false;
                    }, 1500);
                } catch (error) {
                    console.error('error deleting', error);
                }
            } else {
                console.log("delete action cancelled");
            }
        },
        goToEditView(id) {
            this.$router.push({ name: 'editview', params: { id } });
        },
        downloadPdf(base64Data, fileName) {
          const pdfBlob = this.base64ToBlob(base64Data, 'application/pdf');
          
          const link = document.createElement('a');
          link.href = URL.createObjectURL(pdfBlob);
          link.download = fileName + '.pdf';

          document.body.appendChild(link);
          link.click();

          URL.revokeObjectURL(link.href);
          document.body.removeChild(link);
        },

        base64ToBlob(base64, mimeType) {
            const byteString = atob(base64.split(',')[1]);
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const int8Array = new Uint8Array(arrayBuffer);

            for (let i = 0; i < byteString.length; i++) {
                int8Array[i] = byteString.charCodeAt(i);
            }

            return new Blob([int8Array], { type: mimeType });
        },
    },
    computed: {
        ...mapGetters('adminModule', ['getEntriesByTerm']),
        entriesByTerm() {
            const lowerTerm = this.term.toLowerCase();
            return this.getEntriesByTerm.filter(item => {
                const nameMatch = item.name && item.name.toLowerCase().includes(lowerTerm);
                const documentMatch = item.document && item.document.toString().toLowerCase().includes(lowerTerm);
                return nameMatch || documentMatch;
            });
        }
    },
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

.fa-file-pdf {
        font-size: 20px;
        cursor: pointer;
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
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