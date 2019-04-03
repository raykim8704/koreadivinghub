<template>
    <div>
        <p>{{userinfo}}</p>
    </div>
</template>



<script>
// import firebase from 'firebase';
export default {
    created (){
        console.log('user profile component created');
        console.log(this.userinfo());
        this.objUser = this.userinfo();
        console.log(this.objUser.displayName)
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