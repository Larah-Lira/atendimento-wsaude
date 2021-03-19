<template>
  <v-container>
    <v-row class="d-flex justify-center">
        <v-col cols="8">
            <CardNPSNow />
        </v-col>  
        <v-col cols="4">
            <CardResearch />
        </v-col>  
    </v-row>
    <v-row class="d-flex justify-center">
        <v-col cols="12">
            <CardNPSEvolution />
        </v-col>  
    </v-row>
  </v-container>
</template>

<script>

import CardNPSNow from '../cards/CardNPSNow'
import CardNPSEvolution from '../cards/CardNPSEvolution'
import CardResearch from '../cards/CardResearch'
import axios from 'axios'

const http = axios.create()

export default {
  name: "Content",
  components: {
    CardNPSNow, CardNPSEvolution,
    CardResearch
  },
   mounted(){
    http.get('/data_chart.json').then(response => {
      this.$store.commit('SET_LIST', response.data)
    })
  }
  
  
};
</script>

<style>
</style>