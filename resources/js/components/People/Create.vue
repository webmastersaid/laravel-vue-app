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
        store() {
            axios.post('/api/people', { name: this.name, age: this.age, job: this.job })
                .then(res => {
                    this.$router.push({ name: 'people.index' })
                })
        }
    }

}
</script>
<template>
    <div class="container pt-5">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="name" id="name" placeholder="Bob">
        </div>
        <div class="mb-3">
            <label for="age" class="form-label">Age</label>
            <input type="text" class="form-control" v-model="age" id="age" placeholder="21">
        </div>
        <div class="mb-3">
            <label for="job" class="form-label">Job</label>
            <input type="text" class="form-control" v-model="job" id="job" placeholder="Web developer">
        </div>
        <div class="mb-3">
            <button type="button" class="btn btn-primary" @click.prevent="store">Add</button>
        </div>
    </div>
</template>