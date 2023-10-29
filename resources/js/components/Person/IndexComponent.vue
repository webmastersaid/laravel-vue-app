<script>
import CreateComponent from './CreateComponent.vue';
import EditComponent from './EditComponent.vue';
import ShowComponent from './ShowComponent.vue';

export default {
    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null,
            showPersonId: null,
        };
    },
    mounted() {
        this.getPeople();
    },
    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(res => {
                this.people = res.data.data;
            });
        },
        setEditPersonId(data) {
            this.editPersonId = data.id;
            this.name = data.name;
            this.age = data.age;
            this.job = data.job;
        },
    },
    components: { CreateComponent, EditComponent, ShowComponent }
}
</script>
<template>
    <div class="container">
        <CreateComponent></CreateComponent>
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
                    <ShowComponent :person="person"></ShowComponent>
                    <EditComponent :person="person"></EditComponent>
                </template>
            </tbody>
        </table>
    </div>
</template>