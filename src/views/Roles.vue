<template>
  <div class="container">
    <div class="role-box">
        <AddRoleVue
        @saveRoleEmit="saveForm"
        />
    </div>
    <div class="role-box">
        <TableVue
            :headers="['ID', 'Role', 'Action']"
            :dataHeader="['id','roleCode']"
            :dataTable="roles"
            btnOne="Edit"
            @btnOneFunction="handleEditFunction"
            btnTwo="Archive"
            @btnTwoFunction="handleEditFunction"
        />
    </div>
  </div>
</template>

<script>
import AddRoleVue from '@/components/roles/AddRole.vue';
import { useStore } from 'vuex';
import TableVue from '@/components/shared/Table.vue';
import { computed, onMounted, ref } from '@vue/runtime-core';

export default {
    components: { AddRoleVue, TableVue },
    setup(){
        const store = useStore()
        const saveForm = (payload) => store.dispatch('roles/registerRole', payload)
        const roles = computed(() => store.getters["roles/mappedRoles"])
        const isLoading = ref(false)
        const fetchAllRoles = async () => {
            isLoading.value = false
            try {
                await store.dispatch('roles/fetchAllRoles')
                isLoading.value = true
            } catch (error) {
                alert(error)
            }
            
        }
        const handleEditFunction = () => {
            console.log("fetch_Single_Value")
        }
        onMounted(() => {
            fetchAllRoles()
        })
        return {
            saveForm, roles, handleEditFunction, isLoading
        }
    }

}
</script>
   
<style scoped>
    
    .role-box{
        
    }
</style>