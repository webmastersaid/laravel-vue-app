import { createStore } from "vuex"
import personModule from './modules/person'
import peopleModule from './modules/people'

const store = createStore({
    modules: {
        person: personModule,
        people: peopleModule,
    }
})

export default store