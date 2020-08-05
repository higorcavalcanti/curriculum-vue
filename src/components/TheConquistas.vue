<template>
    <div class="section educational-background">
        <the-line-separator></the-line-separator>
        <div class="section-title">
            Conquistas
        </div>
        <div class="section-content">
            <ul>
                <li v-for="(conquista, indexConquista) in curriculum.conquistas" :key="conquista.nome">
                    {{conquista.nome}}<span v-if="indexConquista !== curriculum.conquistas.length">;</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Curriculum } from "@/Models/curriculum";
    import TheLineSeparator from "@/components/TheLineSeparator.vue";
    @Component({
        components: {TheLineSeparator}
    })
    export default class TheFormacaoAcademica extends Vue {
        @Prop() private curriculum!: Curriculum;
    }
</script>

<style scoped lang="scss">
    @import "./src/assets/scss/variables";
</style>
