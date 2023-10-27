<script>
export default {
    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },
    methods: {
        addPerson() {
            axios.post('/api/people/', {name: this.name, age: this.age, job: this.job})
            .then(res => {
                this.name = null
                this.age = null
                this.job = null
                this.$parent.getPeople()
            })
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="name" id="name" placeholder="John">
        </div>
        <div class="mb-3">
            <label for="age" class="form-label">Age</label>
            <input type="number" class="form-control" v-model="age" id="age" placeholder="20">
        </div>
        <div class="mb-3">
            <label for="job" class="form-label">Job</label>
            <input type="text" class="form-control" v-model="job" id="job" placeholder="Developer">
        </div>
        <div class="mb-3">
            <button class="btn btn-primary" @click.prevent="addPerson">Add</button>
        </div>
    </div>
</template>