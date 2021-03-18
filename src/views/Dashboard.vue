<template >
  <v-app>
    <Navbar />
    <Sidebar />
    <v-main>
      <v-container class="grey lighten-3">
        <ChartsContent />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "../components/templates/TheSidebar";
import Navbar from "../components/templates/TheNavbar";
import ChartsContent from "../components/templates/TheChartsContent";

export default {
  components: {
    Sidebar,
    Navbar,
    ChartsContent,
  },

};
</script>

<style>
</style>


