<template>
    <div class="contact">
        <a :href="'https://wa.me/55' + contact.phone" target="_blank" v-if="contact.type === CONTATO_TIPOS.whatsapp">
            {{ contact.phone | telefone }}
            <img src="../assets/svg/whatsapp.svg">
        </a>

        <a :href="'mailto' + contact.email" target="_blank" v-if="contact.type === CONTATO_TIPOS.email">
            {{ contact.email }}
            <img src="../assets/svg/email.svg">
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
        filters: {
            telefone: function(telefone: string): string {
                const format = (ddd: number | string, phone1: number | string, phone2: number | string) => {
                    return '(' + ddd + ') ' + phone1 + '-' + phone2;
                }

                const value = telefone.toString();
                if ( value.length === 8 ) {
                    return value.replace(/(\d{4})(\d{4})/, (_, a1, a2) => format('', a1, a2));
                }
                if ( value.length === 9 ) {
                    return value.replace(/(\d{5})(\d{4})/, (_, a1, a2) => format('', a1, a2));
                }
                if ( value.length === 10 ) {
                    return value.replace(/(\d{2})(\d{4})(\d{4})/, (_, a1, a2, a3) => format(a1, a2, a3));
                }
                if ( value.length === 11 ) {
                    return value.replace(/(\d{2})(\d{5})(\d{4})/, (_, a1, a2, a3) => format(a1, a2, a3));
                }
                return value + 'a';
            }
        }
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
