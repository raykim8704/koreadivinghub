<template>
    <div>
        <p>{{this.objUser.email}}</p>
    </div>
</template>



<script>
// import firebase from 'firebase';
export default {
    created (){
        console.log('user profile component created');
        console.log(this.$store.state.user);
        this.objUser = this.$store.state.user;
        console.log(this.objUser)
       
    },
    props: ['userinfo'],
  components: {
  },

  data() {
    return {
        objUser : {}
        
        // username = userinfo
    }
  },
};
</script>