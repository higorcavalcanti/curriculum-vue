<template>
    <div class="contact">
        <a :href="'https://wa.me/55' + contact.phone" target="_blank" v-if="contact.type === CONTATO_TIPOS.whatsapp">
            {{ contact.phone }}
            <img src="../assets/svg/whatsapp.svg">
        </a>

        <a :href="'https://linkedin.com/in/' + contact.linkedin" target="_blank" v-if="contact.type === CONTATO_TIPOS.linkedin">
            linkedin.com/in/{{ contact.linkedin }}
            <img src="../assets/svg/linkedin.svg">
        </a>

        <a :href="'https://github.com/' + contact.github" target="_blank" v-if="contact.type === CONTATO_TIPOS.github">
            github.com/{{ contact.github }}
            <img src="../assets/svg/github.svg">
        </a>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Contato, CONTATO_TIPOS } from "@/Models/contato";

    @Component({
        // filters: {
        //     tele
        // }
    })
    export default class TituloContato extends Vue {
        @Prop() private contact!: Contato;

        CONTATO_TIPOS = CONTATO_TIPOS;
    }
</script>

<style scoped lang="scss">
    .contact {
        text-align: right;

        img {
            width: 15px;
            padding-bottom: 5px;
        }
    }
</style>
