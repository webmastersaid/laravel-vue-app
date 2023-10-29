<script>
import { mapGetters } from 'vuex';

export default {
    mounted() {
        this.$store.commit('setPerson', {})
    },
    computed: {
        ...mapGetters({
            isDisabled: 'isDisabled',
            person: 'person',
        })
    }
}
</script>
<template>
    <div class="container pt-5">
        <RouterLink :to="{ name: 'people.index' }">Go to people list</RouterLink>
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
            <button type="button" class="btn btn-primary" @click.prevent="$store.dispatch('store', person)" :disabled="!isDisabled">Add</button>
        </div>
    </div>
</template>