<template>
    <div>
  
      <form @submit.prevent="handleSubmit()">
          

        <div class="btn-right">
            <button type="button" class="back-btn">Back to Main</button>
            <button type="submit" class="save-btn">Save User</button>
        </div>
        <hr class="py-2">

        <div class="cst-col-3">
            <div class="form-group">
                <label for="">Last Name*</label>
                <input type="text" v-model="state.access_description">
            </div>
            <div class="form-group">
                <label for="">First Name*</label>
                <input type="text" v-model="state.access_description">
            </div>
            <div class="form-group">
                <label for="">Middle Name</label>
                <input type="text" v-model="state.access_description">
            </div>
        </div>

        <div class="cst-col-3">
            <div class="form-group">
                <label for="">Role*</label>
                <select v-model="selectedRole" @change="changeRole">
                    <option value="">Please Select Role</option>
                    <option  v-for="r in roles" :key="r.id" :value="r.id">{{ r.roleDescription }}</option>
                </select>
            </div>

            <div class="form-group">
                <label for="">Username*</label>
                <input type="text" v-model="state.access_description">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" v-model="state.access_description">
            </div>
        </div>


        <div class="cst-col-3">
            <div class="form-group">
                <label for="">Province*</label>
                <select>
                    <option value="">Please Select Province</option>
                </select>
            </div>

            <div class="form-group">
                <label for="">Municipality / City*</label>
                <select>
                    <option value="">Please Select Municipality</option>
                </select>
            </div>

            <div class="form-group">
                <label for="">Barangay*</label>
                <select>
                    <option value="">Please Select Barangay</option>
                </select>
            </div>
        </div>


        <div class="cst-col-3">
            <div class="form-group">
                <label for="">Region</label>
                <input type="text" disabled>
            </div>
            <div class="form-group">
                <label for="">Country</label>
                <input type="text" disabled>
            </div>
            <div class="form-group">
                <label for="">Zip Code</label>
                <input type="text" disabled>
            </div>
        </div>

        <div class="cst-col-3">
            <div class="form-group">
                <label for="">Citizenship</label>
                <input type="text" disabled>
            </div>
        </div>

        <div class="cst-header-sub">
            <h3>Access</h3>
        </div>

        <div class="cst-col-4">
            <div v-for="a in access" :key="a.id">
                <input type="checkbox" :value="a.id" v-model="selectedAccess">
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
          const state = ref({
              access_description: '', 
              summary : ''
          })
  
          const handleSubmit = () => {
              emit('saveRoleEmit', state.value)
          }

          const fetchAllRoles = () => store.dispatch('roles/fetchAllRoles')
          const roles = computed(() => store.getters['roles/mappedRoles'])

          const fetchAllAccess = () => store.dispatch('access/fetchAllAccess')
          const access = computed(() => store.getters['access/mappedAccess'])

          const selectedAccess = ref([])
          const selectedRole = ref(null)

          const changeRole =() => {
            roles.value.forEach(role => role.id == selectedRole.value ? selectedAccess.value = role.default_access : false )

          }

          onMounted(() => {
            fetchAllRoles()
            fetchAllAccess()
            console.log(roles.value)
          })
          return {
              state, handleSubmit, roles, access, selectedAccess,
              selectedRole, changeRole
          }
  
      }
  }
  </script>
  
  <style>
  
  .save-btn{
      @apply ml-2;
  }
  </style>