import moment from "moment"

const getters = {
    mappedAccess: (state) => {
        return state.access.map(a => {
            return {
                ...a,
                created_at: moment(a.created_at).format('yyyy-MM-DD')
            }
        })
    }
}

export default getters