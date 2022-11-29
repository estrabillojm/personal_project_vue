const mutations = {
    REGISTER_ROLE: (state, payload) => state.roles.unshift(payload),
    
    FETCH_ALL: (state, payload) => state.roles = payload
}

export default mutations