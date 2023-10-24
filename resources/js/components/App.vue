<script>
import CreateComponent from './Person/CreateComponent.vue';
import IndexComponent from './Person/IndexComponent.vue';

export default {
    components: { CreateComponent, IndexComponent }
}
</script>

<template>
    <div>
        <CreateComponent></CreateComponent>
        <IndexComponent></IndexComponent>
    </div>
</template>