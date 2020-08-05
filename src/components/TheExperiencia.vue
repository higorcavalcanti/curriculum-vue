<template>
    <div class="section">
        <the-line-separator></the-line-separator>
        <div class="section-title">
            Experiência
        </div>
        <div class="section-content">
            <div class="empresa" v-for="(experiencia, indexEmpresa) in curriculum.experiencia" :key="experiencia.empresa">
                <the-line-separator v-if="indexEmpresa != 0"></the-line-separator>
                <div class="section-subtitle empresa-nome">
                    {{ experiencia.empresa }}
                    <data-entrada-saida :entrada="experiencia.entrada" :saida="experiencia.saida"></data-entrada-saida>
                </div>

                <div class="cargos">
                    <div class="cargo" v-for="(cargo, indexCargo) in experiencia.cargos" :key="cargo.nome">
                        <the-line-separator v-if="indexCargo != 0"></the-line-separator>
                        <div class="section-subtitle cargo-title">
                            {{ cargo.nome }}
                            <data-entrada-saida :entrada="cargo.entrada" :saida="cargo.saida"></data-entrada-saida>
                        </div>
                        <div class="atribuicao" v-if="cargo.atribuicao">
                            {{ cargo.atribuicao }}
                        </div>
                        <ul class="atribuicoes" v-if="cargo.atribuicoes && cargo.atribuicoes.length">
                            <li v-for="(atribuicao, indexAtribuicao) in cargo.atribuicoes" :key="atribuicao">
                                {{ atribuicao }}<span v-if="indexAtribuicao !== cargo.atribuicoes.length">;</span>
                            </li>
                        </ul>
                    </div>
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
    export default class TheExperiencia extends Vue {
        @Prop() private curriculum!: Curriculum;
    }
</script>

<style scoped lang="scss">
    @import "./src/assets/scss/variables";

    $title-size: 1.75rem;
    $title-weight: bold;

    $subtitle-size: 1.5rem;
    $subtitle-weight: bold;

    .section {
        break-inside: auto;
    }

    .empresa {
        break-inside: avoid;
        break-before: auto;
        break-after: auto;

        .empresa-nome {
            color: $primary-color;
        }

        .cargo {
            .cargo-title {
                line-height: 1em;
                margin-bottom: 0.5rem;
            }

            .atribuicao,
            .atribuicoes {
                font-size: 1rem;
                font-weight: normal;
            }
        }
    }
</style>
