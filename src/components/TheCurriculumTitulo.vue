<template>
    <div class="title">
        <div class="d-flex justify-content-between">
            <h1 class="name">
                {{ curriculum.nome }}
            </h1>
            <div class="contacts">
                <titulo-contato :contact="contact" v-for="contact in curriculum.contatos" :key="contact.message"></titulo-contato>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Curriculum } from "@/Models/curriculum";
    import TituloContato from "@/components/TituloContato.vue";

    @Component({
        components: { TituloContato }
    })
    export default class TheCurriculumTitulo extends Vue {
        @Prop() private curriculum!: Curriculum;
    }
</script>

<style scoped lang="scss">
    .name {
        margin-bottom: 0;
    }
    .contacts {
        text-align: right;
    }
</style>
