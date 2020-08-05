<template>
  <div id="app">
    <the-curriculum></the-curriculum>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import TheCurriculum from './components/TheCurriculum.vue';

  @Component({
  components: {
    TheCurriculum
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 210mm;
  margin: auto;
}

@media print {
  @page
  {
    size: 210mm 297mm;
    margin: 2cm 0 0 0;
    /*margin: 0;*/
    /*padding: 2cm;*/
  }

  @page :first {
    margin: 0;
  }

  #app {
    margin: 0;
    padding: 2cm;
    width: 100%;
  }
}
</style>
