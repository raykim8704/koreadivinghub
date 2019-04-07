<template>
  <!-- <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
            <v-avatar size="42px">
                <img
                v-if="this.user._sProfileImagePath"
                v-bind:src="this.user._sProfileImagePath"/>
                </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
        
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
 </v-menu> -->
<div class="text-xs-center">
    <!-- <p>{{this.topuser._sProfileImagePath}}</p> -->
  <!-- <p>{{userinfo}}</p> -->
    <v-menu offset-y >
      <template v-slot:activator="{ on }" v-slot:default="userinfo">
         <v-btn 
         icon    
          v-on="on">
         <v-avatar size="42px" >
            <img :src="userinfo._sProfileImagePath">
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
      
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
    // mounted (){
    //     userinfo = this.topuser
    // },
      created() {
    console.log("top user profile component created");
console.log(this.userinfo)
    
  },
  props: ["userinfo"],
  components: {},

  data() {
    return {
      objUser: this.$store.state.user,
      topuser : this.$store.state.userinfo,
      imagePath : "",
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
  
      

      // username = userinfo
    };
  },
     computed: {
    
    ...mapState(["user"])
  },
}
</script>