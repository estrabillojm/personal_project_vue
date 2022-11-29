import moment from 'moment'
const getters = {
    mappedRoles(state) {
        return state.roles.map(r => {
            
            return {
                ...r,
                created_at: moment(r.created_at).format('yyyy-MM-DD')
            }
        })
    }
}

export default getters