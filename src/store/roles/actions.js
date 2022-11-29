import axios from "axios"

const actions = {
    registerRole: async ({commit}, payload) => {
        await axios.post('/roles/save', payload)
        .then(res => {
            console.log(res.data)
            commit('REGISTER_ROLE', res.data )
        })
    },
    fetchAllRoles: async ({ commit}) => {
        await axios.get('/roles/fetch-roles')
        .then(res => {
            console.log(res.data)
            commit('FETCH_ALL', res.data)
        })
    }
}

export default actions