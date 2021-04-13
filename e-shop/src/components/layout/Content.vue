<template>
    <div class="content-container">
        <Store />
    </div>
</template>

<script>
import Store from "../../views/store/Store.vue";

export default {
    components: {
        Store,
    }
}
</script>

<style scoped>
.content-container {
    height: calc(100vh - 68px);
}
</style>>
