<template>
    <div class="section">
        <the-line-separator></the-line-separator>
        <div class="section-title">
            Atividades
        </div>
        <div class="section-content">
            <ul>
                <li v-for="(atividade, indexAtividade) in curriculum.atividades" :key="atividade.nome">
                    {{ atividade.nome }}<span v-if="indexAtividade !== curriculum.atividades.length">;</span>
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
    export default class TheAtividades extends Vue {
        @Prop() private curriculum!: Curriculum;
    }
</script>

<style scoped lang="scss">
</style>
