<template>
  <v-card
    class="mx-auto"
    elevation="2"
  >
  <v-card-title>{{ title}}</v-card-title>
    
      <div :id="nameContainer" class="chart"></div>

    <v-card-subtitle class="pb-0">
      {{subtitle}} 
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{text}}</div>

      <div></div>
    </v-card-text>
  </v-card>
</template>

<script>


  export default {
    name: 'Card',
    props: ['title', 'subtitle', 'text', 'nameContainer']
  }
</script>

<style>
.highcharts-figure, .highcharts-data-table table {
    min-width: 320px; 
    max-width: 800px;
    margin: 1em auto;
}
</style>