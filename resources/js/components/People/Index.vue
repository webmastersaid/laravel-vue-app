<script>
export default {
    data() {
        return {
            people: null
        }
    },
    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(res => {
                    this.people = res.data
                })
        },
        destroy(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    this.getPeople()
                })
        }
    },
    mounted() {
        this.getPeople()
    }
}
</script>
<template>
    <div class="container pt-5">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Job</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in people">
                    <td>{{ person.id }}</td>
                    <td>
                        <RouterLink :to="{ name: 'people.show', params: { id: person.id } }">
                            {{ person.name }}
                        </RouterLink>
                    </td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <RouterLink class="mx-2" :to="{ name: 'people.edit', params: { id: person.id } }">
                            Edit
                        </RouterLink>
                        <button class="btn btn-outline-danger mx-2" @click.prevent="destroy(person.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>