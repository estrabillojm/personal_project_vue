<template>
    <div class="user-container">
      <div class="user-box">
          <AddUsers
          @saveRoleEmit="saveForm"
          />
      </div>
      
    </div>
  </template>
  
  <script>
  import AddUsers from '@/components/users/AddUsers.vue';
  import { useStore } from 'vuex';
  import TableVue from '@/components/shared/Table.vue';
  import { computed, onMounted, ref } from '@vue/runtime-core';
  
  export default {
      components: { AddUsers, TableVue },
      setup(){
            const store = useStore()

            const saveForm = (payload) => {

            }


            onMounted(async () => {
               
            })





            return {
                
            }
      }
  
  }
  </script>