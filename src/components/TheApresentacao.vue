<template>
    <div class="cover-letter">
        <the-line-separator></the-line-separator>
        {{ curriculum.apresentacao }}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Curriculum } from "@/Models/curriculum";
    import TheLineSeparator from "@/components/TheLineSeparator.vue";
    @Component({
        components: {TheLineSeparator}
    })
    export default class TheApresentacao extends Vue {
        @Prop() private curriculum!: Curriculum;
    }
</script>

<style scoped lang="scss">
    .cover-letter {
        margin: 0 0 2em 0;
        text-align: justify;
    }
</style>
