import { createStore } from 'vuex'
import users from './users/users'
import access from './access/access'
import roles from './roles/roles'


export default createStore({

  modules: {
    users, access, roles
  }
})
