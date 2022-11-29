<template>
    <div class="container">
      <div class="role-box">
          <AddAccess
          @saveRoleEmit="saveForm"
          />
      </div>
      <div class="role-box">
            {{ access }}
          <TableVue
              :headers="['ID','Description',  'Date Created' ,'Action']"
              :dataHeader="['id','access_description', 'created_at']"
              :dataTable="access"
              btnOne="Edit"
              @btnOneFunction="handleEditFunction"
              btnTwo="Archive"
              @btnTwoFunction="handleEditFunction"
          />

          <!-- -->
      </div>
    </div>
  </template>
  
  <script>
  import AddAccess from '@/components/access/AddAccess.vue';
  import { useStore } from 'vuex';
  import TableVue from '@/components/shared/Table.vue';
  import { computed, onMounted, ref } from '@vue/runtime-core';
  
  export default {
      components: { AddAccess, TableVue },
      setup(){
            const store = useStore()

            const access = computed(() =>  store.getters['access/mappedAccess'])
            const fetchAccess = () => store.dispatch('access/fetchAllAccess')

            const handleEditFunction = () => {
                console.log('Edit Function')
            }

            const isLoading = ref(false)
            const saveForm = async (payload) => {
                try {
                    isLoading.value = true
                    await store.dispatch('access/registerAccess', payload)
                    isLoading.value = false
                } catch (error) {
                    alert(error)
                }
            }


            onMounted(async () => {
                await fetchAccess()
                console.log(access.value)
            })





            return {
                handleEditFunction, access, saveForm
            }
      }
  
  }
  </script>
     
  <style scoped>
      
      .role-box{
          
      }
  </style>