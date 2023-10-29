<script>
export default {
    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },
    computed: {
        person() {
            return this.$store.getters.person
        }
    }
}
</script>
<template>
    <div class="container pt-5">
        <RouterLink :to="{ name: 'people.index' }">Go to people list</RouterLink>
        <table class="table" v-if="person">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Values</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>id</th>
                    <td>{{ person.id }}</td>
                </tr>
                <tr>
                    <th>name</th>
                    <td>{{ person.name }}</td>
                </tr>
                <tr>
                    <th>age</th>
                    <td>{{ person.age }}</td>
                </tr>
                <tr>
                    <th>job</th>
                    <td>{{ person.job }}</td>
                </tr>
                <tr>
                    <td>
                        <RouterLink class="btn btn-outline-primary mx-2"
                            :to="{ name: 'people.edit', params: { id: person.id } }">
                            Edit
                        </RouterLink>
                        <button class="btn btn-outline-danger mx-2"
                            @click.prevent="$store.dispatch('destroy', person.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>