<template>
  <v-navigation-drawer
    app
    width="260"
      class="secondary"
      dark
      permanent
    >
      <v-list>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
           <img class="ml-6" src="@/assets/logoWsaude.svg" alt="Logo" width="138" height="60">
          </v-list-item-title>
        
        </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-content>
            <v-list-item-subtitle class="subtitle">
            Relatórios
          </v-list-item-subtitle>
          </v-list-content>
        </v-list-item>
        <v-list-item
          v-for="item in itemsReport"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-content>
            <v-list-item-subtitle class="subtitle">
            Gerenciamento
          </v-list-item-subtitle>
          </v-list-content>
        </v-list-item>

        <v-list-item
          v-for="item in itemsManager"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list>
          <v-list-item>
          <v-list-content>
            <v-list-item-subtitle class="subtitle">
            Usuário
          </v-list-item-subtitle>
          </v-list-content>
        </v-list-item>
        </v-list>
        <div class="pa-2">
            <v-card outlined="true" color="#1A2C5B">
              <v-card-text>
                <v-flex>
                  <v-avatar color="white text--black" size="42">LK</v-avatar>
                  
                </v-flex>
              </v-card-text>
            </v-card>
        </div>
      </template>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Sidebar',

    data: () => ({
      itemsReport: [
        {
          icon: 'mdi-chart-bar',
          title: 'Gráficos',
          
        },
        {
          title: 'Listas',
          icon: 'mdi-format-list-bulleted',
          
        },
      ],
      itemsManager: [
        {
          icon: 'mdi-account',
          title: 'Cadastro Cliente',
          
        },
        {
          title: 'Cadastro Pergunta',
          icon: 'mdi-message-question-outline',
          
        },
        {
          title: 'Cadastro Pesquisa',
          icon: 'mdi-clipboard-outline',
          
        },
      ]
    }),

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style>

</style>
