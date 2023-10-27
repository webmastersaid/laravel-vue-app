<script>
export default {
    props: [
        'person',
    ],
    methods: {
        updatePerson(id) {
            axios.patch(`/api/people/${id}`, { name: this.person.name, age: this.person.age, job: this.person.job })
                .then(res => {
                this.$parent.editPersonId = null;
                this.$parent.getPeople();
            });
        },
    }
}
</script>
<template>
    <tr v-show="this.$parent.editPersonId === person.id">
        <td>{{ person.id }}</td>
        <td><input type="text" v-model="person.name"></td>
        <td><input type="text" v-model="person.age"></td>
        <td><input type="text" v-model="person.job"></td>
        <td>
            <button type="button" class="btn btn-primary" @click.prevent="updatePerson(person.id)">Update</button>
            <button type="button" class="btn btn-secondary mx-2" @click.prevent="this.$parent.editPersonId = null">Cancel</button>
        </td>
    </tr>
</template>