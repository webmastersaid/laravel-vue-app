<script>

export default {
    data() {
        return {
            person: null,
        }
    },
    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`)
                .then(res => {
                    this.person = res.data.data
                })
        },
        update() {
            axios.patch(`/api/people/${this.$route.params.id}`, { name: this.person.name, age: this.person.age, job: this.person.job })
                .then(res => {
                    this.$router.push({ name: 'people.show', params: { id: this.$route.params.id } })
                })
        }
    },
    mounted() {
        this.getPerson()
    }
}
</script>
<template>
    <div class="container pt-5">
        <RouterLink :to="{ name: 'people.index' }">Go to people list</RouterLink>
        <div v-if="person">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" v-model="person.name" id="name" placeholder="Bob">
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input type="text" class="form-control" v-model="person.age" id="age" placeholder="21">
            </div>
            <div class="mb-3">
                <label for="job" class="form-label">Job</label>
                <input type="text" class="form-control" v-model="person.job" id="job" placeholder="Web developer">
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-outline-primary" @click.prevent="update">Update</button>
                <RouterLink class="btn btn-outline-secondary mx-2" :to="{ name: 'people.index' }">Cancel</RouterLink>
            </div>
        </div>
    </div>
</template>