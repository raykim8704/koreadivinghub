<template>
  <v-btn outline   @click.stop="loginDialog = !loginDialog" color="white" class="white--text">가입하기
    <Loginmodal v-bind:open="loginDialog"/>
    </v-btn>
</template>

<script>
import Loginmodal from './Loginmodal'
export default {
   components: {
       Loginmodal
  },
  data() {
      return {
          loginDialog: false,
      }
  }
}
</script>