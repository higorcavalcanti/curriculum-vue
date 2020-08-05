<template>
    <div class="section educational-background">
        <the-line-separator></the-line-separator>
        <div class="section-title">
            Formação acadêmica
        </div>
        <div class="section-content">
            <div v-for="formacao in curriculum.formacaoAcademica" :key="formacao.universidade">
                <div class="curso section-subtitle">
                    {{ formacao.curso }}
                    <data-entrada-saida :entrada="formacao.entrada" :saida="formacao.saida"></data-entrada-saida>
                </div>
                <div class="universidade">
                    {{ formacao.universidade }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Curriculum } from "@/Models/curriculum";
    import TheLineSeparator from "@/components/TheLineSeparator.vue";
    import DataEntradaSaida from "@/components/DataEntradaSaida.vue";
    @Component({
        components: {DataEntradaSaida, TheLineSeparator}
    })
    export default class TheFormacaoAcademica extends Vue {
        @Prop() private curriculum!: Curriculum;
    }
</script>

<style scoped lang="scss">
    @import "./src/assets/scss/variables";

    .curso {
        color: $primary-color;
        font-weight: bold;
    }

    .divisor,
    .universidade {
        color:  $secondary-color;
    }
</style>
