<template>
  <main class="section-container">
    <v-row>
      <v-col>
        <img class="logo" src="@/assets/logoWsaude.svg" alt="">
      </v-col>
    </v-row>
    <v-row class="signin">
      <v-col cols="8" class="left">
        <img src="@/assets/img_bg.png" alt="Bg">
      </v-col>
      <v-col cols="4" class="right">
        <h2>LOGIN</h2>
        <validation-observer ref="observer">
          <v-form @submit.prevent="submit">
            <p>Digite seu endereço de e-mail</p>
            <validation-provider v-slot="{ errors }" name="Name" rules="required|email">
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="Email"
                required
                outlined
                dark
                filled
                dense
              ></v-text-field>
            </validation-provider>
            <validation-provider v-slot="{ errors }" name="email" rules="required">
              <p>Digite sua senha</p>
              <v-text-field
                v-model="password"
                :error-messages="errors"
                label="Password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                required
                outlined
                dense
                dark
                filled
                :type="showPass ? 'text' : 'password'"
              ></v-text-field>
            </validation-provider>
            <div class="text-center">
              <v-btn class="signin-btn" type="submit" rounded color="white" dark>
                Sign In
              </v-btn>
            </div>
          </v-form>
        </validation-observer>
      </v-col>
    </v-row>
  </main>
</template>

<script>
import { required, email } from 'vee-validate/dist/rules'
import { extend, ValidationProvider, setInteractionMode, ValidationObserver } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: '',
    password: null,
    showPass: false
  }),
  computed: {
    params() {
      return {
        email: this.email,
        password: this.password
      }
    }
  },
  methods: {
    async submit() {
      const valid = await this.$refs.observer.validate()
      if (valid) {
        this.login(this.params) // action to login
      }
    },
    clear() {
      // you can use this method to clear login form
      this.email = ''
      this.password = null
      this.$refs.observer.reset()
    }
  }
}
</script>

<style lang="scss">



.section-container {
  background: #1A2C5B;
  box-sizing: border-box;
  display: flex;

  .logo{
    padding-top: 30px;
    padding-left: 30px;
}
  
  .signin {
    padding: 0;
    
    margin: 0 auto;
    
    height: 100%;

    .left {
      margin-top: 100px;
      padding-right: 40px;
      justify-content: center;
      align-items: center;
      display: flex;
      color: #fff;
      background-color: #1A2C5B;
    }
    .right {
      float: right;
      padding: 80px;
      background: #fff;
      color: #000;
      h2 {
        text-align: center;
        margin: 20px 0;
        padding-bottom: 20px;
      }
      .signin-btn {
        width: 100%;
        color: #1A2C5B;
      }
    }
  }
}


</style>