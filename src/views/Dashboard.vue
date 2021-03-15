<template>
  <v-app>
    <Navbar />
    <Sidebar />
  </v-app>
</template>

<script>
import Sidebar from '../components/templates/Sidebar'
import Navbar from '../components/templates/Navbar'
export default {
    components: {
        Sidebar, Navbar
    }
}
</script>

<style>

</style>