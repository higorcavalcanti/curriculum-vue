<template>
    <hr/>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class TheLineSeparator extends Vue {
    }
</script>

<style scoped lang="scss">
    @import "./src/assets/scss/variables";

    hr {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }
</style>
