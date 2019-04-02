<template>
    <div>
        <p>{{userinfo}}</p>
    </div>
</template>



<script>
// import firebase from 'firebase';
export default {
    props: {
        userinfo : {
            type : Function,
            required : true
        }
    },
  components: {
  },

  data() {
    return {
        username = userinfo.displayName
    }
  },
};
</script>