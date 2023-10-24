<script>
export default {
    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null
        }
    },
    mounted() {
        this.getPeople()
    },
    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(res => {
                    this.people = res.data
                })
        },
        setEditPersonId(data) {
            this.editPersonId = data.id
            this.name = data.name
            this.age = data.age
            this.job = data.job
        },
        updatePerson(id) {
            axios.patch(`/api/people/${id}`, { name: this.name, age: this.age, job: this.job })
                .then(res => {
                    this.editPersonId = null
                    this.getPeople()
                })
        },
        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    this.editPersonId = null
                    this.getPeople()
                })
        }
    }
}
</script>
<template>
    <div class="container">
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
                <template v-for="person in people">
                    <tr v-show="editPersonId !== person.id">
                        <td>{{ person.id }}</td>
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                        <td>
                            <button type="button" class="btn btn-success mx-2"
                                @click.prevent="setEditPersonId(person)">Edit</button>
                            <button type="button" class="btn btn-danger"
                                @click.prevent="deletePerson(person.id)">Delete</button>
                        </td>
                    </tr>
                    <tr v-show="editPersonId === person.id">
                        <td>{{ person.id }}</td>
                        <td><input type="text" v-model="name"></td>
                        <td><input type="text" v-model="age"></td>
                        <td><input type="text" v-model="job"></td>
                        <td>
                            <button type="button" class="btn btn-primary"
                                @click.prevent="updatePerson(person.id)">Update</button>
                            <button type="button" class="btn btn-secondary mx-2"
                                @click.prevent="setEditPersonId({})">Cancel</button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>