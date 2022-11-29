const mutations = {
    REGISTER_ACCESS: (state, payload) => {
        state.access.unshift(payload)
    },
    FETCH_ALL_ACCESS: (state, payload) => {
        console.log(payload)
        state.access = payload
    }
}

export default mutations