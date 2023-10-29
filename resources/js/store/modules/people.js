import router from "../../router"

const state = {
    people: null,
    person: {
        name: null,
        age: null,
        job: null,
    },
}

const getters = {
    people: state => state.people,
    person: state => state.person,
    isDisabled: state => {
        return state.person.name && state.person.age
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    },
}

const actions = {
    getPerson({ commit }, id) {
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            })
    },
    getPeople({ commit }) {
        axios.get('/api/people')
            .then(res => {
                commit('setPeople', res.data.data)
            })
    },
    destroy({ dispatch }, id) {
        axios.delete(`/api/people/${id}`)
            .then(res => {
                dispatch('getPeople')
                router.push({ name: 'people.index' })
            })
    },
    update({ }, data) {
        axios.patch(`/api/people/${data.id}`, data)
            .then(res => {
                router.push({ name: 'people.show', params: { id: data.id } })
            })
    },
    store({ }, data) {
        axios.post('/api/people', data)
            .then(res => {
                router.push({ name: 'people.index' })
            })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}