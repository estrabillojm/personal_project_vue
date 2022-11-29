import axios from "axios"

const actions = {
    registerAccess: async ({ commit }, payload) => {
        await axios.post('access/save', payload).then(res => {
            
            commit('REGISTER_ACCESS', res.data)
        })
    },
    fetchAllAccess: async ({ commit }) => {
        await axios.get('access/access').then(res=> {
            
            commit('FETCH_ALL_ACCESS', res.data)
        })
    }
}

export default actions