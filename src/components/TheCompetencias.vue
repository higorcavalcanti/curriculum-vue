<template>
    <div class="section educational-background">
        <div class="section-title">
            Competências
        </div>
        <ul class="section-content competencias">
            <li class="competencia" v-for="competencia in curriculum.competencias" :key="competencia.nome">
                {{ competencia.nome }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Curriculum } from "@/Models/curriculum";

    @Component
    export default class TheCompetencias extends Vue {
        @Prop() private curriculum!: Curriculum;
    }
</script>

<style scoped lang="scss">
    @import "./src/assets/scss/variables";

    .competencias {
        display: flex;
        flex-wrap: wrap;

        .competencia {
            flex-grow: 1;
            flex-basis: 33%;
            list-style-type: none;

            &::before {
                color: $primary-color;
            }
        }
    }
</style>
