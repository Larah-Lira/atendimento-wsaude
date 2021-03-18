<template>
  <v-container>
    <v-row class="d-flex justify-center">
        <v-col cols="8">
            <Card />
        </v-col>  
        <v-col cols="4">
            <Card />
        </v-col>  
    </v-row>
    <v-row class="d-flex justify-center">
        <v-col cols="6">
            <Card />
        </v-col>  
        <v-col cols="6">
            <Card />
        </v-col>  
    </v-row>
  </v-container>
</template>

<script>
import Card from '../Card';
import axios from 'axios'

const http = axios.create()

export default {
  name: "Content",
  components: {
    Card,
  },
   mounted(){
    http.get('/data_chart.json').then(response => window.console.log(response.data))
  }
  
  
};
</script>

<style>
</style>