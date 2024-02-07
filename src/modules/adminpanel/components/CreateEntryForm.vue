<template>
    <div class="flex flex-col justify-center mt-20">
          <div v-if="showAlert" class="alert">
            <span>Added succesfully </span>
          </div>
          <div class="create-entry-form bg-gray-100 shadow-xl rounded-lg p-6">
          <h2 class="text-2xl font-bold text-center text-gray-700 mb-6" >Add New</h2>
          <div class="mb-3">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input v-model="newEntry.name" id="name" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Nombre">
          </div>
          <div class="mb-3">
            <label for="document" class="block text-sm font-medium text-gray-700">Document</label>
            <input v-model="newEntry.document" id="document" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Documento">
          </div>
          <div class="mb-3">
            <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
            <input v-model="newEntry.date" id="date" type="date" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Fecha">
          </div>
          <div class="mb-3">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
            <input v-model="newEntry.phone" id="phone" type="tel" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Teléfono">
          </div>

          <div class="mb-3 relative">
            <label for="course" class="form-label">Curso</label>
            <input 
              type="text" 
              id="filtroCurso" 
              v-model="filtroCurso" 
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Escriba para filtrar cursos..." 
              @input="filtrarCursos" 
              @focus="mostrarOpciones = true"
            >
            <select 
              v-model="newEntry.course" 
              id="course" 
              class="form-control absolute w-full" 
              size="5" 
              v-show="mostrarOpciones"
              @change="seleccionarCurso"
              @blur="cerrarSelect"
            >
              <option v-for="curso in cursosFiltrados" :key="curso.value" :value="curso.text">
                {{ curso.text }}
              </option>
            </select>
          </div>

          <div v-if="newEntry.subtitulo" class="mb-3">
            <label for="subtitulo" class="form-label">Subtitulo</label>
            <input type="text" v-model="newEntry.subtitulo" id="subtitulo" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" readonly>
          </div>

          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="hasValidity" v-model="newEntry.hasValidity">
            <label class="form-check-label" for="hasValidity">¿El certificado tiene vigencia?</label>
          </div>

          <div class="mb-3" v-if="newEntry.hasValidity">
            <label for="validity" class="block text-sm font-medium text-gray-700">Años de Vigencia</label>
            <input v-model="newEntry.validity" id="validity" type="number" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Años de vigencia">
          </div>
         
          <div class="button-container flex justify-between mt-6">
              <button @click="goBack" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Volver
              </button>
              <button @click="addNewEntry" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Agregar
              </button>
          </div>
        </div>
    </div>
  </template>
  
  <script>

import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newEntry: {
          name: '',
          document: '',
          date: '',
          phone: '',
        },
        showAlert: false,
      };
    },
    methods: {
      ...mapActions('adminModule', ['createEntry']),
  
      async addNewEntry() {
        try {
            const newId = await this.createEntry(this.newEntry);
            console.log('New Entry created with ID:', newId);
            this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
            }, 1500);
            this.newEntry = {
              name: '',
              document: '',
              date: '',
              phone: '',
            };
        } catch (error) {
            console.error('Error creating entry: ', error);
        }
    },
      goBack() {
            this.$router.push({ name: 'listview' }) 
      }
    },
    watch: {
        
        'newEntry.course'(newVal) {
          if (newVal) {
            this.establecerSubtitulo();
          }
        },
    },
    computed: {
      cursosFiltrados() {
        if (!this.filtroCurso) {
          return this.cursos;
        }
        return this.cursos.filter(curso => curso.text.toLowerCase().includes(this.filtroCurso.toLowerCase()));
      }
    },
  };
  </script>
  
<style lang="scss" scoped>

  .createContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
  }
  .create-entry-form {
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

  .select-abrir {
    width: 100%;
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
  