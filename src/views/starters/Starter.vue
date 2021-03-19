<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <v-main>
      <v-container class="grey lighten-3">
        <Content />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '../../components/Starter/Navbar'
import Sidebar from '../../components/Starter/Sidebar'
import Content from '../../components/Starter/Content'
export default {
  name: 'Starter',
  components: {
    Navbar, Sidebar, Content
  }
}
</script>

<style>

</style>