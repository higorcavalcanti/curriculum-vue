<template>
    <span class="data" v-if="entrada || saida">
        <span>(</span>
        {{ entrada }}
        <span class="separator" v-if="entrada && saida">&nbsp; ~ &nbsp;</span>
        {{ saida }}
        <span>)</span>
    </span>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component
    export default class DataEntradaSaida extends Vue {
        @Prop() private entrada!: string;
        @Prop() private saida!: string;
    }
</script>

<style scoped lang="scss">
    .data {
        font-size: 0.9em;
        font-weight: normal;
        display: inline-flex;

        .separator {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    }
</style>
