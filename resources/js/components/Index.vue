<script>
export default {

}
</script>
<template>
    <div class="container">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <RouterLink class="navbar-brand" :to="{name: 'people.index'}">People</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{name: 'people.create'}">Add</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <RouterView></RouterView>
    </div>
</template>