import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const vuetify = new Vuetify({
  
    theme: {
      themes: {
        light: {
            primary: '#EEEEEEE',
            secondary: '#1A2C5B',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        dark: {
          primary: colors.blue.lighten3,
        },
      },
    },
    font: {
      family: 'Raleway'
    }
})

export default vuetify;


