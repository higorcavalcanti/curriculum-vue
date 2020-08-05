<template>
    <div class="curriculum">
        <the-curriculum-titulo :curriculum="curriculum"></the-curriculum-titulo>
        <the-apresentacao :curriculum="curriculum"></the-apresentacao>
        <the-competencias :curriculum="curriculum"></the-competencias>
        <the-formacao-academica :curriculum="curriculum"></the-formacao-academica>
        <the-experiencia :curriculum="curriculum"></the-experiencia>
        <the-atividades :curriculum="curriculum"></the-atividades>
        <the-conquistas :curriculum="curriculum"></the-conquistas>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Curriculum, getCurriculum } from "@/Models/curriculum";
    import TheCurriculumTitulo from "@/components/TheCurriculumTitulo.vue";
    import TheApresentacao from "@/components/TheApresentacao.vue";
    import TheFormacaoAcademica from "@/components/TheFormacaoAcademica.vue";
    import TheExperiencia from "@/components/TheExperiencia.vue";
    import TheCompetencias from "@/components/TheCompetencias.vue";
    import TheConquistas from "@/components/TheConquistas.vue";
    import TheAtividades from "@/components/TheAtividades.vue";

    @Component({
        components: {
            TheAtividades,
            TheConquistas,
            TheCompetencias,
            TheExperiencia,
            TheFormacaoAcademica,
            TheApresentacao,
            TheCurriculumTitulo,
        }
    })
    export default class TheCurriculum extends Vue {
        curriculum: Curriculum = getCurriculum();
    }
</script>

<style lang="scss">
    * {
        text-align: left;
    }

    .section {
        break-inside: avoid;
        break-before: auto;
        break-after: auto;

        .section-title {
            font-size: 2rem;
            /*margin-top: 1rem;*/
        }

        .section-subtitle {
            font-size: 1.3rem;
            font-weight: bold;
        }

        .section-content {

        }
    }

    ul {
        li {
            list-style-type: none;

            &::before {
                content: "\2022";
                font-weight: bold;
                display: inline-block;
                width: 1em;
                margin-right: -0.5em;
                font-size: 2em;
                line-height: 1rem;
                vertical-align: middle;
            }
        }
    }
</style>
