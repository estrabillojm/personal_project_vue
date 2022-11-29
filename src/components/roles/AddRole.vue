<template>
  <div>

    <form @submit.prevent="handleSubmit()">
        <div class="btn-right">
            <button type="button" class="back-btn">Back to Main</button>
            <button type="submit" class="save-btn">Save Role</button>
        </div>
        <div class="form-group">
            <label for="">Role Code</label>
            <input type="text" v-model="roleState.roleDescription">
        </div>



        <div class="form-group">
            <label for="">Role Code</label>
            <textarea v-model="roleState.roleCode"></textarea>
        </div>

        

        
        <div class="cst-header-sub">
            <h3>Default Access</h3>
        </div>


        <div class="cst-col-4">
            <div v-for="a in access" :key="a.id">
                <input type="checkbox" :value="a.id" v-model="roleState.default_access">
                <label for="">{{ a.access_description }}</label>
                
            </div>
        </div>


        
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref, toRefs } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  
    setup(props, { emit }){
        const store = useStore()
        const roleState = ref({
            roleCode: '', 
            roleDescription: '',
            default_access: []
        })

        const handleSubmit = () => {
            emit('saveRoleEmit', roleState.value)
        }
        const fetchAllAccess = () => store.dispatch('access/fetchAllAccess')
        const access = computed(() => store.getters['access/mappedAccess'])

        onMounted(() => fetchAllAccess())
        return {
            roleState, handleSubmit, access
        }

    }
}
</script>

<style>

.save-btn{
    @apply ml-2;
}
</style>