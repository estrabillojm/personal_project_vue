<template>
  <div>

    <form @submit.prevent="handleSubmit()">
        <div class="form-group">
            <label for="">Access Description</label>
            <input type="text" v-model="state.access_description">
        </div>

        <div class="form-group">
            <label for="">Access Summary</label>
            <textarea v-model="state.summary"></textarea>
        </div>

        
        <div class="btn-right">
            <button type="button" class="back-btn">Back to Main</button>
            <button type="submit" class="save-btn">Save Role</button>
        </div>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref, toRefs } from '@vue/runtime-core'
export default {
  
    setup(props, { emit }){
        const state = ref({
            access_description: '', 
            summary : ''
        })

        

        const handleSubmit = () => {
            emit('saveRoleEmit', state.value)
        }

        return {
            state, handleSubmit
        }

    }
}
</script>

<style>

.save-btn{
    @apply ml-2;
}
</style>