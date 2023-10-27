<script>
export default {
    props: [
        'person',
    ],
    methods: {
        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                this.$parent.getPeople();
            });
        },
    }
}
</script>
<template>
    <tr v-show="this.$parent.editPersonId !== person.id">
        <td>{{ person.id }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td>
            <button type="button" class="btn btn-success mx-2" @click.prevent="this.$parent.setEditPersonId(person)">Edit</button>
            <button type="button" class="btn btn-danger" @click.prevent="deletePerson(person.id)">Delete</button>
        </td>
    </tr>
</template>